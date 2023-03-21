export const generateRandomArray = (min, max, length) => {
  let arr = [];
  while (arr.length < length) {
    let random = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!arr.includes(random)) {
      arr.push(random);
    }
  }
  return arr;
}

export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
