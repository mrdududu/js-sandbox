const arr = Array.from(Array(100000), (_,x) => x);
// const arr = [0, 1]

const binarySearch = (inArr, searchNum) => {
  let li = 0 // left index
  let ri = inArr.length - 1 // right index

  while (li <= ri) {
    let mi = Math.floor(li + (ri - li) / 2) // middle index
    let miValue = inArr[mi] // middle index value

    console.log(li, mi, ri)
    if (miValue === searchNum) {
      return mi
    } else if (miValue < searchNum) {
      li = mi + 1
    } else {
      ri = mi - 1
    }
  }

  // console.log(mi)

  return -1
}

const res = binarySearch(arr, 67)

console.log(res)
