// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if (value1 && value2) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base*height)/2
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let palavra = ''
  let array = []
  let j = 0
  for (let i = 0; i < string.length; i+=1) {
    if (string[i] !== ' ') {
      palavra += string[i]
    }
    if (string[i] === ' ' || i === string.length-1) {
      array[j] = palavra
      palavra = ''
      j+=1
    }
  }
  return array
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let string = ''
  string += array[array.length-1]
  string += ', '
  string += array[0]
  return string
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins*3 + ties)
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let highestNumber = array[0]
  let count = 0
  for (let i = 0; i < array.length; i+=1) {
    if (array[i] > highestNumber) {
      highestNumber = array[i]
    }
  }
  for (let i = 0; i < array.length; i+=1) {
    if (array[i] === highestNumber) {
      count+=1
    }
  }
  return count
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2'
  }
  else if (Math.abs(cat2 - mouse) > Math.abs(cat1 - mouse)) {
    return 'cat1'
  }
  else {
    return 'os gatos trombam e o rato foge'
  }
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let palavra = ''
  let result = []
  let j = 0
  for (let i = 0; i<array.length; i+=1) {
    if (array[i]%3 === 0 && array[i]%5 === 0) {
      palavra += 'fizzBuzz'
      result[j] = palavra
      j++
      palavra = ''
    }
    if (array[i]%3 === 0 && array[i]%5 !== 0) {
      palavra += 'fizz'
      result[j] = palavra
      j++
      palavra = ''
    }
    if (array[i]%3 !== 0 && array[i]%5 === 0) {
      palavra += 'buzz'
      result[j] = palavra
      j++
      palavra = ''
    }
    if (array[i]%3 !== 0 && array[i]%5 !== 0) {
      palavra += 'bug!'
      result[j] = palavra
      j++
      palavra = ''
      }
    }
    return result
}


// Desafio 9
function encode(string) {
  // seu código aqui
  let array = []
  for (let i = 0; i <= 5; i+=1) {
    if (i === 1) {
      array[1] = string.replace(/a/g, '1')
    }
    if (i === 2) {
      array[2] = array[1].replace(/e/g, '2')
    }
    if (i === 3) {
      array[3] = array[2].replace(/i/g, '3')
    }
    if (i === 4) {
      array[4] = array[3].replace(/o/g, '4')
    }
    if (i === 5) {
      array[5] = array[4].replace(/u/g, '5')
    }
  }
  return array[5]
}

function decode(string) {
  // seu código aqui
  let array = []
  for (let i = 0; i <= 5; i+=1) {
    if (i === 1) {
      array[1] = string.replace(/1/g, 'a')
    }
    if (i === 2) {
      array[2] = array[1].replace(/2/g, 'e')
    }
    if (i === 3) {
      array[3] = array[2].replace(/3/g, 'i')
    }
    if (i === 4) {
      array[4] = array[3].replace(/4/g, 'o')
    }
    if (i === 5) {
      array[5] = array[4].replace(/5/g, 'u')
    }
  }
  return array[5]
}

// Desafio 10
function techList(array, string) {
  // seu código aqui
  let result = []
  if (array.length === 0) {
    return 'Vazio!'
  }
  array.sort()
  for (let i = 0; i<array.length; i+=1) {
    let obj = {}
    obj['tech'] = array[i]
    obj['name'] = string
    result.push(obj)
  }
  return result
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
