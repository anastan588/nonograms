import { nonoGramBase } from './../nonograms/nonograms.js';
import { generateGameField, generateLeftHintsField, generateTopHintsField } from './field';
import {
    fillGameCell,
    emptyGameCell,
    restartGame,
    fillGameCellByColor,
    fillGameCellByCross,
    cross,
} from './gamesolution.js';
import fillsound from './../sounds/fillsound.mp3';
import emptysound from './../sounds/emptysound.mp3';
import crosssound from './../sounds/crosssound.mp3';
import winsound from './../sounds/winsound.mp3';
import soundonImage from './../images/soundon.png';
import soundoffImage from './../images/soundoff.png';

// alert(
//     'Уважаемые проверяющие, большая просьба начать проверять работу не раньше среды. Буду очень благодана)  Всем хороших оценок!'
// );

const mainContainer = document.querySelector('.main_container');
export const overlay = document.querySelector('.overlay');

export let gameLevel = {
    fieldSize: 5,
    image: nonoGramBase['5'][0],
    countOfFilledCells: 0,
    initialCountOfCells: 0,
};

export let timer = '';
export let minutes = 0;
export let seconds = 0;
export let clickCount = 0;
export let loadGameFromMemory = false;

export const audioForFillCell = new Audio(fillsound);
export const audioForEmptyCell = new Audio(emptysound);
export const audioForCrossCell = new Audio(crosssound);
export const audioForWin = new Audio(winsound);

console.log(gameLevel);
generateGameField(nonoGramBase, gameLevel);
generateLeftHintsField(gameLevel);
generateTopHintsField(gameLevel);

function generateResultsTable() {}

const gamefield = document.querySelector('.main_field');

function startGameTimer() {
    setTimeout(() => {
        countTime();
    }, 0);
    timer = setInterval(() => {
        countTime();
    }, 1000);
}
function countTime() {
    const timerField = document.querySelector('.timer');
    if (seconds > 60) {
        minutes = minutes + 1;
        seconds = 0;
    }
    seconds = seconds + 1;
    if (minutes >= 10 && seconds < 10) {
        timerField.textContent = `${minutes}:0${seconds}`;
    } else if (minutes >= 10 && seconds >= 10) {
        timerField.textContent = `${minutes}:${seconds}`;
    } else if (seconds < 10) {
        timerField.textContent = `0${minutes}:0${seconds}`;
    } else if (seconds >= 10) {
        timerField.textContent = `0${minutes}:${seconds}`;
    }
}

const modalWindowLevels = `<div class="levels_widow">
                             <div class="levels_item easy">
                               <p class="level_title">Easy</p>
                               <div class="level_variants easy"></div>
                             <div>
                             <div class="levels_item medium">
                               <p class="level_title">Medium</p>
                               <div class="level_variants medium"></div>
                             <div>
                             <div class="levels_item hard">
                               <p class="level_title">Hard</p>
                               <div class="level_variants hard"></div>
                             <div>
                             <div class="level_close">OK</div>
                           </div>`;

gamefield.addEventListener('click', (event) => {
    console.log(event.button);
    if (event.button === 0) {
        fillGameCellByColor(event);
        clickCount += 1;
        console.log(gameLevel.countOfFilledCells);
        if (clickCount === 1 || loadGameFromMemory === true) {
            startGameTimer();
            loadGameFromMemory = false;
        }
    }
});
gamefield.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    fillGameCellByCross(event);
});

const restartGameButton = document.querySelector('.restart_game');

restartGameButton.addEventListener('click', (event) => {
    clickCount = 0;
    minutes = 0;
    seconds = 0;
    restartGame(event, gameLevel, timer);
});

const levelsButton = document.querySelector('.levels');

levelsButton.addEventListener('click', openLevelsWindow);

