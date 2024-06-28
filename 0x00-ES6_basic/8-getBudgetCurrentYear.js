function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {};
  const currentDate = getCurrentYear();

  budget[`income-${currentDate}`] = income;
  budget[`gdp-${currentDate}`] = gdp;
  budget[`capita-${currentDate}`] = capita;

  return budget;
}
