import dva from 'dva';
import { browserHistory } from 'dva/router';
import createLoading from 'dva-loading';
import { message, LocaleProvider } from 'antd';
import { addLocaleData, IntlProvider } from 'react-intl';
import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import enMessages from './locales/zh';
import antdEn from 'antd/lib/locale-provider/en_US';
import appLocaleData from 'react-intl/locale-data/en';

window.appLocale = {
  messages: {
      ...enMessages,
  },
  antd: antdEn,
  locale: 'en-US',
  data: appLocaleData,
};

const appLocale = window.appLocale;
addLocaleData(appLocale.data);

const ERROR_MSG_DURATION = 3; // 3 秒

// 1. Initialize
const app = dva({
  history: browserHistory,
  onError(e) {
    message.error(e.message, ERROR_MSG_DURATION);
  },
  initialState: {
    products: [
      {
       name: "dva",
       id: 1
      },
      {
        name: "antd",
        id: 2
      }
    ]
  }
});

// 2. Plugins
app.use(createLoading());

// 3. Model
// Moved to router.js
// app.model(require("./models/count").default);

// 4. Router
app.router(require('./router').default);

// 5. Start
const App = app.start();

ReactDOM.render(
  <LocaleProvider locale={appLocale.antd}>
      <IntlProvider locale={appLocale.locale} messages={appLocale.messages}>
          <App />
      </IntlProvider>
  </LocaleProvider>,
  document.getElementById('root')
);