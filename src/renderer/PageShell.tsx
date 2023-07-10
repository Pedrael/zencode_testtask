import React from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from '../i18n'
import { PageContextProvider } from './usePageContext'
import type { PageContext } from './types'
import { Navmenu } from '../components/Navmenu'
import { CssBaseline, Grid, Stack, ThemeProvider } from '@mui/material'
import '../styles/default.scss'
import { Appmenu } from '../components/Appmenu'
import { theme } from '../theme'
import store from '../store'
import { Provider } from 'react-redux'

export { PageShell }

function PageShell({
  children,
  pageContext,
}: {
  children: React.ReactNode
  pageContext: PageContext
}) {
  return (
    <React.StrictMode>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <CssBaseline />
            <Appmenu />
            <PageContextProvider pageContext={pageContext}>
              <Grid container bgcolor="gray" minHeight="100vh">
                <Grid item xs={3}>
                  <Navmenu />
                </Grid>
                <Grid item xs>
                  <Stack>{children}</Stack>
                </Grid>
              </Grid>
            </PageContextProvider>
          </Provider>
        </ThemeProvider>
      </I18nextProvider>
    </React.StrictMode>
  )
}
