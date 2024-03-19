import { generateGameField, generateLeftHintsField, generateTopHintsField } from './field';
import { nonoGramBase } from './../nonograms/nonograms.js';
import {
    audioForCrossCell,
    audioForEmptyCell,
    audioForFillCell,
    audioForWin,
    clickCount,
    gameLevel,
    minutes,
    seconds,
    setTimerVariables,
} from './game.js';
import { timer } from './game.js';
import { overlay } from './game.js';

function isEvent(variable) {
    return variable instanceof Event;
}

export const cross = `<div class="cross">
                  <div class="cross_line line_one"></div>
                  <div class="cross_line line_two"></div>
               </div>`;

function modalWindowFinishedGame(secondsString) {
    return `<div class="finish_window">
              <p class="finish_text">
                Great! You have solved the nonogram in ${secondsString} seconds !
              </p>
              <div class="finish_close">OK</div>
            </div>`;
}

export function fillGameCellByColor(event) {
    let currentCell = event.target;
    if (currentCell.classList.contains('cross')) {
        currentCell = event.target.parentElement;
    }
    if (currentCell.classList.contains('cross_line')) {
        currentCell = event.target.parentElement.parentElement;
    }
    if (!currentCell.classList.contains('main_cell')) {
        return;
    }
    if (currentCell.classList.contains('main_cell_filled')) {
        emptyGameCell(event);
    } else {
        currentCell.classList.add('main_cell_filled');
        audioForCrossCell.pause();
        audioForEmptyCell.pause();
        audioForFillCell.pause();
        audioForCrossCell.load();
        audioForEmptyCell.load();
        audioForFillCell.load();
        audioForFillCell.play();
        currentCell.dataset.fill = `true`;
        checkRow(gameLevel, currentCell);
        checkColumn(gameLevel, currentCell);
        gameLevel.countOfFilledCells -= 1;
        console.log(gameLevel.countOfFilledCells);
        if (gameLevel.countOfFilledCells === 0) {
            checkIfGameIsFinish(gameLevel);
        }
        if (currentCell.classList.contains('main_cell_crossed')) {
            currentCell.classList.remove('main_cell_crossed');
            currentCell.innerHTML = '';
            delete currentCell.dataset.crossed;
        }
    }
}

export function fillGameCellByCross(event) {
    let currentCell = '';
    if (isEvent(event)) {
        currentCell = event.target;
        if (currentCell.classList.contains('cross')) {
            currentCell = event.target.parentElement;
        }
        if (currentCell.classList.contains('cross_line')) {
            currentCell = event.target.parentElement.parentElement;
        }
    } else {
        currentCell = event;
        console.log(currentCell);
        if (currentCell.classList.contains('main_cell_crossed')) {
            return;
        }
    }
    if (!currentCell.classList.contains('main_cell')) {
        return;
    }
    if (currentCell.classList.contains('main_cell_filled')) {
        return;
    }
    if (currentCell.classList.contains('main_cell_crossed')) {
        emptyGameCell(event);
    } else {
        currentCell.classList.add('main_cell_crossed');
        if (isEvent(event)) {
            audioForCrossCell.pause();
            audioForEmptyCell.pause();
            audioForFillCell.pause();
            audioForCrossCell.load();
            audioForEmptyCell.load();
            audioForFillCell.load();
            audioForCrossCell.play();
        }
        currentCell.dataset.crossed = `true`;
        currentCell.insertAdjacentHTML('beforeend', cross);
    }
}
export function emptyGameCell(event) {
    let currentCell = event.target;
    console.log(currentCell);
    if (currentCell.classList.contains('cross')) {
        currentCell = event.target.parentElement;
    }
    if (currentCell.classList.contains('cross_line')) {
        currentCell = event.target.parentElement.parentElement;
    }
    if (!currentCell.classList.contains('main_cell')) {
        return;
    }
    if (currentCell.classList.contains('main_cell_filled')) {
        currentCell.classList.remove('main_cell_filled');
        audioForCrossCell.pause();
        audioForEmptyCell.pause();
        audioForFillCell.pause();
        audioForCrossCell.load();
        audioForEmptyCell.load();
        audioForFillCell.load();
        audioForEmptyCell.play();
        delete currentCell.dataset.fill;
        gameLevel['countOfFilledCells'] += 1;
        console.log(gameLevel.countOfFilledCells);
        console.log(gameLevel['countOfFilledCells']);
        checkRow(gameLevel, currentCell);
        checkColumn(gameLevel, currentCell);
        if (gameLevel.countOfFilledCells === 0) {
            checkIfGameIsFinish(gameLevel);
        }
    }
    if (currentCell.classList.contains('main_cell_crossed')) {
        currentCell.classList.remove('main_cell_crossed');
        audioForCrossCell.pause();
        audioForEmptyCell.pause();
        audioForFillCell.pause();
        audioForCrossCell.load();
        audioForEmptyCell.load();
        audioForFillCell.load();
        audioForEmptyCell.play();
        currentCell.innerHTML = '';
        delete currentCell.dataset.crossed;
    }
}

