import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux";

import { store } from "./redux/store";

import AppContainer from "./containers/AppContainer";

import "./i18n";
import './fonts/roboto/stylesheet.css';
import './index.css';



ReactDOM.render(
    <Router>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </Router>,
    document.getElementById('root')
);
