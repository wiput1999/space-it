function isThaiVowels(char: string): boolean {
  const vowels = [
    '่',
    '้',
    '๊',
    '๋',
    'ิ',
    'ี',
    'ึ',
    'ื',
    '็',
    'ั',
    'ุ',
    'ู',
    '์'
  ]

  if (vowels.includes(char)) {
    return true
  }
  return false
}

function space(sentence: string): string {
  let result = ''

  sentence.split('').forEach(char => {
    if (char === ' ') {
      return
    }

    if (isThaiVowels(char)) {
      if (result[result.length - 1] === ' ') {
        result = result.slice(0, -1)
      }

      result += char + ' '
      return
    }

    if (char === 'ำ') {
      if (result[result.length - 1] === ' ') {
        result = result.slice(0, -1)
      }

      result += 'ํ า '
      return
    }

    result += char + ' '
  })

  if (result[result.length - 1] === ' ') {
    result = result.slice(0, -1)
  }

  return result
}

export default space
