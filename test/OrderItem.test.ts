import OrderItem from "../src/domain/entity/OrderItem"

test("Deve Criar um item do pedido", () => {
    const orderItem = new OrderItem(1, 1000, 10, 1, 1, 1, 1)
    expect(orderItem.getTotal()).toBe(10000)
})


test("Deve calcular a densidade e volume doitem do pedido", () => {
    const orderItem = new OrderItem(1, 1000, 10, 20, 15, 10, 1)
    expect(orderItem.getVolume()).toBe(0.003)
    expect(orderItem.getDensidade()).toBe(333)
})