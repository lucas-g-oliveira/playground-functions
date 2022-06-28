// Desafio 1
function compareTrue(paramero1, parametro2) {
  // seu código aqui

  if (paramero1 === true && parametro2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, altura) {
  // seu código aqui
  return (base * altura) / 2; n
}


// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  frase = (typeof frase != 'undefined') ? frase : false;
  let wordTemp = '';
  let arrayTemp = [];
  for (index in frase) {

    if (frase[index] != ' ') {
      wordTemp += frase[index];
    } else {
      arrayTemp.push(wordTemp);
      wordTemp = '';
    }
  }
  arrayTemp.push(wordTemp);
  wordTemp = '';

  return arrayTemp;
}

// Desafio 4
function concatName(array = []) {
  // seu código aqui
  array = (typeof array !== 'indefined') ? array : [];

  let temp = array.length - 1;
  return array[temp] + ', ' + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3) + ties;
}



// Desafio 6
function highestCount(array = []) {
  // seu código aqui
  let contNumber = 0;
  let numbTemp = array[0];

  for (let index in array) {
    if (array[index] > numbTemp) {
      numbTemp = array[index];
      console.log(array[index])
      contNumber = 1;
    } else if (array[index] === numbTemp) {
      contNumber += 1;
    }
  }

  return contNumber;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanceCat1 = (mouse > cat1 === true) ? mouse - cat1 : cat1 - mouse;
  let distanceCat2 = (mouse > cat2 === true) ? mouse - cat2 : cat2 - mouse;

  if (distanceCat1 === distanceCat2) {
    return 'os gatos trombam e o rato foge'
  } else if (distanceCat1 < distanceCat2) {
    return 'cat1';
  } else {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(array = []) {
  // seu código aqui
  let newArray = [];

  for (data of array) {
    if (data % 5 == 0 && data % 3 == 0) {
      newArray.push('fizzBuzz')
    } else if (data % 3 == 0) {
      newArray.push('fizz')
    } else if (data % 5 == 0) {
      newArray.push('buzz');
    } else {
      newArray.push('bug!')
    }
  }
  return newArray;
}

// Desafio 9

function encode(frase) {
  // seu código aqui
  let encripted = '';
  let objectKeyEncode = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  }

  for (dataFrase of frase) {
    encripted += (objectKeyEncode[dataFrase] == undefined) ? dataFrase : objectKeyEncode[dataFrase];
  }

  return encripted;
}

function decode(frase) {
  let dencripted = '';

  let objectKeyEncode = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  }
  let objectKeyDecript = {}

  let tempNum = 0;
  for (key in objectKeyEncode) {
    let tempKey = '';

    tempNum += 1;
    tempKey += tempNum;
    objectKeyDecript[tempKey] = key;
    tempKey = '';
  }

  for (dataFrase of frase) {
    dencripted += (objectKeyDecript[dataFrase] == undefined)? dataFrase : objectKeyDecript[dataFrase];
  }

  return dencripted;
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
