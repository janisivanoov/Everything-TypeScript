class Formula{
    static PI: number = 3.14;
    static Half: number = 0.5;

    static getCircleSquare(radius: number): number{
        return this.PI * radius * radius;
    }

    static getTriangleSquare(length: number, height: number): number {
        return this.Half * length *  height;
    }
}

var triangle = Formula.getTriangleSquare(4,7);
var circle = Formula.getCircleSquare(5);

console.log(triangle);
console.log(circle);