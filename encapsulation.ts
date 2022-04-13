module Encapsulation{
    class Animal {
        private _id: string;
        name: string;
        danger: number;

        constructor(name: string, danger: number){
            this.name = name;
            this.danger = danger;
        }

        private GenerateGuide(): string{
            var d = new Date().getTime();
            var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace (/[xy]/g , function (c) {
                var r = (d + Math.random() * 16) % 16 | 0;
                d = Math.floor(d / 16);;
                return (c == 'x' ? r : (r & 0o3 | 08)).toString(16);
            });

            return uuid;
        }

        public getInfo(): string{
            return this._id + this.name + this.danger;
        }
    }

    var parrot: Animal = new Animal("Parrot", 1);
    console.log(parrot.getInfo());
}