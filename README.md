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
