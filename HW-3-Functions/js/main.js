//BIG FIRST LETTER

function bigFirstLetter(string) {
  string = string.toLowerCase();
  return string[0].toUpperCase() + string.substring(1);
}
// function bigFirstLetter2(string) {
//   if (!string) return string;
//   string = string.toLowerCase();
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }
// console.log(bigFirstLetter2("aJHG"));

//PALINDROM

function palindrome(string) {
  let numToStringArray = string.split("");
  let reversedArray = string.split("").reverse();

  for (let i = 0; i < numToStringArray.length; i++) {
    if (numToStringArray[i] !== reversedArray[i]) {
      return "It's not a palindrome";
    } else {
      return "It's a palindrome";
    }
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
  let clearSalary = +salary - +salary * (taxes / 100);
  return clearSalary;
}

//Degree

function getNumberInDegree(number, degree) {
  let result = number;
  for (i = 0; i < degree - 1; i++) {
    result = result * number;
  }
  return result;
}

//Random Number

function getRandomNumber(startNum, endNum) {
  const randomNum =
    Math.floor(Math.random() * (endNum - startNum + 1)) + startNum;
  return +randomNum;
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
console.log(getNumberInDegree(3, 3));
console.log(getRandomNumber(1, 10));
console.log(getRandomPassword(0));
