function calculateTotalSalesWithTax(products, taxRate) {
  const totalSales = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const taxAmount = (totalSales * taxRate) / 100;

  const totalSalesWithTax = totalSales + taxAmount;

  return parseFloat(totalSalesWithTax.toFixed(2));
}

module.exports = calculateTotalSalesWithTax;
