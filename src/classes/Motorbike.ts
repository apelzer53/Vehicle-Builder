// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// TODO: The Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle {
  // TODO: Declare properties of the Motorbike class
  override vin!: string;
  override color!: string;
  override make!: string;
  override model!: string;
  override year!: number;
  override weight!: number;
  override topSpeed!: number;
  override wheels!: Wheel[];
  
  // TODO: The properties should include vin, color, make, model, year, weight, top speed, and wheels
  // TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[])

  // TODO: Create a constructor that accepts the properties of the Motorbike class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[]
  ) {
    super(vin, color, make, model, year, weight, topSpeed, wheels);
    // TODO: The constructor should call the constructor of the parent class, Vehicle
    // TODO: The constructor should initialize the properties of the Motorbike class

    // TODO: The constructor should check if the wheels array has 2 elements and create 2 new default Wheel objects if it does not
    if (wheels.length < 2) {
      this.wheels = Array(2).fill(new Wheel(17, 'Michelin'));
    }
  }
  // TODO: Implement the wheelie method
    // TODO: The method should log the message "Motorbike [make] [model] is doing a wheelie!"
  wheelie(): void {
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
  }
  // TODO: Override the printDetails method from the Vehicle class
 override  printDetails(): void {
  // TODO: The method should call the printDetails method of the parent class
  super.printDetails();
  console.log(`Motorbike details:`);
  // TODO: The method should log the details of the Motorbike
  console.log(`Wheels: ${this.wheels.length} x ${this.wheels[0].getDiameter}-inch ${this.wheels[0].getTireBrand}`);
  // TODO: The details should include the VIN, make, model, year, weight, top speed, color, and wheels
}
}
// Export the Motorbike class as the default export
export default Motorbike;
