function getRandomMinMax(min = 1, max = 100) {
    return Math.floor(Math.random() * (max - min) + min) + 1;
}
const result1 = getRandomMinMax();
console.log(result1);
const result2 = getRandomMinMax(10, 200);
console.log(result2);
