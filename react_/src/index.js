import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
// import App from './App';
import {BrowserRouter, Route} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import Main from "./components/Main";
import App from "./components/App";

ReactDOM.render((
    <BrowserRouter>
        <div>
            <Route path="/" component={Main}/>
            <Route path="/form" component={App}/>
        </div>
    </BrowserRouter>),
    document.getElementById('root')
);
registerServiceWorker();
