/* --------------------------- Interface Globals ---------------------------- */
import 'theme/stylesheet/app.global.css'
/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'
import { ThemeProvider} from 'styled-components'
import {StripeProvider} from 'react-stripe-elements';
/* ------------------------- Internal Dependencies -------------------------- */
import themeSettings from 'appTheme/settings'
import { ScrollToTop } from 'fusion'

/* ---------------------------- Initialization ------------------------------ */
export default ({ store, history, children }) =>
<Provider store={store}>
  <ConnectedRouter history={history}>
    <ThemeProvider theme={themeSettings}>
      <ScrollToTop>
        {children}
      </ScrollToTop>
    </ThemeProvider>
  </ConnectedRouter>
</Provider>