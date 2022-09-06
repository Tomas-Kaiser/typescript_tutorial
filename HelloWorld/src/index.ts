let age: number = 20;
if (age < 50) age += 10;
console.log(age);

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};


type user = {
    name: string;
    age: number;
    occupation?: string;
}

let users: user[] = [
  { name: "John Smith", age: 30, occupation: "Software engineer" },
  { name: "Kate Müller", age: 28 },
];


class Person {
  constructor(public firstName: string, public lastName: string){};

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  walk() {
    console.log("Walking...");
  }
}

class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) { // note we do not use access modifier for firstName 
    // and lastName as we do not want to create a new properties in Student class hence it already exists in Person class
    super(firstName, lastName);
  }

  takeTest() {
    console.log("Taking a test...")
  }
}

let student = new Student(1, "Tom", "K");