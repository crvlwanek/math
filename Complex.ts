// Complex number functions

// Needs testing
export default class Complex {
    public real: number;
    public imaginary: number;

    public constructor(real: number, imaginary: number)
    public constructor(complex: Complex)
    public constructor(numArray: number[])
    public constructor(realComplexOrArray: number | Complex | number[], imaginary?: number) {
        if (typeof realComplexOrArray === "number") {
            this.real = realComplexOrArray;
            this.imaginary = imaginary;
        }
        else if (realComplexOrArray instanceof Complex) {
            this.real = realComplexOrArray.real;
            this.imaginary = realComplexOrArray.imaginary;
        }
        else if (realComplexOrArray instanceof Array) {
            if (realComplexOrArray.length !== 2) {
                throw new Error("Array must be of length 2");
            }
            const [real, imaginary] = realComplexOrArray;
            this.real = real;
            this.imaginary = imaginary;
        }
        else { throw new Error("Unreognized function arguments"); }
    }

    public static equals = (num1: Complex, num2: Complex): boolean => {
        return (num1.real === num2.real) && (num1.imaginary === num2.imaginary);
    }
    public static add = (num1: Complex, num2: Complex): Complex => {
        return new Complex(
            num1.real + num2.real,
            num1.imaginary + num2.imaginary
    )}
    public static sub = (num1: Complex, num2: Complex): Complex => {
        return new Complex(
            num1.real - num2.real,
            num1.imaginary - num2.imaginary
    )}
    public static mul = (num1: Complex, num2: Complex): Complex => {
        return new Complex(
            (num1.real * num2.real) - (num1.imaginary * num2.imaginary),
            (num1.real * num2.imaginary) + (num1.imaginary * num2.real)
    )}

    public toString = (): string => {
        return `${this.real}+${this.imaginary}i`;
    }
    public equals = (other: Complex): boolean => {
        return Complex.equals(this, other);
    }
    public add = (other: Complex): void => {
        this.real += other.real;
        this.imaginary += other.imaginary;
    }
    public sub = (other: Complex): void => {
        this.real -= other.real;
        this.imaginary -= other.imaginary;
    }
    public mul = (other: Complex): void => {
        const real: number = this.real;
        const imaginary: number = this.imaginary;
        this.real = (real * other.real) - (imaginary * other.imaginary);
        this.imaginary = (real * other.imaginary) + (imaginary * other.real);
    }
}