export function restartGame(event, gameLevel, timer) {
    if (event !== undefined) {
        event.stopPropagation();
    }

    clearInterval(timer);
    const timerField = document.querySelector('.timer');
    timerField.textContent = `00:00`;
    generateGameField(nonoGramBase, gameLevel);
    generateLeftHintsField(gameLevel);
    generateTopHintsField(gameLevel);
}

function fillHintCellByCross(cell) {
    const currentCell = cell;
    console.log(currentCell);
    // if (currentCell.classList.contains('main_cell_crossed')) {
    //     return;
    // }
    currentCell.classList.add('main_cell_crossed');
    currentCell.dataset.crossed = `true`;
    currentCell.insertAdjacentHTML('beforeend', cross);
}

function checkRow(gameLevel, currentCell) {
    const currentRow = Number(currentCell.dataset.position.split(',')[0]);
    const allCells = document.querySelector('.main_field').children;
    const rowSellsEnd = gameLevel['fieldSize'] * (currentRow + 1) - 1;
    const rowSellsStart = rowSellsEnd - gameLevel['fieldSize'] + 1;
    let currentRowHints = document.querySelector('.left_field').children[currentRow].children;
    console.log(currentRowHints);
    let rightfilledCellsOfRow = 0;
    let wrongfilledCellsOfRow = 0;
    for (let i = rowSellsEnd; i >= rowSellsStart; i -= 1) {
        if (allCells[i].classList.contains('main_cell_filled')) {
            if (Number(allCells[i].getAttribute('id')) === 1) {
                rightfilledCellsOfRow += 1;
                console.log(allCells[i]);
            } else {
                wrongfilledCellsOfRow += 1;
            }
        }
    }
    const arrayOfHints = [];
    for (let i = 0; i < currentRowHints.length; i += 1) {
        console.log(currentRowHints[i]);
        if (currentRowHints[i].childNodes.length > 1) {
            if (currentRowHints[i].childNodes[0].innerHTML !== '') {
                arrayOfHints.push(currentRowHints[i].childNodes[0]['data']);
            }
        } else {
            if (currentRowHints[i].innerHTML !== '') {
                arrayOfHints.push(currentRowHints[i].innerHTML);
            }
        }
    }
    console.log(arrayOfHints);
    let countOfRightFilledCells = 0;
    for (let i = rowSellsStart; i <= rowSellsEnd; i += 1) {
        console.log(rowSellsStart, rowSellsEnd);
        if (Number(allCells[i].getAttribute('id')) === 1 && allCells[i].classList.contains('main_cell_filled')) {
            countOfRightFilledCells += 1;
            if (i === rowSellsEnd && countOfRightFilledCells !== gameLevel['fieldSize']) {
                if (Number(allCells[i - countOfRightFilledCells].getAttribute('id')) !== 1) {
                    fillGameCellByCross(allCells[i - countOfRightFilledCells]);
                    countOfRightFilledCells = 0;
                    for (let h = 0; h < currentRowHints.length; h += 1) {
                        if (allCells[i].dataset.hintidrow === currentRowHints[h].dataset.hintidleft) {
                            fillHintCellByCross(currentRowHints[h]);
                        }
                    }
                }
            } else if (countOfRightFilledCells === gameLevel['fieldSize']) {
                for (let h = 0; h < currentRowHints.length; h += 1) {
                    if (allCells[i].dataset.hintidrow === currentRowHints[h].dataset.hintidleft) {
                        fillHintCellByCross(currentRowHints[h]);
                    }
                }
            }
            if (allCells[i + 1] !== undefined) {
                if (
                    Number(allCells[i + 1].getAttribute('id')) === 0 &&
                    !allCells[i + 1].classList.contains('main_cell_filled') &&
                    countOfRightFilledCells > 0 &&
                    countOfRightFilledCells !== gameLevel['fieldSize']
                ) {
                    if (i === rowSellsStart) {
                        fillGameCellByCross(allCells[i + 1]);
                        for (let h = 0; h < currentRowHints.length; h += 1) {
                            if (allCells[i].dataset.hintidrow === currentRowHints[h].dataset.hintidleft) {
                                fillHintCellByCross(currentRowHints[h]);
                            }
                        }
                    }
                    if (allCells[i - countOfRightFilledCells] !== undefined) {
                        if (
                            Number(allCells[i - countOfRightFilledCells].getAttribute('id')) !== 1 &&
                            !allCells[i - countOfRightFilledCells].classList.contains('main_cell_filled')
                        ) {
                            fillGameCellByCross(allCells[i - countOfRightFilledCells]);
                            fillGameCellByCross(allCells[i + 1]);
                            for (let h = 0; h < currentRowHints.length; h += 1) {
                                if (allCells[i].dataset.hintidrow === currentRowHints[h].dataset.hintidleft) {
                                    fillHintCellByCross(currentRowHints[h]);
                                }
                            }
                        }
                    } else if (allCells[i - countOfRightFilledCells] === undefined) {
                        fillGameCellByCross(allCells[i + 1]);
                        for (let h = 0; h < currentRowHints.length; h += 1) {
                            if (allCells[i].dataset.hintidrow === currentRowHints[h].dataset.hintidleft) {
                                fillHintCellByCross(currentRowHints[h]);
                            }
                        }
                    }

                    countOfRightFilledCells = 0;
                }
            }
        }
    }
    let sumOfHints = 0;
    for (let i = 0; i < arrayOfHints.length; i++) {
        sumOfHints += Number(arrayOfHints[i]);
    }
    console.log(sumOfHints);
    console.log(rightfilledCellsOfRow);
    if (sumOfHints === rightfilledCellsOfRow && wrongfilledCellsOfRow === 0) {
        for (let i = rowSellsEnd; i >= rowSellsStart; i -= 1) {
            fillGameCellByCross(allCells[i]);
        }
        setTimeout(() => {
            for (let i = rowSellsEnd; i >= rowSellsStart; i -= 1) {
                if (!allCells[i].classList.contains('main_cell_crossed')) {
                    if (!allCells[i].classList.contains('main_cell_filled')) {
                        console.log('lastcheck');
                        fillGameCellByCross(allCells[i]);
                    }
                }
            }
        }, 0);
    }
}

