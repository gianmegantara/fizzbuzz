const fizzBuzz = (inputData) => {
  const result = [];
  for (let i = 1; i <= inputData; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
      result.push('fizzbuzz')
    } else if (i % 3 == 0) {
      result.push('fizz')
    } else if (i % 5 == 0) {
      result.push('buzz')
    } else {
      result.push(i)
    }
  }
  return result
}

const isPalindrome = (word) => {
  const chars = word.split('')
  if (chars.length % 2 == 1) {
    for (let i = 0; i < Math.floor(chars.length/2); i++) {
      if (chars[i] !== chars[chars.length-1 - i]) {
        return false;
      }
    }
  } else {
    for (let i = 0; i < chars.length/2; i++) {
      if (chars[i] !== chars[chars.length-1 - i]) {
        return false;
      }
    }
  }
  return true;
}
test percobaan
