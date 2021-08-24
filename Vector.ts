// Vector related functions

interface IMappable {
    (value: unknown, index?: number)
}

export default class Vector {
    private _values: number[];


    public constructor()
    public constructor(vector: Vector)
    public constructor(values: number[])
    public constructor(...values: number[])
    public constructor(vectorValueOrValues?: Vector | number[] | number, ...values: number[]) {
        if (vectorValueOrValues instanceof Vector) {
            this._values = vectorValueOrValues._values;
        } else if (vectorValueOrValues instanceof Array) {
            this._values = vectorValueOrValues;
        } else {
            this._values = [vectorValueOrValues, ...values]
        }
    }

    public get = (index: number): number => { return this._values[index] }
    public set = (index: number, value: number) => { this._values[index] = value; }

    public map = (func: IMappable): Vector => {
        this._values.map(func);
        return this;
    }
    public numDimensions = (): number => { return this._values.length; }
    // Add dimension checking
    public add = (other: Vector) => {
        this.map((_, index) => { this.set(index, this.get(index) + other.get(index)) });
    }
    public sub = (other: Vector) => {
        this.map((_, index) => { this.set(index, this.get(index) - other.get(index)) });
    }
    public scale = (alpha: number) => {
        this.map((_, index) => { this.set(index, this.get(index) * alpha) });
    }
}