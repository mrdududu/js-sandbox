function compoundInterest(startAmount, yearlyPercent, monthlyExtra, monthPeriod){
  let amount = startAmount
  console.log("start", amount)
  for(let i = 1; i < monthPeriod; i++) {
    const percentIncome = amount * yearlyPercent / 100 / 12
    console.log({i, amount, percentIncome})
    amount = amount + percentIncome + monthlyExtra
  }

  console.log("end", amount)
}

compoundInterest(300000, 12, 300000, 12)