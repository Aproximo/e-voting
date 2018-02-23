import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Candidates from './Candidates'
import Candidat from './Candidat'

const Routes = () => (
    <Switch>
        <Route exact path='/presidential-elections' component={Candidates}/>
        <Route path='/presidential-elections/:number' component={Candidat}/>
    </Switch>
)


export default Routes