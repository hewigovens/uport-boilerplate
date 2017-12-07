import "../css/popup.css";
import React from "react";
import { render } from "react-dom";

import storess, { configureStore, history } from 'store/configuration';
console.log(storess)
const store = configureStore();

const rootElement = document.getElementById('root')
ReactDOM.render(<AppContainer><Root store={store} history={history} /></AppContainer>, document.getElementById('root'));

// if (module.hot) { module.hot.accept('interface', function() {
//     const NextRoot = require('interface'); // eslint-disable-line global-require
//     ReactDOM.render(<AppContainer><NextRoot store={store} history={history} /></AppContainer>,rootElement);
// })}
/* ---------------------------- Service Worker ------------------------------ */
