<<<<<<< HEAD
//New Class made
class BMI {
    //Constructor used to initialise data in class
    constructor(h, w) {
        this.height = h;
        this.weight = w;
    }

    //Method to calculate BMI
    calculateBMI() {
        let bmi = this.weight / (this.height ** 2);
        return bmi;
    }
}

//Create an instance of class BMI
let myBMI = new BMI(4, 50);

//Print to screen
console.log(myBMI.calculateBMI());
=======
var height, weight;

class BMI{

    constructor(h, w){
        this.height = h;
        this.weight = w;
    }

    calculateBMI(){
        let bmi = this.weight/(this.height**2);
        console.log(bmi);
    }
}

p1 = new BMI(4,5);
p1.calculateBMI();
>>>>>>> 20e1c5b0576fd2a47d5b5a60fca3c4bbb1019e0b
