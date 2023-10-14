// const input1 = [1, 8, 6, 2, 5, 4, 8, 3, 7]
// const input1 = [1, 1]
const input1 = [4, 3, 2, 1, 4]

function maxArea(arrHeight) {
  let sIndex = 0
  let max = 0
  while (sIndex < arrHeight.length - 1) {
    for (let i = sIndex + 1; i < arrHeight.length; i++) {
      const lh = arrHeight[sIndex]
      const rh = arrHeight[i]
      const mh = lh < rh ? lh : rh
      const area = (i - sIndex) * mh

      if (area > max) {
        max = area
      }
    }

    sIndex++
  }

  return max
}

function maxArea2(arrHeight) {
  let left = 0
  let right = arrHeight.length - 1
  let max = 0

  while (left < right) {
    const minHeight = Math.min(arrHeight[left], arrHeight[right])
    const width = right - left
    const vol = minHeight * width

    max = Math.max(max, vol)

    if (arrHeight[left] < arrHeight[right]) {
      left++
    } else {
      right--
    }
  }

  return max
}

console.log(maxArea2(input1))
