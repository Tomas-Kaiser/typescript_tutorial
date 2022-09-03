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