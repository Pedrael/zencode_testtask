import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Container,
} from '@mui/material'
import { ProductCard, ProductProps } from '../../components/ProductCard'
import { useState } from 'react'
import { cream } from '../../constants'

enum types {
  Monitors = 'Monitors',
  Keyboards = 'Keyboards',
  All = 'All',
}

const products = [
  {
    id: 1,
    serialNumber: 1234,
    isNew: 1,
    photo: 'pathToFile.jpg',
    title: 'Monitor 1',
    type: types.Monitors,
    specification: 'Specification 1',
    guarantee: {
      start: new Date('2017-06-29 12:09:33'),
      end: new Date('2017-06-29 12:09:33'),
    },
    price: [
      { value: 100, symbol: 'USD', isDefault: 0 },
      { value: 2600, symbol: 'UAH', isDefault: 1 },
    ],
    order: 1,
    date: new Date('2017-06-29 12:09:33'),
  },
  {
    id: 2,
    serialNumber: 1234,
    isNew: 1,
    photo: 'pathToFile.jpg',
    title: 'Keyboard 1',
    type: types.Keyboards,
    specification: 'Specification 1',
    guarantee: {
      start: new Date('2017-06-29 12:09:33'),
      end: new Date('2017-06-29 12:09:33'),
    },
    price: [
      { value: 100, symbol: 'USD', isDefault: 0 },
      { value: 2600, symbol: 'UAH', isDefault: 1 },
    ],
    order: 2,
    date: new Date('2017-06-29 12:09:33'),
  },
  {
    id: 3,
    serialNumber: 1234,
    isNew: 0,
    photo: 'pathToFile.jpg',
    title: 'Monitor 2',
    type: types.Monitors,
    specification: 'Specification 1',
    guarantee: {
      start: new Date('2017-06-29 12:09:33'),
      end: new Date('2017-06-29 12:09:33'),
    },
    price: [
      { value: 100, symbol: 'USD', isDefault: 0 },
      { value: 2600, symbol: 'UAH', isDefault: 1 },
    ],
    order: 1,
    date: new Date('2017-06-29 12:09:33'),
  },
]

export const Page = () => {
  const [type, setType] = useState<types>(types.All)
  const handleChange = ({ target: { value } }: SelectChangeEvent<string>) => {
    setType(types[value as keyof typeof types])
  }
  return (
    <Container sx={{ bgcolor: `${cream}`, pt: '60px' }}>
      <h1>Index</h1>
      <FormControl margin="normal">
        <InputLabel id="types">Types</InputLabel>
        <Select
          labelId="types"
          value={type}
          onChange={handleChange}
          variant="filled"
        >
          {Object.entries(types).map((type) => (
            <MenuItem key={type[0]} value={type[0]}>
              {type[1]}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {products.map((product) =>
        type === types.All || type === product.type ? (
          <ProductCard
            key={product.id}
            {...(product as ProductProps)}
            mb="20px"
          />
        ) : (
          <></>
        ),
      )}
    </Container>
  )
}
