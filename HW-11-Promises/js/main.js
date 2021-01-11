async function getRandomChinese(length) {
  const start = Date.now();
  const DELAY = 50;
  let result = "";

  const sing = () =>
    new Promise((resolve) =>
      setTimeout(() => {
        return resolve(String.fromCharCode(Date.now().toString().slice(-5)));
      }, DELAY)
    );

  while (length > 0) {
    result += await sing();
    length--;
  }

  console.log(`Time spent: ${Date.now() - start} milliseconds`);

  return result;
}

getRandomChinese(6).then((result) => console.log(result));
