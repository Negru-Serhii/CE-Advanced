const priceBread = 15.678;
const priceRedFish = 123.965;
const priceButter = 90.2345;

const maxPrice = Math.max(priceBread, priceRedFish, priceButter);
const minPrice = Math.min(priceBread, priceRedFish, priceButter);
console.log(maxPrice);
console.log(minPrice);

const totalSum = priceBread + priceButter + priceRedFish;
console.log(totalSum);

const truncTotalSum =
  Math.trunc(priceBread) + Math.trunc(priceRedFish) + Math.trunc(priceButter);
console.log(truncTotalSum);

const roundTruncTotalSum = Math.round(truncTotalSum / 100) * 100;
console.log(roundTruncTotalSum);

const evenTotalSum = Math.trunc(totalSum) % 2 === 0;
console.log(evenTotalSum);

const userCash = 500;
const restOfUserCash = Number((userCash - totalSum).toFixed(2));
console.log(restOfUserCash);

const averagePrice = Number((totalSum / 3).toFixed(2));
console.log(averagePrice);

const randomSale = Math.floor(Math.random() * 100) + 1;
console.log(randomSale);

const userPayWithSale = Number(
  (totalSum - (totalSum / 100) * randomSale).toFixed(2)
);
console.log(userPayWithSale);

const halfOfTotalSum = totalSum / 2;
const profit = Number(
  (halfOfTotalSum - (totalSum / 100) * randomSale).toFixed(2)
);
console.log(profit);

const advanced = `  Максимальне число : ${maxPrice} 
  Мінімальне число : ${minPrice} 
  Сума вартості товарів : ${totalSum} 
  Округлена в меншу сторону вартість товарів : ${truncTotalSum} 
  Сума округлена до сотень : ${roundTruncTotalSum} 
  Чи парною є сума? : ${evenTotalSum} 
  Сума решти з ${userCash} грн : ${restOfUserCash} 
  Середнє значення цін з копійками : ${averagePrice} 
  Сума із випадковою знижкою з копійками : ${userPayWithSale} 
  Чистий прибуток : ${profit}`;
console.log(advanced);