function openLevelsWindow() {
    const levelsWindow = modalWindowLevels;
    const mainContainer = document.querySelector('.main_container');
    console.log(mainContainer);
    mainContainer.insertAdjacentHTML('beforeend', levelsWindow);
    const LevelsVariantsItems = document.querySelectorAll('.level_variants');
    for (let i = 0; i < LevelsVariantsItems.length; i += 1) {
        if (LevelsVariantsItems[i].classList.contains('easy')) {
            for (let k = 0; k < nonoGramBase[5].length; k += 1) {
                const level = document.createElement('div');
                level.classList.add('image_name');
                if (localStorage.getItem('theme')) {
                    level.classList.add('image_name_light');
                }
                level.classList.add('image_easy');
                level.innerHTML =
                    nonoGramBase[5][k].title.charAt(0).toUpperCase() + nonoGramBase[5][k].title.slice(1).toLowerCase();
                level.addEventListener('click', (event) => chooseNewImageToGame(event));
                LevelsVariantsItems[i].append(level);
            }
        }
        if (LevelsVariantsItems[i].classList.contains('medium')) {
            for (let k = 0; k < nonoGramBase[10].length; k += 1) {
                const level = document.createElement('div');
                level.classList.add('image_name');
                if (localStorage.getItem('theme')) {
                    level.classList.add('image_name_light');
                }
                level.classList.add('image_medium');
                level.innerHTML =
                    nonoGramBase[10][k].title.charAt(0).toUpperCase() +
                    nonoGramBase[10][k].title.slice(1).toLowerCase();
                level.addEventListener('click', (event) => chooseNewImageToGame(event));
                LevelsVariantsItems[i].append(level);
            }
        }
        if (LevelsVariantsItems[i].classList.contains('hard')) {
            for (let k = 0; k < nonoGramBase[15].length; k += 1) {
                const level = document.createElement('div');
                level.classList.add('image_name');
                if (localStorage.getItem('theme')) {
                    level.classList.add('image_name_light');
                }
                level.classList.add('image_hard');
                level.innerHTML =
                    nonoGramBase[15][k].title.charAt(0).toUpperCase() +
                    nonoGramBase[15][k].title.slice(1).toLowerCase();
                level.addEventListener('click', (event) => chooseNewImageToGame(event));
                LevelsVariantsItems[i].append(level);
            }
        }
    }
    overlay.style.display = 'block';
    const closeLevelsWindowButton = document.querySelector('.level_close');
    closeLevelsWindowButton.addEventListener('click', (event) => closeLevelsWindow(event));
    const levelWindow = document.querySelector('.levels_widow');
    if (localStorage.getItem('theme')) {
        levelWindow.classList.add('levels_window_light');
    }
}

function closeLevelsWindow(event) {
    event.stopPropagation();
    const levelsWindow = document.querySelector('.levels_widow');
    levelsWindow.remove();
    overlay.style.removeProperty('display');
    restartGame(event, gameLevel, timer);
    clickCount = 0;
    minutes = 0;
    seconds = 0;
}

function chooseNewImageToGame(event) {
    const newImage = event.target;
    console.log(newImage);
    newImage.classList.add('image_name_play');
    if (localStorage.getItem('theme')) {
        newImage.classList.add('image_name_play_light');
    }
    const otherLevelsImages = document.querySelectorAll('.image_name');

    for (let i = 0; i < otherLevelsImages.length; i += 1) {
        if (
            otherLevelsImages[i].classList.contains('image_name_play') &&
            otherLevelsImages[i].innerHTML !== newImage.innerHTML
        ) {
            otherLevelsImages[i].classList.remove('image_name_play');
            if (localStorage.getItem('theme')) {
                otherLevelsImages[i].classList.remove('image_name_play_light');
            }
        }
    }
    let complicity = 0;
    if (newImage.classList.contains('image_easy')) {
        complicity = 5;
    }
    if (newImage.classList.contains('image_medium')) {
        complicity = 10;
    }
    if (newImage.classList.contains('image_hard')) {
        complicity = 15;
    }
    for (let i = 0; i < nonoGramBase[complicity].length; i += 1) {
        if (nonoGramBase[complicity][i].title === newImage.innerHTML.toLowerCase()) {
            gameLevel.fieldSize = complicity;
            gameLevel.image = nonoGramBase[complicity][i];
        }
    }
}