function checkColumn(gameLevel, currentCell) {
    const currentColumn = Number(currentCell.dataset.position.split(',')[1]);
    console.log(currentColumn);
    let currentColumnHints = document.querySelector('.top_field').children[currentColumn].children;
    console.log(currentColumnHints);
    const allCells = document.querySelector('.main_field').children;
    const columnSellsStart = currentColumn;
    const columnSellsEnd = allCells.length - (gameLevel['fieldSize'] - currentColumn);
    console.log(columnSellsStart);
    console.log(columnSellsEnd);
    const indexsOfColumnCells = [];
    for (let i = columnSellsStart; i <= columnSellsEnd; i += gameLevel['fieldSize']) {
        indexsOfColumnCells.push(i);
    }

    console.log(indexsOfColumnCells);
    let rightfilledCellsOfColumn = 0;
    let wrongfilledCellsOfColumn = 0;
    for (let n = indexsOfColumnCells.length - 1; n >= 0; n -= 1) {
        if (allCells[Number(indexsOfColumnCells[n])].classList.contains('main_cell_filled')) {
            if (Number(allCells[Number(indexsOfColumnCells[n])].getAttribute('id')) === 1) {
                rightfilledCellsOfColumn += 1;
            } else {
                wrongfilledCellsOfColumn += 1;
            }
        }
    }
    const arrayOfHints = [];
    for (let i = 0; i < currentColumnHints.length; i += 1) {
        console.log(currentColumnHints[i]);
        if (currentColumnHints[i].childNodes.length > 1) {
            if (currentColumnHints[i].childNodes[0].innerHTML !== '') {
                arrayOfHints.push(currentColumnHints[i].childNodes[0]['data']);
            }
        } else {
            if (currentColumnHints[i].innerHTML !== '') {
                arrayOfHints.push(currentColumnHints[i].innerHTML);
            }
        }
    }
    console.log(arrayOfHints);
    let countOfRightFilledCells = 0;
    for (let n = 0; n <= indexsOfColumnCells.length - 1; n += 1) {
        if (
            Number(allCells[Number(indexsOfColumnCells[n])].getAttribute('id')) === 1 &&
            allCells[Number(indexsOfColumnCells[n])].classList.contains('main_cell_filled')
        ) {
            countOfRightFilledCells += 1;
            if (
                Number(indexsOfColumnCells[n]) === columnSellsEnd &&
                countOfRightFilledCells !== indexsOfColumnCells.length
            ) {
                if (
                    Number(allCells[Number(indexsOfColumnCells[n - countOfRightFilledCells])].getAttribute('id')) !== 1
                ) {
                    fillGameCellByCross(allCells[Number(indexsOfColumnCells[n - countOfRightFilledCells])]);
                    countOfRightFilledCells = 0;
                    for (let h = 0; h < currentColumnHints.length; h += 1) {
                        if (
                            allCells[Number(indexsOfColumnCells[n])].dataset.hintidcolumn ===
                            currentColumnHints[h].dataset.hintidtop
                        ) {
                            fillHintCellByCross(currentColumnHints[h]);
                        }
                    }
                }
            } else if (countOfRightFilledCells === indexsOfColumnCells.length) {
                for (let h = 0; h < currentColumnHints.length; h += 1) {
                    if (
                        allCells[Number(indexsOfColumnCells[n])].dataset.hintidcolumn ===
                        currentColumnHints[h].dataset.hintidtop
                    ) {
                        fillHintCellByCross(currentColumnHints[h]);
                    }
                }
            }
            if (allCells[Number(indexsOfColumnCells[n + 1])] !== undefined) {
                if (
                    Number(allCells[Number(indexsOfColumnCells[n + 1])].getAttribute('id')) === 0 &&
                    !allCells[Number(indexsOfColumnCells[n + 1])].classList.contains('main_cell_filled') &&
                    countOfRightFilledCells > 0 &&
                    countOfRightFilledCells !== gameLevel['fieldSize']
                ) {
                    if (Number(indexsOfColumnCells[n]) === columnSellsStart) {
                        fillGameCellByCross(allCells[Number(indexsOfColumnCells[n + 1])]);
                        for (let h = 0; h < currentColumnHints.length; h += 1) {
                            if (
                                allCells[Number(indexsOfColumnCells[n])].dataset.hintidcolumn ===
                                currentColumnHints[h].dataset.hintidtop
                            ) {
                                fillHintCellByCross(currentColumnHints[h]);
                            }
                        }
                    }
                    console.log(allCells[Number(indexsOfColumnCells[n - countOfRightFilledCells])]);
                    if (allCells[Number(indexsOfColumnCells[n - countOfRightFilledCells])] !== undefined) {
                        if (
                            Number(
                                allCells[Number(indexsOfColumnCells[n - countOfRightFilledCells])].getAttribute('id')
                            ) !== 1 &&
                            !allCells[Number(indexsOfColumnCells[n - countOfRightFilledCells])].classList.contains(
                                'main_cell_filled'
                            )
                        ) {
                            fillGameCellByCross(allCells[Number(indexsOfColumnCells[n - countOfRightFilledCells])]);
                            fillGameCellByCross(allCells[Number(indexsOfColumnCells[n + 1])]);
                            for (let h = 0; h < currentColumnHints.length; h += 1) {
                                if (
                                    allCells[Number(indexsOfColumnCells[n])].dataset.hintidcolumn ===
                                    currentColumnHints[h].dataset.hintidtop
                                ) {
                                    fillHintCellByCross(currentColumnHints[h]);
                                }
                            }
                        }
                    } else {
                        fillGameCellByCross(allCells[Number(indexsOfColumnCells[n + 1])]);
                        for (let h = 0; h < currentColumnHints.length; h += 1) {
                            if (
                                allCells[Number(indexsOfColumnCells[n])].dataset.hintidcolumn ===
                                currentColumnHints[h].dataset.hintidtop
                            ) {
                                fillHintCellByCross(currentColumnHints[h]);
                            }
                        }
                    }
                    countOfRightFilledCells = 0;
                }
            }
        }
    }
    let sumOfHints = 0;
    for (let i = 0; i < arrayOfHints.length; i++) {
        sumOfHints += Number(arrayOfHints[i]);
    }
    console.log(sumOfHints);
    console.log(rightfilledCellsOfColumn);
    if (sumOfHints === rightfilledCellsOfColumn && wrongfilledCellsOfColumn === 0) {
        for (let n = indexsOfColumnCells.length - 1; n >= 0; n -= 1) {
            fillGameCellByCross(allCells[Number(indexsOfColumnCells[n])]);
        }
        setTimeout(() => {
            for (let n = indexsOfColumnCells.length - 1; n >= 0; n -= 1) {
                if (!allCells[Number(indexsOfColumnCells[n])].classList.contains('main_cell_crossed')) {
                    if (!allCells[Number(indexsOfColumnCells[n])].classList.contains('main_cell_filled')) {
                        console.log('lastcheck');
                        fillGameCellByCross(allCells[Number(indexsOfColumnCells[n])]);
                    }
                }
            }
        }, 0);
    }
}

