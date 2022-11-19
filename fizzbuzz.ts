const _fizzBuzz = (inputData: number) => {
  const result:string[] = [];
  for (let i = 1; i < inputData; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
      result.push('fizzbuzz')
    } else if (i % 3 == 0) {
      result.push('fizz')
    } else if (i % 5 == 0) {
      result.push('buzz')
    } else {
      result.push(i.toString())
    }
  }
  return result
}