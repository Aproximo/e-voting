import React from 'react'
import { Switch, Route } from 'react-router-dom'
import App from './App'
import Form from '../containers/Form'
import Articles from '../containers/Articles'
import Registration from '../containers/Login/Registration'

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={App}/>
            <Route path='/form' component={Form}/>
            <Route path='/registration' component={Registration}/>
            <Route path='/articles' component={Articles}/>
        </Switch>
    </main>
);

export default Main