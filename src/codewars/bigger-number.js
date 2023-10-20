function nextBigger(n){
  const nums = Array.from(`${n}`)

  const swap = (arr, ai, bi) => {
    arr[ai] = arr[bi] - arr[ai]
    arr[bi] = arr[bi] - arr[ai]
    arr[ai] = arr[ai] + arr[bi]
  }

  for(let i = nums.length-1; i > 0; i--){
    const a = nums[i-1]
    const b = nums[i]
    if (a < b) {
      swap(nums, i-1, i)
      return Number(nums.join(''))
    }
    // console.log(a, b)
  }

  return -1
}

const test = 281518
const res = nextBigger(test)

console.log(test, res)