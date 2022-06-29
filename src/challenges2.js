// Desafio 11
function generatePhoneNumber(arrayNumbers = []) {
  // seu código aqui
  let numberSetted = '';

  let charsSpecials = { '0': '(', '2': ') ', '7': '-' };

  // array.lenght === 11;
  if (arrayNumbers.length != 11) {
    return 'Array com tamanho incorreto.';
  }

  //value > 0 e < que 9 e repeticao do numero < 3
  for (value of arrayNumbers) {
    let contTemp = 0;
    for (number of arrayNumbers) {
      contTemp += (value === number) ? 1 : 0;
    }

    if (value < 0 || value > 9 || contTemp >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  // insert SpecialsCharacter
  for (index in arrayNumbers) {
    numberSetted += (charsSpecials[index] != undefined) ? (charsSpecials[index] + arrayNumbers[index]) : arrayNumbers[index];
  }

  return numberSetted;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  return (
    (lineA < (lineB + lineC)) &&
    (lineB < (lineA + lineC)) &&
    (lineC < (lineC + lineB))
  )
}

// Desafio 13
function hydrate(frase) {
  // seu código aqui
  let glassesOfWater = 0;

  for (glasse of frase) {
    for (let index = 0; index <= 9; index += 1) {
      if (glasse == index) {
        glassesOfWater += index;
        break;
      }
    }
  }
  return (glassesOfWater === 1) ? glassesOfWater + ' copo de água' : glassesOfWater + ' copos de água';
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
