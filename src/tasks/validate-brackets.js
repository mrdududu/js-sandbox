const testString = '[([{}])(){[[]]}]'
const testString3 = '[([{}])(){[[]]}'
const testString2 = '[{([]{}())[([]])}]'

function validateBrackets(inStr) {
  const brackets = {
    '{': '}',
    '[': ']',
    '(': ')'
  }

  let p = 0
  const steak = []
  while (p < inStr.length) {
    let char = inStr[p]

    if (Object.keys(brackets).some(i => i === char)){
      steak.push(char)
    }else {
      const last = steak[steak.length - 1]
      if (brackets[last] === char) {
        steak.pop()
      }
      else {
        return false
      }
    }

    // if (char === '[' || char === '(' || char === '{') {
    //   steak.push(char)
    // } else {
    //   const last = steak[steak.length - 1]
    //   if ((char === ']' && last === '[') || (char === ')' && last === '(') || (char === '}' && last === '{')) {
    //     steak.pop()
    //   } else {
    //     return false
    //   }
    // }

    console.log({ steak: [...steak], char })
    p++
  }
  return steak.length === 0
}

const res = validateBrackets(testString)

console.log(res)
