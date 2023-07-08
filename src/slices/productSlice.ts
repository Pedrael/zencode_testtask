import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Currency, Product } from '../types'

export type ProductState = {
  value: Array<Product>
}
export const productsInitialState: ProductState = {
  value: [
    {
      id: 1,
      serialNumber: 1234,
      isNew: 1,
      photo: 'pathToFile.jpg',
      title: 'Product 1',
      type: 'Monitors',
      specification: 'Specification 1',
      guarantee: {
        start: new Date('2017-06-29 12:09:33'),
        end: new Date('2017-06-29 12:09:33'),
      },
      price: [
        { value: 100, symbol: Currency.USD, isDefault: 0 },
        { value: 2600, symbol: Currency.UAH, isDefault: 1 },
      ],
      date: new Date('2017-06-29 12:09:33'),
    },
    {
      id: 2,
      serialNumber: 1234,
      isNew: 1,
      photo: 'pathToFile.jpg',
      title: 'Product 1',
      type: 'Monitors',
      specification: 'Specification 1',
      guarantee: {
        start: new Date('2017-06-29 12:09:33'),
        end: new Date('2017-06-29 12:09:33'),
      },
      price: [
        { value: 100, symbol: Currency.USD, isDefault: 0 },
        { value: 2600, symbol: Currency.UAH, isDefault: 1 },
      ],
      date: new Date('2017-06-29 12:09:33'),
    },
  ],
}

const productSlice = createSlice({
  name: 'product',
  initialState: productsInitialState,
  reducers: {
    updateProductAction: (
      state: ProductState,
      { payload }: PayloadAction<Array<Product> | null>,
    ) => {
      state.value = payload
        ? [...state.value, ...payload]
        : productsInitialState.value
    },
  },
})

export const { updateProductAction } = productSlice.actions
export default productSlice