function checkIfGameIsFinish(gameLevel) {
    const allCells = document.querySelector('.main_field').children;
    console.log(gameLevel);
    console.log(allCells);
    let checkCount = 0;
    let finished = true;
    for (let i = 0; i < allCells.length; i += 1) {
        if (allCells[i].classList.contains('main_cell_filled') && Number(allCells[i].getAttribute('id')) === 1) {
            checkCount += 1;
        }
        if (allCells[i].classList.contains('main_cell_filled') && Number(allCells[i].getAttribute('id')) !== 1) {
            finished === false;
        }
    }
    console.log(checkCount);
    console.log(finished);
    console.log(checkCount === gameLevel['initialCountOfCells']);
    console.log('hello');
    if (checkCount === gameLevel['initialCountOfCells'] && finished === true) {
        clearInterval(timer);
        openFinishedWindow();
    }
}
function openFinishedWindow() {
    audioForWin.play();
    const timerField = document.querySelector('.timer');
    console.log(timerField);
    const time = timerField.innerHTML;
    const [minutes, seconds] = time.split(':');
    const totalSeconds = parseInt(minutes) * 60 + parseInt(seconds);
    const finishedWindow = modalWindowFinishedGame(totalSeconds);
    let difficulty = '';
    if (gameLevel.fieldSize === 5) {
        difficulty = 'easy';
    } else if (gameLevel.fieldSize === 10) {
        difficulty = 'medium';
    } else if (gameLevel.fieldSize === 15) {
        difficulty = 'hard';
    }
    const winResult = {
        name: gameLevel.image.title,
        difficulty: difficulty,
        fulltime: time,
        seconds: totalSeconds,
    };
    let winResultsArray = [];
    if (localStorage.getItem('winResults')) {
        winResultsArray = JSON.parse(localStorage.getItem('winResults'));
    }
    if (winResultsArray.length === 5) {
        winResultsArray = winResultsArray.slice(1);
    }
    winResultsArray.push(winResult);
    localStorage.setItem('winResults', JSON.stringify(winResultsArray));
    console.log(finishedWindow);
    const mainContainer = document.querySelector('.main_container');
    console.log(mainContainer);
    mainContainer.insertAdjacentHTML('beforeend', finishedWindow);
    const winWindow = document.querySelector('.finish_window');
    if (localStorage.getItem('theme')) {
        winWindow.classList.add('finish_window_light');
    }
    overlay.style.display = 'block';
    const closeFinishWindowButton = document.querySelector('.finish_close');
    closeFinishWindowButton.addEventListener('click', closeFinishWindow);
}

