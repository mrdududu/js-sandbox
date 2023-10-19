const test = [0, 20, 1, 3, 2, 4, 9, 7, 6, 21, 0, 9, 10, 25]

function stockMaxProfit(prices) {
  let min
  let maxProfit
  test.forEach((cur, i) => {
    if (i === 0) {
      min = cur
      maxProfit = 0
    } else {
      let profit = cur - min
      if (profit > maxProfit) maxProfit = profit
      if (cur < min) min = cur
    }
  })

  return maxProfit
}

const res = stockMaxProfit(test)
console.log(res)
