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
  static romanArr = [
    { l: 'M', h: 'V', n: 1000 },
    { l: 'C', h: 'D', n: 100 },
    { l: 'X', h: 'L', n: 10 },
    { l: 'I', h: 'V', n: 1 }
  ]

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
    const repeatChar = (char, count) => {
      let str = ''
      for (; count > 0; count--) {
        str += char
      }

      return str
    }

    let res = ''
    for (let i = 0; i < this.romanArr.length; i++) {
      const int = Math.floor(num / this.romanArr[i].n)
      console.log(i, this.romanArr[i].n, int)
      if (0 < int) {
        if (int === 9) {
          res += this.romanArr[i].l + this.romanArr[i - 1].l
        } else if (int === 4) {
          res += this.romanArr[i].l + this.romanArr[i].h
        } else if (int > 4) {
          res += this.romanArr[i].h + repeatChar(this.romanArr[i].l, int - 5)
        } else {
          res += repeatChar(this.romanArr[i].l, int)
        }
        num = num % this.romanArr[i].n //num - int * this.romanArr[i].n
      }
    }
    return res
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

// const res = RomanNumerals.fromRoman('XXVII')
const num = 124
const res = RomanNumerals.toRoman(num)
console.log('res', num, res)
