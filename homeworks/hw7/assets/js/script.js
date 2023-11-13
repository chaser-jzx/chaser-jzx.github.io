function averageThreeNumbers(a,b,c) {
    let sum = a + b + c;
    let average = sum / 3;
    return average;
}

function createSentence(num, noun) {
    let phrase = 'On average, a Berkeley Student has ' + num + ' ' + noun + 's';
    return phrase;
}

function getRandomNum(max) {
    return Math.floor(Math.random() * max);
}

let x = getRandomNum(100);
let y = getRandomNum(100);
let z = getRandomNum(100);

let avg = averageThreeNumbers(x, y, z);

let sentence = createSentence(avg, 'squirrel');

console.log(sentence);