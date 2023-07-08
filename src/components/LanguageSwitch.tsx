import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { useTranslation } from 'react-i18next'

export const LanguageSwitch = () => {
  const { i18n } = useTranslation()

  const handleLanguage = ({ target: { value } }: SelectChangeEvent<string>) => {
    i18n.changeLanguage(value)
  }

  const languages = [...i18n.languages]

  return (
    <FormControl variant="standard" fullWidth sx={{ mr: '20px' }}>
      <Select
        labelId="lang"
        id="lang-select"
        value={i18n.language}
        label="Age"
        onChange={handleLanguage}
      >
        {languages.map((language) => (
          <MenuItem key={language} value={language}>
            {language}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
