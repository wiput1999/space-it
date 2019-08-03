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

function removeTrailingSpace(text: string): string {
  if (text[text.length - 1] === ' ') {
    return text.slice(0, -1)
  }

  return text
}

function space(sentence: string): string {
  let result = ''

  sentence.split('').forEach(char => {
    if (char === ' ') {
      return
    }

    if (isThaiVowels(char)) {
      result = removeTrailingSpace(result)

      result += char + ' '
      return
    }

    if (char === 'ำ') {
      result = removeTrailingSpace(result)

      result += 'ํ า '
      return
    }

    result += char + ' '
  })

  result = removeTrailingSpace(result)

  return result
}

export default space
