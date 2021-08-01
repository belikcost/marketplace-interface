import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import './fonts/roboto/stylesheet.css';
import './index.css';
import "./i18n";
import {store} from "./redux/store";
import App from './App';

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
  document.getElementById('root')
);
