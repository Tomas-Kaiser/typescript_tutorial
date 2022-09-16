function Capitalize(target: any, methodName: string, descriptor: PropertyDecorator) {
    const original = descriptor.get;
    descriptor.get = function() {
       const result = original?.call(this);
       return (typeof result === 'string') ? result.toLocaleUpperCase : result;
    }
}

class Person {
    constructor(public firstName: string, public lastName: string) {}

    @Capitalize
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}