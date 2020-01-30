import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import App from './App';
import messages from './translation/game/newGame';

const locale = 'ptBr';

ReactDOM.render(
  <Router>
    <IntlProvider locale={locale} messages={messages[locale]}>
      <App />
    </IntlProvider>
  </Router>,
  // eslint-disable-next-line no-undef
  document.getElementById('root'),
);
