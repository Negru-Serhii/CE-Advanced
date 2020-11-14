let minNum, maxNum, skipEven;
let sumNum = 0;

while (isNaN(minNum)) {
  minNum = parseInt(prompt("Виберіть число від якого будемо складати суму?"));
}

while (isNaN(maxNum) || maxNum <= minNum) {
  maxNum = parseInt(prompt("Виберіть число до якого будемо складати суму?"));
}

skipEven = confirm("Чи потрібно пропускати парні числа?");

for (let i = minNum; i <= maxNum; i++) {
  if (skipEven && i % 2 === 0) {
    continue;
  }
  sumNum += i;
}

alert("Результат: " + sumNum);
