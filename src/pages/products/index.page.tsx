import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Container,
  Typography,
} from '@mui/material'
import { ProductCard, ProductProps } from '../../components/ProductCard'
import { useState } from 'react'
import { cream } from '../../constants'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { productTypes } from '../../types'
import { useTranslation } from 'react-i18next'

export const Page = () => {
  const { t } = useTranslation()
  const [type, setType] = useState<productTypes>(productTypes.All)
  const products = useSelector((state: RootState) => state.product.value)
  const handleChange = ({ target: { value } }: SelectChangeEvent<string>) => {
    setType(productTypes[value as keyof typeof productTypes])
  }
  return (
    <Container sx={{ bgcolor: `${cream}`, pt: '60px' }}>
      <Typography variant="h3" textTransform="capitalize">
        {t('products')}
      </Typography>
      <FormControl margin="normal">
        <InputLabel id="types">Types</InputLabel>
        <Select
          labelId="types"
          value={type}
          onChange={handleChange}
          variant="filled"
        >
          {Object.entries(productTypes).map((type) => (
            <MenuItem key={type[0]} value={type[0]}>
              {type[1]}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {products.map((product) =>
        type === productTypes.All || type === product.type ? (
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
