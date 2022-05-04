import Coupon from "../../src/domain/entity/Coupon";

test("Deve criar um cupom de desconto válido", () => {
  const coupon = new Coupon("VALE20", 20, new Date("2021-12-10"));
  const today = new Date("2021-12-01");
  const isValid = coupon.isValid(today);
  expect(isValid).toBeTruthy();
});

test("Deve criar um cupom de desconto expirado", () => {
  const coupon = new Coupon("VALE20", 20, new Date("2021-12-01"));
  const today = new Date("2021-12-10");
  const isExpired = coupon.isExpired(today);
  expect(isExpired).toBeTruthy();
});

test("Deve criar um cupom de desconto expirado", () => {
  const coupon = new Coupon("VALE20", 20);
  const discount = coupon.calculateDiscount(1000);
  expect(discount).toBe(200);
});
