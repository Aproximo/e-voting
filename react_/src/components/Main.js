import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Form from '../containers/Form/Form'
import Articles from '../containers/Articles/Articles'
import Registration from '../containers/Login/Registration'
import Home from '../components/Home'
import Routes from "../containers/Candidates/Routes";

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/form' component={Form}/>
            <Route path='/registration' component={Registration}/>
            <Route path='/articles' component={Articles}/>
            <Route path='/candidates' component={Routes}/>
        </Switch>
    </main>
);

export default Main