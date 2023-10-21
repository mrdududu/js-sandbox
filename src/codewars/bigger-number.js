// https://habr.com/ru/articles/428552/

const swap = (arr, ai, bi) => {
  arr[ai] = arr[bi] - arr[ai]
  arr[bi] = arr[bi] - arr[ai]
  arr[ai] = arr[ai] + arr[bi]
}

const arrSortPart = (arr, sortAfterIndex, sortFn) => {
  const sortedArr = arr.slice(sortAfterIndex)
  sortedArr.sort(sortFn)
  sortedArr.forEach((val, i) => {
    arr[sortAfterIndex + i] = val
  })
}

function nextBigger(n) {
  const nums = Array.from(`${n}`).map(i => Number(i))

  let i = nums.length - 1

  while (i >= 0) {
    const li = i - 1
    const left = nums[li]
    const right = nums[i]

    if (left < right) {
      for (let j = nums.length - 1; j >= i; j--) {
        const jnum = nums[j]
        if (left < jnum) {
          swap(nums, li, j)
          arrSortPart(nums, i, (a, b) => a - b)
          return Number(nums.join(''))
        }
      }
    }

    i--
  }

  return -1
}

const test = 4365
// const test = 5346
// const test = 144
const res = nextBigger(test)

console.log('res', test, res)
