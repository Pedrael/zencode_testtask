import { createSelector } from '@reduxjs/toolkit'
import { RootState } from './store'
import { Order } from './types'

export const orderNameSelector = createSelector(
  (state: RootState) => state.order.value,
  (value) =>
    value.find(({ products }: Order) => products.find((id) => id))?.title ??
    'none',
)

export const productsByIdSelector = createSelector(
  [
    (state: RootState) => state.product.value,
    (_, productsFromArray) => productsFromArray,
  ],
  (value, productsFromArray) =>
    value.filter((product) => productsFromArray.includes(product.id)),
)

export const ordersSelector = (state: RootState) => state.order.value

export const productsSelector = (state: RootState) => state.product.value
