/**
 * https://www.codewars.com/kata/541af676b589989aed0009e7/train/javascript
 * 1+1+1+1, 1+1+2, 2+2
 *
 * 50 = 1*50 = 5*10 =
 * https://www.youtube.com/watch?v=N80hVqXf8Ik
 *
 * https://app.leporello.tech/?share_id=264e96a50f7ad8d762228e6ebd99e7ec010e25aa
 */

function countChange(money, coins) {
  let changeCount = 0
  coins.sort((a, b) => b - a)
  console.log('countChange', money, coins)
  let start = 0

  for (let i = 0; i < coins.length; i++) {
    for (let j = start; j < coins.length; j++) {}
  }

  coins.forEach((coin, i) => {
    if (coin > money) return
    const n = money % coin

    if (0 === n) {
      changeCount++
    }

    // const n = Math.floor(money / coin)
    // console.log({ money, coin, n })
  })
}

countChange(4, [1, 2]) // => 3
countChange(10, [5, 2, 3]) // => 4
countChange(11, [5, 7]) //  => 0

function countWaysToMakeChange(amount, denominations) {
  // Create an array to store the number of ways to make change for each amount from 0 to 'amount'.
  const ways = new Array(amount + 1).fill(0)
  ways[0] = 1 // There's one way to make change for 0.

  for (const coin of denominations) {
    for (let i = coin; i <= amount; i++) {
      ways[i] += ways[i - coin]
    }
  }

  return ways[amount]
}

// Example usage:
const coinDenominations = [1, 2]
const amount = 4
const numberOfWays = countWaysToMakeChange(amount, coinDenominations)
console.log(`Number of ways to make change for ${amount}: ${numberOfWays}`)
