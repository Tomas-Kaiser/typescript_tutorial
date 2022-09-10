var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var age = 20;
if (age < 50)
    age += 10;
console.log(age);
var textBox = {
    drag: function () { },
    resize: function () { }
};
var users = [
    { name: "John Smith", age: 30, occupation: "Software engineer" },
    { name: "Kate Müller", age: 28 },
];
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    ;
    Object.defineProperty(Person.prototype, "fullName", {
        get: function () {
            return "".concat(this.firstName, " ").concat(this.lastName);
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.walk = function () {
        console.log("Walking...");
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(studentId, firstName, lastName) {
        var _this = 
        // and lastName as we do not want to create a new properties in Student class hence it already exists in Person class
        _super.call(this, firstName, lastName) || this;
        _this.studentId = studentId;
        return _this;
    }
    Student.prototype.takeTest = function () {
        console.log("Taking a test...");
    };
    return Student;
}(Person));
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Teacher.prototype, "fullName", {
        // We do not have to create constructor if we do not want to create additional properties for Teacher class.
        get: function () {
            return "Professor ".concat(_super.prototype.fullName); // We can use super keyword to not repeat ourselves. 
        },
        enumerable: false,
        configurable: true
    });
    return Teacher;
}(Person));
var teacher = new Teacher("T", "K");
console.log(teacher.fullName);
printNames([
    new Student(1, "Tom", "K"),
    new Teacher("Joy", "J")
]);
function printNames(people) {
    for (var _i = 0, people_1 = people; _i < people_1.length; _i++) {
        var person = people_1[_i];
        console.log(person.fullName);
    }
}
var shape = /** @class */ (function () {
    function shape(color) {
        this.color = color;
    }
    return shape;
}());
var circle = /** @class */ (function (_super) {
    __extends(circle, _super);
    function circle(radius, color) {
        var _this = _super.call(this, color) || this;
        _this.radius = radius;
        return _this;
    }
    circle.prototype.render = function () {
        console.log("Rendering a circle!");
    };
    return circle;
}(shape));
var KeyValuePair = /** @class */ (function () {
    function KeyValuePair(key, value) {
        this.key = key;
        this.value = value;
    }
    return KeyValuePair;
}());
var StringKeyValuePair = /** @class */ (function () {
    function StringKeyValuePair(key, value) {
        this.key = key;
        this.value = value;
    }
    return StringKeyValuePair;
}());
var pair = new StringKeyValuePair('1', "Apple");
// class KyeValuePair<T, U> {
//   constructor(public key: T, public value: U) {}
// }
// let pair = new StringKeyValuePair<string, string>('1', "Apple");
function wrapInArray(value) {
    return [value];
}
var array = wrapInArray('1');
