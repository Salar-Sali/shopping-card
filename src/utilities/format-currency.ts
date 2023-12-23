const formatCurrencyInstance = new Intl.NumberFormat(undefined, {
  currency:"USD",
  style:"currency"
})

export  const formatCurrency = (price: number)=>{
  return formatCurrencyInstance.format(price)
}