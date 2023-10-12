const unsortedArray = [5, 2, 4, 1, 3, 3, 100]

const swapItems = (inArr, li, ri) => {
  let buff = inArr[ri]
  inArr[ri] = inArr[li]
  inArr[li] = buff
}

const compare = (lv, rv) => {
  return lv > rv
}

const bubbleSort = (inArr, compareFunc) => {
  let lastIndex = 0
  while (lastIndex <= inArr.length - 2) {
    for (let i = inArr.length - 1; lastIndex <= i - 1; i--) {
      let ri = i
      let li = i - 1
      console.log(li, ri)

      if (compareFunc(inArr[li], inArr[ri])) swapItems(inArr, li, ri)

      if (li === lastIndex) lastIndex++
    }

    console.log('-', lastIndex)
  }
}

bubbleSort(unsortedArray, compare)

console.log(unsortedArray)
