"use strict";
let age = 20;
if (age < 50)
    age += 10;
console.log(age);
let textBox = {
    drag: () => { },
    resize: () => { },
};
let users = [
    { name: "John Smith", age: 30, occupation: "Software engineer" },
    { name: "Kate Müller", age: 28 },
];
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    ;
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    walk() {
        console.log("Walking...");
    }
}
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        console.log("Taking a test...");
    }
}
class Teacher extends Person {
    constructor(firstName, lastName) {
        super(firstName, lastName);
    }
    get fullName() {
        return `Professor ${super.fullName}`;
    }
}
let teacher = new Teacher("T", "K");
console.log(teacher.fullName);
//# sourceMappingURL=index.js.map