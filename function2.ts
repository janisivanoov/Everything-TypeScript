function numberOperator(number1: number , number2: number, callback: (a: number , b: number) => number){
    return callback(number1 , number2);
}

function addCallbackNumbers(number1: number, number2: number): number {
    return number1 + number2;
}

function multipleNumbers(number1: number, number2: number): number {
    return number1 * number2;
}

console.log(numberOperator(5,5,addCallbackNumbers));
console.log(numberOperator(4,4,multipleNumbers));