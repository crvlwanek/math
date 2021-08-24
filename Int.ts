// Integer related functions

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