"use strict";
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    set balance(amount) {
        if (amount <= 0)
            throw new Error("Invalid amount!");
        this._balance += amount;
    }
    get balance() {
        return this._balance;
    }
}
let account = new Account(1, "Tom", 0);
account.balance = 100;
console.log(account.balance);
console.log(account);
console.log(account instanceof Account);
class Ride {
    start() { Ride._activeRiders++; }
    stop() { Ride._activeRiders--; }
    static get activeRiders() {
        return Ride._activeRiders;
    }
}
Ride._activeRiders = 0;
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();
console.log(Ride.activeRiders);
//# sourceMappingURL=Account.js.map