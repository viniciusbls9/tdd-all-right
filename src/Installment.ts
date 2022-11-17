export default class Installment {
  status: string;
  constructor(readonly number: number, readonly amount: number) {
    this.status = "waiting_payment";
  }
}
