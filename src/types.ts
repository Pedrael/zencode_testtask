export enum ReducerTypes {
  ADD_ORDER = 'ADD_ORDER',
  ADD_PRODUCT = 'ADD_PRODUCT',
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

export enum productTypes {
  Monitors = 'Monitors',
  Keyboards = 'Keyboards',
  All = 'All',
}

export type Product = {
  id: number
  serialNumber: number
  isNew: number
  photo: string
  title: string
  type: productTypes | string
  specification: string
  guarantee: {
    start: Date
    end: Date
  }
  price: Array<Price>
  date: Date
}
