// Desafio 11
function generatePhoneNumber(array) {
  // seu código aqui
  let phone = '('
  let count = 0
  let countArray = []
  phone += array[0]
  phone += array[1]
  phone += ') '
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.'
  }
  for (let i = 0; i<array.length; i+=1) {
    if (array[i] < 0 || array[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores'
    }
  }
  for (let i = 0; i<array.length; i+=1) {
    for (let j = 0; j<array.length; j+=1) {
      if (array[i] === array[j]) {
        count+=1
      }
    }
    if (count >= 3) {
      return 'não é possível gerar um número de telefone com esses valores'
    }
    count = 0
  }
  for (let i = 2; i<array.length; i+=1) {
    phone += array[i]
    if (i === 6) {
      phone += '-'
    }
  }
  return phone
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if (!(lineA < lineB+lineC && lineB < lineA+lineC && lineC < lineA+lineB)) {
    return false
  }
  else if (!(lineA > Math.abs(lineB-lineC) && lineB > Math.abs(lineA-lineC) && lineC > Math.abs(lineA-lineB))) {
    return false
  }
  else {
    return true
  }
}

// Desafio 13
function hydrate(string) {
  // seu código aqui
  let reg = /\d+/g
  let result = string.match(reg)
  let total = 0
  let totalString = ''
  let msg = ''
  for (let i = 0; i<result.length; i+=1) {
    total += parseInt(result[i])
  }
  totalString += total.toString()
  if (total === 1) {
    msg = totalString + ' copo de água'
  } else {
    msg = totalString + ' copos de água'
  }
  
  return msg
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
