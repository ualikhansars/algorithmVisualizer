class Random {
    static getRandomInt(min: number = -100, max: number = 100): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}

export default Random;