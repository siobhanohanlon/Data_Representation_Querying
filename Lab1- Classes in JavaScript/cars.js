<<<<<<< HEAD
//Create Parent class
class Vehicle {
    constructor(mk, mdl, yr) {
        this.make = mk;
        this.model = mdl;
        this.year = yr;
    }

    //Method to print info to screen
    Information() {
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    }
}

//Create an instance of Vehicle
let v1 = new Vehicle("Ford", "Fiesta", 2013);
v1.information();

//Create Child Class
class Cars extends Vehicle {
    constructor(mk, mdl, yr, drs) {
        //Invoke parent method
        super(mk, mdl, yr);

        //Assign new var
        this.doors = drs;
    }

    //Method to print info to screen
    Information() {
        //Can also do like this
        //super.Information();
        //console.log(.....);
        return super.Information() + console.log(`Doors: ${this.doors}`);
    }
}

//Create an instance of Cars
c1 = new Cars("Audi", "A1", 2018, 5);
c1.Information();
=======
var make, model, year, doors;

class Vehicle{
    constructor(mk, mdl, yr){
        this.make = mk;
        this.model = mdl;
        this.year = yr;
    }

    information(){
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    }
}

v1 = new Vehicle("Ford", "Fiesta", 2013);
v1.information();

class Cars extends Vehicle{
    constructor(mk, mdl, yr, drs){
        super(mk, mdl, yr);

        this.doors = drs;
    }

    information(){
        return console.log("\n") + super.information() + console.log(`Doors: ${this.doors}`);
    }
}

c1 = new Cars("Audi", "A1", 2018, 5);
c1.information();
>>>>>>> 20e1c5b0576fd2a47d5b5a60fca3c4bbb1019e0b
