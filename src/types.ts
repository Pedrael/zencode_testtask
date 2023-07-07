export type Action = {
  type: string
  payload: Order | Product | Object
}

export type State = {
  orders: Array<Order>
  products: Array<Product>
}

export type Order = {
  id: number
  title: string
  date: Date
  description: string
  products: Array<number>
}

export type Price = {
  value: number
  symbol: Currency
  isDefault: number
}

export enum Currency {
  USD = 'USD',
  UAH = 'UAH',
  EUR = 'EUR',
}

export type Product = {
  id: number
  serialNumber: number
  isNew: number
  photo: string
  title: string
  type: string
  specification: string
  guarantee: {
    start: Date
    end: Date
  }
  price: Array<Price>
  date: Date
}
