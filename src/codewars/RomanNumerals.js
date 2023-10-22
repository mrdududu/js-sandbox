// https://www.codewars.com/kata/51b66044bce5799a7f000003/train/javascript

/**
to roman:
2000 -> "MM"
1666 -> "MDCLXVI"
1000 -> "M"
 400 -> "CD"
  90 -> "XC"
  40 -> "XL"
   1 -> "I"

from roman:
"MM"      -> 2000
"MDCLXVI" -> 1666
"M"       -> 1000
"CD"      -> 400
"XC"      -> 90
"XL"      -> 40
"I"       -> 1
 */

class RomanNumerals {
  static roman = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1
  }

  static toRoman(num) {
    return 'IV'
  }

  static fromRoman(str) {
    let sum = 0

    for (let i = str.length - 1; i >= 0; i--) {
      const nextRoman = str[i - 1]
      const curRoman = str[i]

      let nextVal = this.roman[nextRoman]
      let curVal = this.roman[curRoman]
      sum += curVal

      if (nextVal < curVal) {
        sum -= nextVal
        i--
      }

      console.log(str[i], curVal, nextVal)
    }

    return sum
  }
}

const res = RomanNumerals.fromRoman('XXVII')
console.log('res', res)
