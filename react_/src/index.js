import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import {BrowserRouter, Route} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import Main from "./components/Main";
import App from "./components/App";
import Login from "./containers/App/Login";

ReactDOM.render((
    <BrowserRouter>
        <div>
            <Route path="/" component={Main}/>
            <Route path="/form" component={App}/>
            <Route path="/login" component={Login}/>
        </div>
    </BrowserRouter>),
    document.getElementById('root')
);
registerServiceWorker();
