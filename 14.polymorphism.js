class Computer {
    constructor(name, model) {
        this.name = name;
        this.model = model;
    }

    aboutComputer() {
        console.log(`this computer name is ${this.name} and the model is ${this.model}`);
    }
}


class Hp extends Computer {
    constructor(name, model, color) {
        super(name, model);
        this.color = color;
    }

    aboutComputer() {
        console.log(`this computer name is ${this.name} and the model is ${this.model} and the color is ${this.color}`);
    }
}

const hp22 = new Hp("Hp22", "dk22", "black");
const hp23 = new Hp("Hp23", "dk23", "red");

hp23.aboutComputer()
