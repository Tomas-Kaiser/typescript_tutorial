# TypeScript

Typescirpt is a programming language created by Microsoft address some of the shortcomings of javascript. TS is a programming language built on top of the Javascript. So every JS file is TS valid file. TS helps us to build more robust and maintainable applications in less time.

TS has some benefits:
- Static typing
- Code complation
- Refactoring
- Shorthand notations

<strong>Stattic types</strong>

Statically-typed languages such as C++, C# or java, we now the type of variables at compile time or when coding

```java
// Java
int number = 10;
number = "a"; // WRONG
```

Dynamically-typed languages such as JavaScript, Python or Ruby, the type of variable is dynamic. Variables can be changed at runtime.

```javascript
// Javascript
let number = 10;
number = "a"; // It is OK
```

This may leads to create bugs which may be very hard to find it.

TS is sometimes called as javascript with type checking.

```typescript
// Typescript
let x: number = 10;
x = "a" // Compiler will identify the bug! 
```

Drawbacks:
- Compalition - We need to give .ts to typescript compiler to compile and translate into .js => this process is called transpilation
- Discipline in coding

Sum up above, TS is good to use for medium to large projects whereas JS might be better for simple projects.

## Setting Up the Development Environment

1. Install the [Node.js](https://nodejs.org/en/).
2. run `npm i -g typescript`
3. run `tsc -v` to check if we installed the TS correctly.

<strong>Configuring the Typescript Compilier</strong>
- `tsc --init` this create a configuration file `tsconfig.json`


<strong>Debugging the Typescript Applications</strong>
- We need to enable in the emit section the sourceMap feature in tsconfig.json
- When clicking on the debug button, the launch.json is open so add this `"preLaunchTask": "tsc: build - tsconfig.json" ,` right above `"outFiles"`

## Fundamentals

We will introduce in this section as follow:
- The any Type
- Arrays
- Tuples
- Enums
- Functions
- Objects

### Built-in Types

TS add some more types to regular types of JS.

| JavaScript  | TypeScript  |
| ----------- | ----------- |
| number      | any         |
| string      | unknow      |
| boolean     | never       |
| null        | enum        |
| undefined   | tuple       |
| object      |             |

Declaring a primitive types in TS

```Typescript
let sales: number = 123_456_790; // if the number is big, we can use underscore in TS for better reading
let course: string = 'Typescipt';
let isPublish: boolean = true; 
let level; // Type of the variable is any

// if we initialize the variable with string, number etc. we do not have tu use the type
// as it figures out automatically:
let avg = 50; // If we hover over avg it'll show a type number
```

### Any Type
We try to avoid using type `any` as much as possible because we are loosing the benefits of Typescript

```Typescript
let level;
level = 1;
level = 'a';
```
It is valid as the level is type any.

### Arrays

```Typescript
let numbers: number[] = [1, 2, 3]; // again we do not have to explicity mention that
                                   // that is an array of numbers as we initialized
                                   // variable numbers 
```

### Tuples

Tuple is a fixed length of array where each element has a particular type. We often use this when working with a pair of values. Let's say that for each user we want to represent two values - id and name.

```Typescript
let user: [number, string] = [1, "Tom"];
user.push(2); // !! You can use array methods eventhough this should not work as tuple is a fixed length of array!
```

It is better to use a tuple for just two values (pair values). When we use tuple for more than two values it gets a bit unclear and difficult to understand what each value means etc.

### Enums

Enum represents a list of related constants. Let's say we want to represent the size of T shirts as constants.

One way:

```Typescript
const small = 1;
const medium = 2;
const large = 3;
```
or
```Typescript
// PascalCase notation is used for enum
const enum Size {Small = 1, Medium, Large}; // values inside of {} are called members
// Automatically assigned { Small = 0, Medium = 1 ...}
// We can start also with 1 if we assign for the first member only { Small = 1, ...} as we change the order with this.
// We can also use letters instead { Small = 's', Medium = 'm' ...} but we have to explicitly do it for all members

let mySize: Size = Size.Medium;
console.log(mySize) // print out 2
```
*Tip*: Use `const` before `enum` as it will generate more optimized code when the TS compiler comply the code from TS to JS.

### Functions

We should always specify the return value of the function.

```Typescript
function calculateTax(income: number, taxYear = 2022): number {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
```
We can use optional parametr instead of default value for taxYear like `taxYear?` but it is better to use default parametr to avoid undefined.

### Objects

We can use `readonly` to be able to read a property and not to change it.

```Typescript
let employ: {
    readonly id: number
    name: string
    retire: (date: Date) => void // void represent the return value of the method - we do not expect any value to be returned
} = {
    id: 1,
    name: "Tom",
    retire: (date: Date) => {
        console.log(date);
    }
}
```

This is a bit noisy and difficult to read so later of thistutorial, I'll show you how to do it better.

## Advanced Types
To introduce advanced types in Typescript!

### Type Alias

With `type` we can simplify the object we created above as follow:

```Typescript
type Employe = {
    readonly id: number
    name: string
    retire: (date: Date) => void
}

let employ: Employe = {
    id: 1,
    name: "Tom",
    retire: (date: Date) => {
        console.log(date);
    }
}
```

### Union Types

With `union` we can give to a variable or function one or more types.

```Typescript
function kgToLbs(weight: number | string): number {
    // Narrowing 
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}

kgToLbs(10);
kgToLbs('10');
```

The union type is `number | string` and we need to narrowing in the function block to identify if it is number or string.

### Intersection Types

We have another technic to combine types called intersection. Instead of verticle bar we use `&`

`weight: number & string` - this does not make sence as object weight cannot be number and string at the same time so see real example below:

```Typescript
type Draggable = {
    drag: () => void;
}

type Resizable = {
    resize: () => void;
}

type UIWidget = Draggable & Resizable

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}
```

### Literal Types

Sometimes we want to limit a value we can assign to a variable. This is where we use literal types where we specify exact value or we can use union types such as

```Typescript
let quantity: 50 | 100 = 100;

// Or even better, we can use alias type
type Quantity = 50 | 100;
let quiantity: Quantity = 50;
```
It also can be a string, not just number etc.

### Nullable Types

We can use null as a type such:
```Typescript
function greet(name: string | null | undefined)
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("Hola!");

greet(null);
```

### Optional Chaining

```Typescript
type Customer = {
    birthday: Date 
}

function getCustomer(id: number): Customer | null {
    return id === 0 ? null : {birthday: new Date()}
}

let customer = getCustomer(0);
// if (customer !== null && customer !== undefined) // Instead this we can use Optional property access operator with '?'
console.log(customer?.birthday);
```

### The Nullish Coaelscing Operator
The nullish coaelscing operator in Typescript is `??`. This check whether the value is null or undefined;

```Typescript
let speed: number | null = null;
let ride = {
    speed: speed ?? 30 // means use speed if the speed is not null or undefined otherwise use 30
}
```
### Type Assertion
Sometimes we know more about the type of a variable than the TypeScript compiler. In those situations, we can use the as keyword to specify a different type than the one inferred by the compiler. This is called type assertion.

```Typescript
// HTMLElement
// HTMLInputElement
let phone = document.getElementById("phone") as HTMLInputElement;
// or
let phone = <HTMLInputElement> document.getElementById("phone");

phone.value;
```

### The Unknown Type
The unknown type is the type-safe version of any. Similar to any, it can represent any value but we cannot perform any operations on an unknown type without first narrowing to a more specific type.

```Typescript
function render(document: uknown) {
    // Use narrowing when uknown type is used

    if (typeof document === "string"){
        // In this block code, we have string method available
        // typeof can be used just for primitive types. We need to use instanceof for custom objects instead.
    }
    document.move(); // Compiler won't be complaining eventhougt those methods does not exist, because we use type uknown
    document.fly();
}

```

### The Never Type
The never type represents values that never occur. We often use them to annotate functions that never return or always throw an error. 


```Typescript
function reject(message: string): never { // We annotate it with never as this func will never return
    throw new Error(message);
}

reject("...");
console.log("Hello World"); // This will never be executed 
```

## Classes, Interfaces and Object-oriented Programming

In this section we are going to look at:
- Introduction to OOP
- Classes
- Constructors
- Properties and methods
- Access control keyword
- Getters & Setters
- Static members
- Index signature
- Inheritance
- Polymorphism
- Abstract classes
- Interfaces

### What Is OOP
OOP stands for Object-Oriented Programing. OOP is one of the many programming paradigms (styles of programming) in which objects are the building blocks of applications. We have others such as:

- Procedural
- Functional
- Object-oriented
- Event-driven
- Aspect-oriented
and so on ...

TS and JS can be used for functional or OOP style of programming.

The object contain a 

- data (state) also known as properties
- Operations (behaviour) also known as methods

### Creating Classes

OOP is all about object. To create an object, you need to create a class first. A class is a blueprint for creating objects. It is like a object factory.

Let's create a class account as follow:

<img src="./imgs/AccountObject.png" alt="Account class schema" width="250">

Every class needs constructor which is a special method inside of the class used for initializing an object. Constructor has no return keyword as it should always return an instance of a bank account. So if we hover over the constructor we can see that the return value is Account.

```Typescript
class Account {
    id: number;
    owner: string;
    balance: number;

    constructor(id: number, owner: string, balance: number) {
        this.id = id;
        this.owner = owner;
        this.balance = balance
    }

    deposite(amount: number): void {
        if (amount <= 0)
            throw new Error("Invalid amount!");
        this.balance += amount;
    }
}
```