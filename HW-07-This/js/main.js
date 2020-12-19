const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// 1.
function getMyTaxes(salary) {
  return +(this.tax * salary);
}
console.log(`Pay taxes in Ukraine: ${getMyTaxes.call(ukraine, 1800)} usd`);

// 2.
function getMiddleTaxes() {
  return +(this.tax * this.middleSalary).toFixed(2);
}
console.log(`Pay middle taxes in Latvia: ${getMiddleTaxes.call(latvia)} usd`);

// 3.
function getTotalTaxes() {
  return +(this.tax * this.middleSalary * this.vacancies);
}
console.log(`Pay all taxes in Litva: ${getTotalTaxes.call(litva)} usd`);

// 4.
function getMySalary() {
  const minNumber = 1500;
  const maxNumber = 2000;
  const salary =
    Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
  const profit = parseInt(salary - salary * this.tax);
  return { salary, taxes: this.tax, profit };
}
setInterval(() => console.log(getMySalary.call(latvia)), 10000);
