// https://www.codewars.com/kata/526989a41034285187000de4/train/javascript

function ipsBetween(start, end){
  //TODO
  const getIpNumbers = (num) => num.split('.').map(i => Number(i))
  const aStart = getIpNumbers(start)
  const aEnd = getIpNumbers(end)
  const aDif = aEnd.map((n, i) => (n -aStart[i]))
  console.log(aDif)
}

ipsBetween("10.0.0.0", "10.0.0.50")