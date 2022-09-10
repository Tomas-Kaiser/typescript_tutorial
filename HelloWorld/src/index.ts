// let age: number = 20;
// if (age < 50) age += 10;
// console.log(age);

// type Draggable = {
//   drag: () => void;
// };

// type Resizable = {
//   resize: () => void;
// };

// type UIWidget = Draggable & Resizable;

// let textBox: UIWidget = {
//   drag: () => {},
//   resize: () => {},
// };


// type user = {
//     name: string;
//     age: number;
//     occupation?: string;
// }

// let users: user[] = [
//   { name: "John Smith", age: 30, occupation: "Software engineer" },
//   { name: "Kate Müller", age: 28 },
// ];


// class Person {
//   constructor(public firstName: string, public lastName: string){};

//   get fullName(): string {
//     return `${this.firstName} ${this.lastName}`;
//   }

//   walk() {
//     console.log("Walking...");
//   }
// }

// class Student extends Person {
//   constructor(public studentId: number, firstName: string, lastName: string) { // note we do not use access modifier for firstName 
//     // and lastName as we do not want to create a new properties in Student class hence it already exists in Person class
//     super(firstName, lastName);
//   }

//   takeTest() {
//     console.log("Taking a test...")
//   }
// }

// class Teacher extends Person {
//   // We do not have to create constructor if we do not want to create additional properties for Teacher class.

//   override get fullName() {
//     return `Professor ${super.fullName}`; // We can use super keyword to not repeat ourselves. 
//   }
// }

// let teacher = new Teacher("T", "K");
// console.log(teacher.fullName);

// printNames([
//   new Student(1, "Tom", "K"),
//   new Teacher("Joy", "J")
// ]);

// function printNames(people: Person[]): void {
//   for (let person of people)
//     console.log(person.fullName);
// }

// abstract class shape {
//   constructor(public color: string){}

//   abstract render(): void;
// }

// class circle extends shape {
//   constructor(public radius: number, color: string) {
//     super(color);
//   }

//   override render(): void {
//     console.log("Rendering a circle!");
//   }
// }

// class KeyValuePair {
//   constructor(public key: number, public value: string) {}
// }

// class StringKeyValuePair {
//   constructor(public key: string, public value: string) {}
// }

// let pair = new StringKeyValuePair('1', "Apple");

// // class KyeValuePair<T, U> {
// //   constructor(public key: T, public value: U) {}
// // }

// // let pair = new StringKeyValuePair<string, string>('1', "Apple");

// function wrapInArray<T>(value: T) {
//   return [value];
// }

// let array = wrapInArray('1');

// interface Result<T> {
//   data: T | null,
//   error: string | null
// }

// function fetch<T>(url: string): Result<T> {
//   return {data: null, error: null};
// }

// interface User {
//   username: string;
// }

// interface Product {
//   title: string
// }

// let result = fetch<User>("url");
// result.data?.username;

// let resultP = fetch<Product>("url");
// resultP.data?.title;

// function echo<T extends string | number>(value: T): T {
//   return value;
// }

// echo('a');
// echo(1);

interface Product {
  name: string,
  price: number
}

type ReadOnlyProduct = {
  // Index signature
  // keyof
  readonly [Property in keyof Product]: Product[Property]
}

class Store<T> {
  protected _objects: T[] = []
  
  add(obj: T): void {
    this._objects.push(obj);
  } 

  find(property: keyof T, value: unknown): T | undefined {
    return this._objects.find(obj => obj[property] === value);
  }
}

let store = new Store<Product>();
store.add({name: "a", price: 1});
store.find("name", "a");
store.find("price", 1);

// 1. scenario - Pass on the generic type parameter
// We need to add <T> to the CompressibleStore<T>
class CompressibleStore<T> extends Store<T> {
  compress() {};
}

new CompressibleStore<Product>();

// 2. scenario - Restricting the generic type parameter
class SearchableStore<T extends {name: string}> extends Store<T> {
  find(name: string): T | undefined {
    return this._objects.find(obj => obj.name === name);
  }
}

// 3. scenario - Fix/terminate the generic type parameter
class ProductStore extends Store<Product> {
  filterByCategory(category: string): Product[] {
    return [];
  }
}


// We are using Pascal naming convention
// To apply this function to class we need to use constructor as a parameter
function Compotent(constructor: Function) {
  // In that func we can modify or enhance our class
  console.log("Component decorator called!");
  // Every object in the JS has a prototype which inherits various properties and methods
  constructor.prototype.uniqueId = Date.now();
  constructor.prototype.insertInDom = () => {
    console.log("Inserting a component into DOM");
  }
}

@Component
class ProfileComponent {}