const randomGame = document.querySelector('.random_game');

randomGame.addEventListener('click', (event) => generateRandomImage(event));

function generateRandomImage(event) {
    const numberOfLevels = Object.keys(nonoGramBase).length;
    const levels = Object.keys(nonoGramBase);
    const randomLevel = Math.floor(Math.random() * numberOfLevels);
    console.log(levels);
    console.log(randomLevel);
    const finishedRandomLevel = Number(levels[randomLevel]);
    console.log(finishedRandomLevel);
    const randomImageAccordingTolevel = Math.floor(Math.random() * nonoGramBase[finishedRandomLevel].length);
    console.log(randomImageAccordingTolevel);
    gameLevel.fieldSize = finishedRandomLevel;
    gameLevel.image = nonoGramBase[finishedRandomLevel][randomImageAccordingTolevel];
    restartGame(event, gameLevel, timer);
    clickCount = 0;
    minutes = 0;
    seconds = 0;
}

const soundButton = document.querySelector('.sound');
soundButton.addEventListener('click', (event) => sounOffOn(event));

function sounOffOn(event) {
    soundButton.classList.toggle('sound_off');

    if (localStorage.getItem('theme')) {
        soundButton.classList.toggle('sound_off_light');
    }
    if (soundButton.classList.contains('sound_off')) {
        soundButton.children[0].src = soundoffImage;
        audioForFillCell.volume = 0;
        audioForEmptyCell.volume = 0;
        audioForCrossCell.volume = 0;
        audioForWin.volume = 0;
    } else if (!soundButton.classList.contains('sound_off')) {
        soundButton.children[0].src = soundonImage;
        audioForFillCell.volume = 1;
        audioForEmptyCell.volume = 1;
        audioForCrossCell.volume = 1;
        audioForWin.volume = 1;
    }
}

const resultsTable = `<div class="results_table">
                         <p class="results_title">Win results</p>
                         <div class="results_block">
                           <div class="results_hat">
                              <p class="hat_item">Title</p>
                              <p class="hat_item">Level</p>
                              <p class="hat_item">Time</p>
                           </div>
                           <div class="table">
                           </div>
                         </div>
                         <div class="results_close">OK</div>
                      <div>`;

const resultsButton = document.querySelector('.results');

resultsButton.addEventListener('click', (event) => showResultsTable(event));

function showResultsTable(event) {
    const tableWindow = resultsTable;
    const mainContainer = document.querySelector('.main_container');
    console.log(mainContainer);

    mainContainer.insertAdjacentHTML('beforeend', tableWindow);
    overlay.style.display = 'block';
    const closeLevelsWindowButton = document.querySelector('.results_close');
    closeLevelsWindowButton.addEventListener('click', (event) => closeResultsTableWindow(event));
    let arrayOfResults = [];

    if (localStorage.getItem('winResults')) {
        arrayOfResults = JSON.parse(localStorage.getItem('winResults'));
        let arrayOfResultsSortByTime = arrayOfResults.sort((a, b) => a.seconds - b.seconds);
        console.log(JSON.parse(localStorage.getItem('winResults')));
        console.log(arrayOfResultsSortByTime);
        const table = document.querySelector('.table');
        for (let i = 0; i < arrayOfResultsSortByTime.length; i += 1) {
            const tableResult = document.createElement('div');
            tableResult.classList.add('table_item');
            // const numberOfKeysInResult = Object.keys(arrayOfResultsSortByTime[i]).length;
            for (let key in arrayOfResultsSortByTime[i]) {
                if (key.valueOf() === 'seconds') {
                    break;
                }
                const tableResultItem = document.createElement('div');
                tableResultItem.classList.add('table_item_item');
                tableResultItem.innerHTML = arrayOfResultsSortByTime[i][key];
                tableResult.append(tableResultItem);
            }
            table.append(tableResult);
        }
    }
    const resultsWindow = document.querySelector('.results_table');
    if (localStorage.getItem('theme')) {
        resultsWindow.classList.add('results_table_light');
    }
}

