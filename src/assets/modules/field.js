export function generateGameField(nonoGramBase, gameLevel) {
    const mainField = document.querySelector('.main_field');
    mainField.innerHTML = '';
    mainField.style.gridTemplateColumns = `repeat(${Number(gameLevel['fieldSize'])}, auto)`;
    // mainField.style.gridTemplateRows = `repeat(${Number(gameLevel['fieldSize'])}), auto)`;
    const nameOfNanoGram = document.querySelector('.name');
    const complicity = document.querySelector('.complicity');
    nameOfNanoGram.textContent = gameLevel['image'].title.toUpperCase();
    if (gameLevel['fieldSize'] === 5) {
        complicity.textContent = 'Level: Easy';
    } else if (gameLevel['fieldSize'] === 10) {
        complicity.textContent = 'Level: Medium';
    } else if (gameLevel['fieldSize'] === 15) {
        complicity.textContent = 'Level: Hard';
    }
    let countOfFilledCells = 0;
    for (let i = 0; i < gameLevel['fieldSize']; i += 1) {
        for (let j = 0; j < gameLevel['fieldSize']; j += 1) {
            const cell = document.createElement('div');
            if ((i + 1) % 5 === 0 && i + 1 !== gameLevel['fieldSize']) {
                cell.classList.add('border_bottom');
            }
            if ((j + 1) % 5 === 0 && j + 1 !== gameLevel['fieldSize']) {
                cell.classList.add('border_right');
            }
            cell.classList.add('main_cell');
            if (gameLevel['image']['gameFieldCode'][i][j] === 1) {
                countOfFilledCells += 1;
            }
            if (localStorage.getItem('theme')) {
                cell.classList.add('main_cell_light');
            }
            cell.dataset.position = `${i},${j}`;
            cell.setAttribute('id', gameLevel['image']['gameFieldCode'][i][j]);
            mainField.append(cell);
            if (i === gameLevel['fieldSize'] - 1 && j === gameLevel['fieldSize'] - 1) {
                gameLevel['countOfFilledCells'] = countOfFilledCells;
                gameLevel['initialCountOfCells'] = countOfFilledCells;
            }
        }
    }
}

export function generateLeftHintsField(gameLevel) {
    const leftField = document.querySelector('.left_field');
    leftField.innerHTML = '';
    // leftField.style.gridTemplateColumns = `repeat(${Number(gameLevel['image']['leftDigitFieldMaxLength'])}, auto)`;
    // leftField.style.gridTemplateRows = `repeat(${Number(gameLevel['fieldSize'])}), auto)`;
    const mainFieldCells = document.querySelector('.main_field').children;

    for (let i = 0; i < gameLevel['fieldSize']; i += 1) {
        const rowSellsEnd = gameLevel['fieldSize'] * (i + 1) - 1;
        const rowSellsStart = rowSellsEnd - gameLevel['fieldSize'] + 1;

        let hintId = 1;
        for (let n = rowSellsEnd; n >= rowSellsStart; n -= 1) {
            if (Number(mainFieldCells[n].getAttribute('id')) === 1) {
                mainFieldCells[n].dataset.hintidrow = `${hintId}`;

                if (mainFieldCells[n - 1] !== undefined) {
                    if (Number(mainFieldCells[n - 1].getAttribute('id')) === 0) {
                        hintId += 1;
                    }
                }
            }
        }

        const hintRowContainer = document.createElement('div');
        const rowArray = gameLevel['image']['gameFieldCode'][i].join('').split('0');
        const rowArrayWith1 = rowArray.filter((item) => item !== '');
        const preResultArray = rowArrayWith1.map((item) => {
            const array = item.split('');
            let count = 0;
            for (let i = 0; i < array.length; i += 1) {
                count += 1;
            }
            return count;
        });
        let hintsArray = preResultArray.filter((item) => item !== 0);
        let hintArrayNumbers = hintsArray.length - 1;
        let hintID = 1;
        for (let j = gameLevel['image']['leftDigitFieldMaxLength'] - 1; j >= 0; j -= 1) {
            const hint = document.createElement('div');
            if (hintArrayNumbers >= 0) {
                hint.innerHTML = hintsArray[hintArrayNumbers];
                hintArrayNumbers -= 1;
            }
            if ((i + 1) % 5 === 0 && i + 1 !== gameLevel['fieldSize']) {
                hint.classList.add('border_bottom');
            }
            hint.classList.add('left_hint');
            if (localStorage.getItem('theme')) {
                hint.classList.add('left_hint_light');
            }
            hint.dataset.hintidleft = `${hintID}`;
            hintID += 1;
            hintRowContainer.append(hint);
        }
        hintRowContainer.classList.add('hint_left_container');
        leftField.append(hintRowContainer);
    }
}

export function generateTopHintsField(gameLevel) {
    const topField = document.querySelector('.top_field');
    topField.innerHTML = '';
    topField.style.gridTemplateColumns = `repeat(${Number(gameLevel['fieldSize'])}, auto)`;
    // leftField.style.gridTemplateRows = `repeat(${Number(gameLevel['fieldSize'])}), auto)`;
    const mainFieldCells = document.querySelector('.main_field').children;

    for (let i = 0; i < gameLevel['fieldSize']; i += 1) {
        const columnSellsStart = i;
        const columnSellsEnd = mainFieldCells.length - (gameLevel['fieldSize'] - i);

        const indexsOfColumnCells = [];
        for (let i = columnSellsStart; i <= columnSellsEnd; i += gameLevel['fieldSize']) {
            indexsOfColumnCells.push(i);
        }

        let hintId = 1;
        for (let n = indexsOfColumnCells.length - 1; n >= 0; n -= 1) {
            if (Number(mainFieldCells[Number(indexsOfColumnCells[n])].getAttribute('id')) === 1) {
                mainFieldCells[Number(indexsOfColumnCells[n])].dataset.hintidcolumn = `${hintId}`;
                if (n !== 0 && Number(mainFieldCells[Number(indexsOfColumnCells[n - 1])].getAttribute('id')) === 0) {
                    hintId += 1;
                }
            }
        }

        const hintColumnContainer = document.createElement('div');

        let array = [];
        for (let j = 0; j <= gameLevel['fieldSize'] - 1; j += 1) {
            array.push(gameLevel['image']['gameFieldCode'][j][i]);
        }
        const columnArray = array.join('').split('0');
        const columnArrayWith1 = columnArray.filter((item) => item !== '');
        const preResultArray = columnArrayWith1.map((item) => {
            const array = item.split('');
            let count = 0;
            for (let i = 0; i < array.length; i += 1) {
                count += 1;
            }
            return count;
        });
        let hintsArray = preResultArray.filter((item) => item !== 0);
        let hintArrayNumbers = hintsArray.length - 1;
        let hintID = 1;
        for (let j = gameLevel['image']['rightDigitFieldMaxLength'] - 1; j >= 0; j -= 1) {
            const hint = document.createElement('div');
            if (hintArrayNumbers >= 0) {
                hint.innerHTML = hintsArray[hintArrayNumbers];
                hintArrayNumbers -= 1;
            }
            if ((i + 1) % 5 === 0 && i + 1 !== gameLevel['fieldSize']) {
                hint.classList.add('border_right');
            }
            hint.classList.add('top_hint');
            if (localStorage.getItem('theme')) {
                hint.classList.add('top_hint_light');
            }
            hint.dataset.hintidtop = `${hintID}`;
            hintID += 1;
            hintColumnContainer.append(hint);
        }
        hintColumnContainer.classList.add('hint_top_container');
        topField.append(hintColumnContainer);
    }
}
