interface IAnimal{
    name: string;
    danger: number;
    getInfo(): void;
}

class Animal implements IAnimal{
    name: string;
    danger: number;

    constructor(name: string, danger: number){
        this.name = name;
        this.danger = danger;
    }

    getInfo(): void {
        console.log(this.name + this.danger);
    }
}

class Fox extends Animal {
    tailLength: number;

    constructor(name: string, danger: number, tailLenght: number){
        super(name, danger);

        this.tailLength = tailLenght;
    }

    getInfo(): void {
        console.log(this.tailLength);
    }
}

var goose: Animal = new Animal("Goose", 1);
goose.getInfo();

var fox: Animal = new Fox("Fox", 2, 3);
fox.getInfo();