function closeFinishWindow() {
    const finishWindow = document.querySelector('.finish_window');
    finishWindow.remove();
    overlay.style.removeProperty('display');
    restartGame(event, gameLevel, timer);
    setTimerVariables();
}

const solutionButton = document.querySelector('.solution_game');
solutionButton.addEventListener('click', showSolution);

function showSolution() {
    console.log('solution');
    const cellsMainField = document.querySelectorAll('.main_cell');
    for (let i = 0; i < cellsMainField.length; i += 1) {
        cellsMainField[i].innerHTML = '';
        if (cellsMainField[i].classList.contains('main_cell_filled')) {
            cellsMainField[i].classList.remove('main_cell_filled');
        }
        if (Number(cellsMainField[i].getAttribute('id')) === 1) {
            cellsMainField[i].classList.add('main_cell_filled');
        }
        if (Number(cellsMainField[i].getAttribute('id')) === 0) {
            cellsMainField[i].insertAdjacentHTML('beforeend', cross);
        }
    }
    const hintsleftField = document.querySelectorAll('.left_hint');
    console.log(hintsleftField);
    for (let i = 0; i < hintsleftField.length; i += 1) {
        console.log(hintsleftField[i].innerHTML);
        if (hintsleftField[i].innerHTML !== '') {
            hintsleftField[i].insertAdjacentHTML('beforeend', cross);
        }
    }
    const hintstopField = document.querySelectorAll('.top_hint');
    console.log(hintstopField);
    for (let i = 0; i < hintstopField.length; i += 1) {
        console.log(hintstopField[i].innerHTML);
        if (hintstopField[i].innerHTML !== '') {
            hintstopField[i].insertAdjacentHTML('beforeend', cross);
        }
    }
}