function closeResultsTableWindow(event) {
    event.stopPropagation();
    const resultsWindow = document.querySelector('.results_table');
    resultsWindow.remove();
    overlay.style.removeProperty('display');
}

const themeButton = document.querySelector('.themes');

themeButton.addEventListener('click', (event) => changeTheme(event));

function changeTheme(event) {
    // const themeButton = event.target;
    console.log(themeButton);
    themeButton.classList.toggle('themes_light');
    const mainContainer = document.querySelector('.main_container');
    const mainButtons = document.querySelectorAll('.settings_item');
    const footer = document.querySelector('.footer');
    const header = document.querySelector('.header');
    const emptyField = document.querySelector('.empty_field');
    const topFiled = document.querySelector('.top_field');
    const leftFiled = document.querySelector('.left_field');
    const mainFiled = document.querySelector('.main_field');
    const mainCells = document.querySelectorAll('.main_cell');
    const topHints = document.querySelectorAll('.top_hint');
    const leftHints = document.querySelectorAll('.left_hint');
    const name = document.querySelector('.name');
    const github = document.querySelector('.github');
    if (themeButton.classList.contains('themes_light')) {
        localStorage.setItem('theme', 'light');
        mainContainer.classList.add('main_container_light');
        for (let i = 0; i < mainButtons.length; i += 1) {
            mainButtons[i].classList.add('settings_item_light');
        }
        footer.classList.add('footer_light');
        header.classList.add('header_light');
        emptyField.classList.add('empty_field_light');
        topFiled.classList.add('top_field_light');
        leftFiled.classList.add('left_field_light');
        mainFiled.classList.add('left_field_light');
        name.classList.add('name_light');
        github.classList.add('github_light');
        for (let i = 0; i < mainCells.length; i += 1) {
            mainCells[i].classList.add('main_cell_light');
        }
        for (let i = 0; i < topHints.length; i += 1) {
            topHints[i].classList.add('top_hint_light');
        }
        for (let i = 0; i < leftHints.length; i += 1) {
            leftHints[i].classList.add('left_hint_light');
        }
    } else if (!themeButton.classList.contains('themes_light')) {
        localStorage.removeItem('theme');
        mainContainer.classList.remove('main_container_light');
        for (let i = 0; i < mainButtons.length; i += 1) {
            mainButtons[i].classList.remove('settings_item_light');
        }
        footer.classList.remove('footer_light');
        header.classList.remove('header_light');
        emptyField.classList.remove('empty_field_light');
        topFiled.classList.remove('top_field_light');
        leftFiled.classList.remove('left_field_light');
        mainFiled.classList.remove('left_field_light');
        name.classList.remove('name_light');
        github.classList.remove('github_light');
        for (let i = 0; i < mainCells.length; i += 1) {
            mainCells[i].classList.remove('main_cell_light');
        }
        for (let i = 0; i < topHints.length; i += 1) {
            topHints[i].classList.remove('top_hint_light');
        }
        for (let i = 0; i < leftHints.length; i += 1) {
            leftHints[i].classList.remove('left_hint_light');
        }
    }
}

window.addEventListener('load', (event) => {
    setTimeout((event) => {
        if (localStorage.getItem('theme')) {
            changeTheme(event);
        }
    }, 0);
    console.log(event);
});

const modalWindowLastGame = `<div class="last_window">
                                 <p class="last_text">
                                      Do you want to load last game?
                             </p>
                             <div class="last_choice">
                                 <div class="last_no last_button">No</div>
                                <div class="last_yes last_button">Yes</div>
                             </div>
                             </div>`;

