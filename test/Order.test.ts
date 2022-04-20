import Coupon from "../src/Coupon";
import Item from "../src/Item";
import Order from "../src/Order";

test("Deve criar um pedido vazio com CPF válido", () => {
    const cpf = "839.435.452-10"
    const order = new Order(cpf);
    const total = order.getTotal();
    expect(total).toBe(0)
})

test("Deve tentar criar um pedido vazio com CPF inválido", () => {
    const cpf = "111.111.111-11"
    expect(() => new Order(cpf)).toThrow(new Error("Invalid cpf"))
})

test("Deve criar um pedido com 3 itens", () => {
    const cpf = "839.435.452-10"
    const order = new Order(cpf);
    order.addItem(new Item(1, 'Música', 'CD', 30), 3, 10, 7, 5, 0.5)
    order.addItem(new Item(2, 'Vídeo', 'DVD', 50), 1, 10, 7, 5, 0.5)
    order.addItem(new Item(3, 'Vídeo', 'VHS', 10), 2, 10, 7, 5, 0.5)
    const total = order.getTotal();
    expect(total).toBe(160)
})

test("Deve criar um pedido com 3 itens com um cupom de desconto", () => {
    const cpf = "839.435.452-10"
    const order = new Order(cpf);
    order.addItem(new Item(1, 'Música', 'CD', 30), 3, 10, 7, 5, 0.5)
    order.addItem(new Item(2, 'Vídeo', 'DVD', 50), 1, 10, 7, 5, 0.5)
    order.addItem(new Item(3, 'Vídeo', 'VHS', 10), 2, 10, 7, 5, 0.5)
    order.addCoupon(new Coupon('VALE20', 20))
    const total = order.getTotal();
    expect(total).toBe(128)
})

test("Não deve aplicar um cupom de desconto expirado", () => {
    const cpf = "839.435.452-10"
    const order = new Order(cpf, new Date("2021-12-10"));
    order.addItem(new Item(1, 'Música', 'CD', 30), 3, 10, 7, 5, 0.5)
    order.addItem(new Item(2, 'Vídeo', 'DVD', 50), 1, 10, 7, 5, 0.5)
    order.addItem(new Item(3, 'Vídeo', 'VHS', 10), 2, 10, 7, 5, 0.5)
    order.addCoupon(new Coupon('VALE20', 20, new Date("2021-12-01")))
    const total = order.getTotal();
    expect(total).toBe(160)
})

test("Valor minimo do frete deve ser 10", () => {
    const cpf = "839.435.452-10"
    const order = new Order(cpf);
    order.addItem(new Item(1, 'Fotografia', 'Camera', 30), 1, 20, 15, 10, 1)
    const frete = order.getFrete(1000);
    expect(frete).toBe(10)
})
test("Deve calcular o frete com base nas dimensões e o peso do produto", () => {
    const cpf = "839.435.452-10"
    const order = new Order(cpf);
    order.addItem(new Item(1, 'Fotografia', 'Camera', 30), 1, 100, 30, 10, 3)
    const frete = order.getFrete(1000);
    expect(frete).toBe(30)
})