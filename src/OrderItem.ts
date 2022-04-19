export default class OrderItem {
    constructor(
        readonly idItem: number,
        readonly price: number,
        readonly quantity: number,
        readonly lenght: number,
        readonly width: number,
        readonly height: number,
        readonly weight: number
    ) {

    }

    getTotal() {
        return this.price * this.quantity
    }
    getVolume() {
        return (this.lenght / 100) * (this.width / 100) * (this.height / 100)
    }

    getDensidade() {
        return Math.round(this.weight / this.getVolume())
    }
}
