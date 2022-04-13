class Car{
    id: number;
    name: string;
    model: string;

    constructor(carId: number, carName: string, carModel: string){
        this.id = carId;
        this.name = carName;
        this.model = carModel;
    }

    getInfo(): string {
        return "Car model = " + this.name + "model = " + this.model;
    }
}

var mazda = new Car(1, "Mazda", "6");
console.log(mazda.getInfo());