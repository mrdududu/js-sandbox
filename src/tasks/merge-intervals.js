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
  [1, 20],
  [2, 3],
  [1, 3],
  [1, 3],
  [2, 6],
  [8, 10],
  [9, 14],
  [15, 18]
]

function mergeIntervals(arr) {
  const inArr = [...arr]
  const mergedArr = [inArr.pop()]

  while (inArr.length > 0) {
    const pair = inArr.pop()
    let merged = null
    for (let i = 0; i < mergedArr.length; i++) {
      merged = merge(mergedArr[i], pair)
      console.log(i, mergedArr[i], pair, merged)

      if (merged) {
        mergedArr[i] = merged
        break
      }
    }

    if (merged === null) {
      mergedArr.push(pair)
    }
  }

  return mergedArr
}

function mergeIntervals2(arr) {
  const inArr = [...arr]

  let someMerged = false

  while (!someMerged) {
    someMerged = false
    const item = inArr.shift()
    console.log('shift', item)

    for (let i = 0; i < inArr.length; i++) {
      const mergedItem = merge(inArr[i], item)
      console.log(inArr[i], item, mergedItem)
      if (mergedItem) {
        inArr[i] = mergedItem
        someMerged = true
      }
    }

    if (!someMerged) {
      inArr.push(item)
    }
  }

  return inArr
}

const res = mergeIntervals2(arr)

console.log('Merged', { arr, res })
