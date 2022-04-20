import Coupon from "./Coupon";
import Cpf from "./Cpf";
import Item from "./Item";
import OrderItem from "./OrderItem";

export default class Order {
  cpf: Cpf;
  orderItems: OrderItem[];
  coupon?: Coupon;

  constructor(cpf: string, readonly date: Date = new Date()) {
    this.cpf = new Cpf(cpf);
    this.orderItems = [];
  }

  getTotal() {
    let total = 0;
    for (const orderItem of this.orderItems) {
      total += orderItem.getTotal();
    }
    if (this.coupon) {
      total -= this.coupon.calculateDiscount(total);
    }
    return total;
  }

  addCoupon(coupon: Coupon) {
    if (coupon.isValid(this.date)) this.coupon = coupon;
  }
  addItem(
    item: Item,
    quantity: number,
    lenght: number,
    width: number,
    height: number,
    weight: number
  ) {
    this.orderItems.push(
      new OrderItem(
        item.idItem,
        item.price,
        quantity,
        lenght,
        width,
        height,
        weight
      )
    );
  }

  getFrete(distance: number) {
    //frete = distancia * volume * (densidade/100)
    let frete = 0;
    for (const orderItem of this.orderItems) {
      let value =
        distance * orderItem.getVolume() * (orderItem.getDensidade() / 100);
      frete += value < 10 ? 10 : value;
    }
    return frete;
  }
}
