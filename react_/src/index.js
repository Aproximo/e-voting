import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import {BrowserRouter, Route} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import App from "./App";
import Form from "./containers/Form";
import Articles from "./containers/Articles";
import Registration from "./containers/Login/Registration";
// import Login from "./containers/App/Login";

ReactDOM.render((
    <BrowserRouter>
        <div>
            <Route path="/" component={App}/>
            <Route path="/form" component={Form}/>
            <Route path="/articles" component={Articles}/>
            <Route path="/registration" component={Registration}/>
        </div>
    </BrowserRouter>),
    document.getElementById('root')
);
registerServiceWorker();
