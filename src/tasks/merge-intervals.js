function merge(int1, int2) {
  // [1, 3] - [2, 4] if ( 1 <= 2 && 3 >= 2) [1, 4]
  // [1, 6] - [2, 4]
  let intNew = null
  let intLeft = int1
  let intRight = int2

  if (int1[0] > int2[0]) {
    intLeft = int2
    intRight = int1
  }

  if (intLeft[0] <= intRight[0] && intLeft[1] >= intRight[0]) {
    let newLeft = intLeft[0]
    let newRight = intLeft[1] > intRight[1] ? intLeft[1] : intRight[1]
    intNew = [newLeft, newRight]
  }

  return intNew
}

// let merged = merge([1, 3], [2, 4])
// let merged = merge([2, 4], [1, 3])
// let merged = merge([2, 5], [1, 10])
// let merged = merge([1, 4], [5, 10])

// console.log(merged)

// out [[1, 6], [8, 10], [15, 18]]

const arr = [
  [1, 2],
  [2, 3],
  [4, 5],
  [1, 3],
  [2, 6],
  [8, 10],
  [9, 14],
  [15, 18]
]

function mergeIntervals(arr) {
  const inArr = [...arr].sort((a, b) => a[0] - b[0])
  const resArr = [inArr.shift()]

  while (0 < inArr.length) {
    const item = inArr.shift()
    const lastIndex = resArr.length - 1
    // console.log(inArr, resArr)
    const merged = merge(resArr[lastIndex], item)

    if (merged) {
      resArr[lastIndex] = merged
    } else {
      resArr.push(item)
    }
  }

  return resArr
}

const res = mergeIntervals(arr)

console.log('Merged', { arr, res })
