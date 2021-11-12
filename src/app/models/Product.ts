export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
}

export class Product implements IProduct {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly price: number;

  constructor(
    id: string,
    name: string,
    description: string,
    price: number,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
  }
}