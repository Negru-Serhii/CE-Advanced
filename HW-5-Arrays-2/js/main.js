// 1.
const getRandomArray = (length, min, max) =>
  Array.from(
    { length: length },
    (el) => Math.floor(Math.random() * (max - min)) + min
  );
console.log(getRandomArray(15, 1, 100));

// // 2.
// const getModa = (...numbers) => numbers.find((number) => number > 1);
// console.log(getModa([1, 2, 3, 4, 3, 5, 6, 7, 8]));

// 3.
const getAverage = (...numbers) => {
  const total = numbers.reduce((total, number) => {
    return total + number;
  }, 0);
  return total / numbers.length;
};
console.log(getAverage(1, 23, 34, 45, 2, 4, 7, 89, 10, 5));

// 5.
const filterEvensArray = (numbers) => numbers.filter((el) => el % 2 === 0);
console.log(filterEvensArray([1, 3, 2, 5, 6, 7, 8, 12, 45, 67, 89, 80]));

// 6.
const countPositiveNumbers = (...numbers) => {
  let posNumbers = numbers.filter((number) => {
    return number >= 0;
  });
  return posNumbers.length;
};
console.log(
  countPositiveNumbers(1, 2, -3, 4, -5, 6, -7, 8, -9, 12, -34, 57, -89, 90)
);

// 7.
const getDividedByFive = (...numbers) => {
  const dividedByFive = [];
  numbers.map((number) => {
    if (number % 5 === 0) dividedByFive.push(number);
  });
  return dividedByFive;
};
console.log(getDividedByFive(77, 45, 26, 50, 40, 15, 39, 90));
// 8.
const replaceBadWords = (string, badWord) => {
  const sentArray = string.split(" ");
  const result = sentArray.map((word) => {
    if (word.includes(badWord)) {
      word = word.replace(badWord, "****");
    }
    return word;
  });
  return result.join(" ");
};

console.log(replaceBadWords("Are you fucking kidding me?", "fuck"));
