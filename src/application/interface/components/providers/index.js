/* --------------------------- Interface Globals ---------------------------- */
import 'theme/stylesheet/app.global.css'
/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'
import { ThemeProvider} from 'styled-components'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {StripeProvider} from 'react-stripe-elements';
/* ------------------------- Internal Dependencies -------------------------- */
import themeSettings from 'appTheme/settings'
import { ScrollToTop } from 'fusion'

import getMuiTheme from 'material-ui/styles/getMuiTheme';
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#3b3939',
    accent1Color: '#e44d26',
    textColor: '#3b3939',
  },
  appBar: {
    height: 50,
  },
  textField: {
    floatingLabelColor: '#FFF',
    textColor: '#FFF',
    hintColor: '#FFF',
    focusColor: '#FFF',
  }
});

/* ---------------------------- Initialization ------------------------------ */
injectTapEventPlugin();
export default ({ store, history, children }) =>
<Provider store={store}>
  <ConnectedRouter history={history}>
    <ThemeProvider theme={themeSettings}>
      <MuiThemeProvider muiTheme={muiTheme} >
        <ScrollToTop>
          {children}
        </ScrollToTop>
      </MuiThemeProvider>
    </ThemeProvider>
  </ConnectedRouter>
</Provider>