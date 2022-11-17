export default class Transaction {
  constructor(
    readonly email: string,
    readonly amount: number,
    readonly paymentMethod: string
  ) {}

  getStatus() {
    return "open";
  }
}
