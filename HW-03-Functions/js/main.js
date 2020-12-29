//BIG FIRST LETTER

function bigFirstLetter(string) {
  return string[0].toUpperCase() + string.substring(1).toLowerCase();
}
//PALINDROM

function palindrome(string) {
  const numToStringArray = string.split("");
  const reversedArray = string.split("").reverse();

  for (let i = 0; i < numToStringArray.length; i++) {
    return numToStringArray[i] !== reversedArray[i]
      ? "It's not a palindrome"
      : "It's a palindrome";
  }
}

// the BIGGEST number

function getMaxDigit(number) {
  let enterNum = number;
  let maxNum = 0;
  while (enterNum > 0) {
    if (enterNum % 10 > maxNum) {
      maxNum = enterNum % 10;
    }
    enterNum = (enterNum - (enterNum % 10)) / 10;
  }
  return maxNum;
}

// Salary

function getClearSalary(salary) {
  const taxes = 19.5;
  return +salary - +salary * (taxes / 100);
}

//Degree

function getNumberInDegree(number, degree) {
  let result = number;
  for (i = 0; i < degree - 1; i++) {
    result *= number;
  }
  if (degree < 0) {
    result = 1;
    for (i = 0; i < Math.abs(degree); i++) result /= number;
    return result;
  } else if (degree === 0) {
    result = 1;
  }
  return result;
}

//Random Number

function getRandomNumber(startNum, endNum) {
  return Math.floor(Math.random() * (endNum - startNum + 1)) + startNum;
}

// Random password

function getRandomPassword(startNum) {
  startNum = +startNum;
  let result = "";
  if (startNum === 0) startNum = 8;
  for (i = 0; i < startNum; i++) {
    result += Math.floor(Math.random() * 10);
  }
  return result;
}

//Console

console.log(bigFirstLetter("lOL"));
console.log(palindrome("kayak"));
console.log(getMaxDigit(123456789));
console.log(getClearSalary(1000));
console.log(getNumberInDegree(2, -2));
console.log(getRandomNumber(1, 10));
console.log(getRandomPassword(0));