const lastGameButton = document.querySelector('.last_game');
lastGameButton.addEventListener('click', openLastGameWindow);

function openLastGameWindow() {
    const mainContainer = document.querySelector('.main_container');
    mainContainer.insertAdjacentHTML('beforeend', modalWindowLastGame);

    overlay.style.display = 'block';
    const lastGameWin = document.querySelector('.last_window');
    if (localStorage.getItem('theme')) {
        lastGameWin.classList.add('last_window_light');
    }
    const lastYesButton = document.querySelector('.last_yes');
    const lastNoButton = document.querySelector('.last_no');
    lastNoButton.addEventListener('click', (event) => {
        closeLastGameModalWindow(event);
    });
    lastYesButton.addEventListener('click', (event) => {
        closeLastGameModalWindow(event);
        clearInterval(timer);
        loadLastGame();
    });
}

function closeLastGameModalWindow(event) {
    event.stopPropagation();
    const lastGameWin = document.querySelector('.last_window');
    lastGameWin.remove();
    overlay.style.removeProperty('display');
}

function loadLastGame() {
    if (!localStorage.getItem('savedGame')) {
        return;
    }
    const lastGameObject = JSON.parse(localStorage.getItem('savedGame'));
    const lastGamePicture = JSON.parse(lastGameObject.picture);
    console.log(lastGamePicture);
    const timerField = document.querySelector('.timer');
    timerField.innerHTML = lastGameObject.timer;
    const name = document.querySelector('.name');
    name.innerHTML = lastGamePicture['image']['title'].toUpperCase();
    gameLevel = lastGamePicture;
    clickCount = lastGameObject.clickCount;
    minutes = lastGameObject.minutes;
    seconds = lastGameObject.seconds;
    const contOfffiledCellslastGame = JSON.parse(JSON.stringify(lastGamePicture.countOfFilledCells));
    generateGameField(nonoGramBase, gameLevel);
    generateLeftHintsField(gameLevel);
    generateTopHintsField(gameLevel);
    const arrayofmainFieldCells = document.querySelectorAll('.main_cell');
    const arrayOfLeftHints = document.querySelectorAll('.left_hint');
    const arrayOfToptHints = document.querySelectorAll('.top_hint');
    for (let i = 0; i < lastGameObject.arrayofmainFieldCells.length; i += 1) {
        if (lastGameObject.arrayofmainFieldCells[i] === 'filled') {
            arrayofmainFieldCells[i].classList.add('main_cell_filled');
        } else if (lastGameObject.arrayofmainFieldCells[i] === 'crossed') {
            arrayofmainFieldCells[i].classList.add('main_cell_crossed');
            arrayofmainFieldCells[i].insertAdjacentHTML('beforeend', cross);
        }
    }
    for (let i = 0; i < lastGameObject.arrayOfLeftHints.length; i += 1) {
        if (lastGameObject.arrayOfLeftHints[i] === 'crossed') {
            arrayOfLeftHints[i].insertAdjacentHTML('beforeend', cross);
        }
    }
    for (let i = 0; i < lastGameObject.arrayOfTopHints.length; i += 1) {
        if (lastGameObject.arrayOfTopHints[i] === 'crossed') {
            arrayOfToptHints[i].insertAdjacentHTML('beforeend', cross);
        }
    }
    loadGameFromMemory = true;
    setTimeout(() => {
        console.log(lastGamePicture);
        console.log(contOfffiledCellslastGame);
        gameLevel.countOfFilledCells = contOfffiledCellslastGame;
        console.log(gameLevel);
        console.log(clickCount);
        console.log(gameLevel.countOfFilledCells);
    }, 0);
}

export function setTimerVariables() {
    clickCount = 0;
    minutes = 0;
    seconds = 0;
}