const saveButton = document.querySelector('.save_game');
saveButton.addEventListener('click', saveGame);

function saveGame() {
    console.log(gameLevel);
    const timer = document.querySelector('.timer');
    const arrayofmainFieldCells = document.querySelectorAll('.main_cell');
    const arrayOfLeftHints = document.querySelectorAll('.left_hint');
    const arrayOfToptHints = document.querySelectorAll('.top_hint');
    console.log(arrayofmainFieldCells);
    const arrayOfMainCells = [];
    const arrayOfLeftCells = [];
    const arrayOfTopCells = [];
    for (let i = 0; i < arrayofmainFieldCells.length; i += 1) {
        if (arrayofmainFieldCells[i].classList.contains('main_cell_filled')) {
            arrayOfMainCells.push('filled');
        } else if (arrayofmainFieldCells[i].classList.contains('main_cell_crossed')) {
            arrayOfMainCells.push('crossed');
        } else {
            arrayOfMainCells.push('empty');
        }
    }
    for (let i = 0; i < arrayOfLeftHints.length; i += 1) {
        if (arrayOfLeftHints[i].children.length > 0) {
            arrayOfLeftCells.push('crossed');
        } else {
            arrayOfLeftCells.push('empty');
        }
    }
    for (let i = 0; i < arrayOfToptHints.length; i += 1) {
        if (arrayOfToptHints[i].children.length > 0) {
            arrayOfTopCells.push('crossed');
        } else {
            arrayOfTopCells.push('empty');
        }
    }
    const saveGameObject = {
        picture: JSON.stringify(gameLevel),
        minutes: minutes,
        seconds: seconds,
        timer: timer.innerHTML,
        clickCount: clickCount,
        arrayofmainFieldCells: arrayOfMainCells,
        arrayOfLeftHints: arrayOfLeftCells,
        arrayOfTopHints: arrayOfTopCells,
    };
    console.log(saveGameObject);
    localStorage.setItem('savedGame', JSON.stringify(saveGameObject));
}
