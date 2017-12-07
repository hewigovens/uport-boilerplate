/* --------------------------- Interface Globals ---------------------------- */
import 'appTheme/stylesheet/app.global.css'
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
/* ---------------------------- Initialization ------------------------------ */
injectTapEventPlugin();
export default function Providers({ store, history, children }) {
  return (
    <Provider store={store}>
        <ConnectedRouter history={history}>
          <ThemeProvider theme={themeSettings}>
            <MuiThemeProvider>
              <ScrollToTop>
                {children}
              </ScrollToTop>
            </MuiThemeProvider>
          </ThemeProvider>
        </ConnectedRouter>
    </Provider>
  );
}
