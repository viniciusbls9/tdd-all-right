import Transaction from "../src/Transaction";

test("Deve criar uma transação", () => {
  const email = "vinicius@gmail.com";
  const amount = 1000;
  const paymentMethod = "boleto";
  const transaction = new Transaction(email, amount, paymentMethod);

  const status = transaction.getStatus();
  expect(status).toBe("open");
});
