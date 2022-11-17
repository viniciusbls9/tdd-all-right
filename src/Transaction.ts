import Installment from "./Installment";
import Tax from "./Tax";

export default class Transaction {
  installments: Installment[];

  constructor(
    readonly email: string,
    readonly amount: number,
    readonly paymentMethod: string,
    readonly numberOfInstallments: number = 1,
    readonly taxes: Tax
  ) {
    this.installments = [];
    this.generateInstallments();
  }

  generateInstallments() {
    let installmentsNumber = 1;
    const installmentAmount = this.amount / this.numberOfInstallments;
    while (installmentsNumber <= this.numberOfInstallments) {
      const installment = new Installment(
        installmentsNumber++,
        installmentAmount
      );
      this.installments.push(installment);
    }
  }

  pay(installmentNumber: number) {
    const installment = this.installments.find(
      (installment) => installment.number === installmentNumber
    );

    if (!installment) throw new Error();
    installment.status = "paid";
  }

  getBalance() {
    let balance = this.amount;
    for (const installment of this.installments) {
      if (installment.status === "paid") balance -= installment.amount;
    }
    return balance;
  }

  getStatus() {
    const balance = this.getBalance();
    if (balance === 0) return "paid";
    return "waiting_payment";
  }
}
