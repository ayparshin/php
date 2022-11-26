let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));

// verification for NaN
if (String(minValue) === 'NaN' || String(maxValue) === 'NaN'){
    if (String(minValue) === 'NaN' && String(maxValue) === 'NaN'){
        minValue = 0;
        maxValue = 100;
        console.log('оба NaN')
    } else if (String(minValue) === 'NaN'){
        minValue = 0;
        console.log('minValue')
    } else if (String(maxValue) === 'NaN'){
        maxValue = 100;
        console.log('maxValue')
}
} 

(minValue < -999) ? minValue = -999 : console.log('min else');
(maxValue > 999) ? maxValue = 999 : console.log('max else');


alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
    maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
    
    if (String(minValue) === 'NaN' || String(maxValue) === 'NaN'){
        if (String(minValue) === 'NaN' && String(maxValue) === 'NaN'){
            minValue = 0;
            maxValue = 100;
            console.log('оба NaN')
        } else if (String(minValue) === 'NaN'){
            minValue = 0;
            console.log('minValue')
        } else if (String(maxValue) === 'NaN'){
            maxValue = 100;
            console.log('maxValue')
    }
    } 
    (minValue < -999) ? minValue = -999 : console.log('min else');
    (maxValue > 999) ? maxValue = 999 : console.log('max else');
    
    orderNumber = 1;
    orderNumberField.innerText = orderNumber;
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    answerField.innerText = `Вы загадали число ${answerNumber }?`;
    gameRun = true;
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber + 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            const phraseRandom = Math.round(Math.random() * 3);
            orderNumberField.innerText = orderNumber;
            switch (phraseRandom) {
                case 1:
                    answerField.innerText = `${answerNumber }? Если бы я загадывал число, то это точно было бы число ${answerNumber }`;
                    break;
                case 2:
                    answerField.innerText = `Я сразу понял, что это число ${answerNumber }. Я угадал?`;
                    break;
                default:
                    answerField.innerText = `Уверен, что это не число ${answerNumber }?`;
                    break;
        }
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue >= maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber = Math.round((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round(Math.random() * 3);
            switch (phraseRandom) {
                case 1:
                    answerField.innerText = `${answerNumber }? Если бы я загадывал число, то это точно было бы число ${answerNumber }`;
                    break;
                case 2:
                    answerField.innerText = `Я сразу понял, что это число ${answerNumber }. Я угадал?`;
                    break;
                default:
                    answerField.innerText = `Уверен, что это не число ${answerNumber }?`;
                    break;
            }
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const phraseRandom = Math.round(Math.random() * 3);
        switch (phraseRandom) {
            case 1:
                answerField.innerText = `Это было легко\n\u{1F913}`
                gameRun = false;
                break;
            case 2:
                answerField.innerText = `Даже не напрягался\n\u{1F60E}`
                gameRun = false;
                break;
            default:
                answerField.innerText = `А можешь посложнее загадать?\n\u{1F914}`
                gameRun = false;
                break;
        }
    }
})