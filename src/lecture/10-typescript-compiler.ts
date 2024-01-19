function getRandomMinMax(min: number = 1, max: number = 100): number {
    return Math.floor(Math.random() * (max - min) + min) + 1;
}

const result1 = getRandomMinMax();

console.log(result1);

const result2 = getRandomMinMax(10, 200);

console.log(result2);