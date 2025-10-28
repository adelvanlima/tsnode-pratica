import { BankAccount } from "../src/bank";

describe("Teste das funcionalidades de banco", () => {
  test("Deve inicializar um conta bancária", () => {

    // arrange
    const accountNumber = 123;

    // act
    const account = new BankAccount();
    account.number = accountNumber;

    // assert
    expect(account.number).toBe(accountNumber);

  });

  test("Deve construir uma conta bancária com saldo inicial", () => {

    // arrange
    const accountNumber = 123;
    const accountBalance = 1000;

    // act
    const account = new BankAccount(accountNumber, accountBalance);
   
    // assert
    expect(account.number).toBe(accountNumber);
    expect(account.balance).toBe(accountBalance);

  });

  test("Deve construir uma conta bancária e efetuar depósito", () => {

    // arrange
    const accountNumber = 123;
    const accountBalance = 1000;
    const accountAmount = 500;

    // act
    const account = new BankAccount(accountNumber, accountBalance);
   
    // assert
    expect(account.number).toBe(accountNumber);
    expect(account.balance).toBe(accountBalance);

    // act deposit
    account.deposit(accountAmount);

    // assert deposit
    expect(account.balance).toBe(accountBalance + accountAmount);

  });

  test("Deve construir uma conta bancária e efetuar um saque", () => {
    // arrange
    const accountNumber = 123;
    const accountBalance = 1000;
    const accountAmount = -100;

    // act
    const account = new BankAccount(accountNumber, accountBalance);
   
    // assert
    expect(account.number).toBe(accountNumber);
    expect(account.balance).toBe(accountBalance);

    // act withdraw
    account.withdraw(accountAmount);

    // assert withdraw
    expect(account.balance).toBe(accountBalance - accountAmount);
  });

  test("Deve construir uma conta bancária e verificar o valor do cheque especial quando o saldo for suficiente", () => {

    // arrange
    const accountNumber = 123;
    const accountBalance = 1000;

    const accountAmount = -100;

    // act
    const account = new BankAccount(accountNumber, accountBalance);
   
    // assert
    expect(account.number).toBe(accountNumber);
    expect(account.balance).toBe(accountBalance);

    // act withdraw
    account.withdraw(accountAmount);

    // assert withdraw
    expect(account.balance).toBe(accountBalance - accountAmount);

    
  });

  test("Deve construir uma conta bancária e verificar o valor do cheque especial quando o saldo for insuficiente", () => {

    // arrange
    const accountNumber = 123;
    const accountBalance = 1000;
    const accountAmount = -2500;

    // act
    const account = new BankAccount(accountNumber, accountBalance);

    // assert
    expect(account.number).toBe(accountNumber);
    expect(account.balance).toBe(accountBalance);

    // act withdraw and assert error
    expect(() => {
      account.withdraw(accountAmount);
    }).toThrow("Saldo insuficiente");

  });
  
});