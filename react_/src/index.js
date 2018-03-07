import React from 'react';
import {render} from 'react-dom';
import './style/index.css';
import {BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import App from "./components/App";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


render((
    <MuiThemeProvider>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    </MuiThemeProvider>),
    document.getElementById('root')
);
registerServiceWorker();
