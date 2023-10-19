const testString = '[([{}])(){[[]]}]'
const testString3 = '[([{}])(){[[]]}'
const testString2 = '[{([]{}())[([]])}]'

function validateBrackets(inStr) {
  let p = 0
  const steak = []
  while (p < inStr.length) {
    let char = inStr[p]

    if (char === '[' || char === '(' || char === '{') {
      steak.push(char)
    } else {
      const last = steak[steak.length - 1]
      if ((char === ']' && last === '[') || (char === ')' && last === '(') || (char === '}' && last === '{')) {
        steak.pop()
      } else {
        return false
      }
    }

    console.log({ steak: [...steak], char })
    p++
  }
  return steak.length === 0
}

const res = validateBrackets(testString3)

console.log(res)
