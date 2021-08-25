// Integer related functions

// Needs testing
export default class Int {
    public static isNonNegative = (n: number): boolean => {
        return n >= 0;
    }
    public static isInt = (n: number): boolean => {
        return n % 1 == 0;
    }
    public static isNonNegativeInt = (n: number): boolean => {
        return Int.isNonNegative(n) && Int.isInt(n);
    }
    public static isPrime = (n: number): boolean => {
        for (let i = 2; i * i <= n; i++) {
            if (n % i === 0) return false;
        }
        return true;
    }
    public static isSumOfSquares = (n: number): boolean => {
        let count: number;
        for (let i = 2; i * i <= n; i++) {
            count = 0;
            while (n % i === 0) {
                n /= i;
                count++;
            }
            if (i % 4 === 3 && count % 2 !== 0) return false;
        }
        return n % 4 !== 0;
    }
    // Needs to be tested
    public static factorial = (n: number): number => {
        if (!Int.isNonNegativeInt(n)) {
            throw new Error("Number must be a non-negative integer");
        }
        let total = 1;
        for (let i = 2; i <= n; i++) {
            total *= i;
        }
        return total;
    }
}