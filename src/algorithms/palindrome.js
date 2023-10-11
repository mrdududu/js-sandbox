const isPalindrome = word => {
  for (let i = Math.floor(word.length / 2) - 1; i >= 0; i--) {
    const a = word[i]
    const b = word[word.length - i - 1]
    if (a !== b) return false
  }

  return true
}

const testWord = 'acvvca'

const test = isPalindrome(testWord)

console.log(test)

// 6/2 = 3
