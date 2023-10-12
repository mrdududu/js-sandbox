const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// const arr = [0, 1]

const binarySearch = (inArr, searchNum) => {
  let li = 0
  let ri = inArr.length - 1
  // let count = ri - li + 1

  while (ri !== li) {
    let mi = Math.floor(li + (ri - li) / 2)
    console.log(li, mi, ri)
    if (inArr[mi] <= searchNum) {
      if (inArr[mi] === searchNum) return mi
      li = mi
    } else {
      ri = mi - 1
    }
  }

  // console.log(mi)

  return -1
}

const res = binarySearch(arr, 9)

console.log(res)
