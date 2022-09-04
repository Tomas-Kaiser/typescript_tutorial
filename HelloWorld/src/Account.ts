class Account {
    constructor(
        public readonly id: number,
        public owner: string,
        private _balance: number
        ){
        }

    set balance(amount: number) {
        if (amount <= 0)
            throw new Error("Invalid amount!");
        this._balance += amount;
    }

    get balance(): number {
        return this._balance;
    }
}

let account = new Account(1, "Tom", 0);
account.balance = 100;
console.log(account.balance);
console.log(account);
console.log(account instanceof Account);




class Ride {
    private static _activeRiders: number = 0;

    start() { Ride._activeRiders++}
    stop() { Ride._activeRiders--}

    static get activeRiders() { // We need to use stati access modifier to access the static property in the class
        return Ride._activeRiders; // We do not use this as this referes to the object and not a class!!
    }
}

let ride1 = new Ride();
ride1.start();

let ride2 = new Ride();
ride2.start();

console.log(Ride.activeRiders);
