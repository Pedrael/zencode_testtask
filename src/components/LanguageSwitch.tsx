import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export const LanguageSwitch = () => {
  const { i18n } = useTranslation()

  const handleLanguage = ({ target: { value } }: SelectChangeEvent<string>) => {
    i18n.changeLanguage(value)
    setLanguage(value)
    console.log([...languages])
  }

  const languages = [...i18n.languages]

  useEffect(() => {
    console.log([...languages])
  }, [languages])

  const [language, setLanguage] = useState(i18n.language)

  return (
    <FormControl variant="standard" fullWidth sx={{ mr: '20px' }}>
      <Select
        labelId="lang"
        id="lang-select"
        value={language}
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
