export class BankAccount {

    number: number;
    balance: number;
    specialCheck: number = 1000;

    constructor(number?: number, balance?: number) {
        this.number = number ?? 0;
        this.balance = balance ?? 0;
    }

    deposit(amount: number): void {
        this.balance += amount;
    }

    withdraw(amount: number): void {
        if (amount < 0 && Math.abs(amount) > this.balance + this.specialCheck) {
            throw new Error("Saldo insuficiente");
        }

        this.balance -= amount;
    }

}