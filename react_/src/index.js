import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import {BrowserRouter, Route} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import App from "./components/App";
import Form from "./containers/App/Form";
import Articles from "./containers/Main/Articles";
// import Login from "./containers/App/Login";

ReactDOM.render((
    <BrowserRouter>
        <div>
            <Route path="/" component={App}/>
            <Route path="/form" component={Form}/>
            <Route path="/articles" component={Articles}/>
        </div>
    </BrowserRouter>),
    document.getElementById('root')
);
registerServiceWorker();
