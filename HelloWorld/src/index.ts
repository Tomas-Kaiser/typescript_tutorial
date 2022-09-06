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

  get fullName(): string {
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

class Teacher extends Person {
  // We do not have to create constructor if we do not want to create additional properties for Teacher class.

  override get fullName() {
    return `Professor ${super.fullName}`; // We can use super keyword to not repeat ourselves. 
  }
}

let teacher = new Teacher("T", "K");
console.log(teacher.fullName);

printNames([
  new Student(1, "Tom", "K"),
  new Teacher("Joy", "J")
]);

function printNames(people: Person[]): void {
  for (let person of people)
    console.log(person.fullName);
}