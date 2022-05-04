export type PlaceOrderInput = {
  cpf: string;
  orderItems: { idItem: number; quantity: number }[];
  date: Date;
};
