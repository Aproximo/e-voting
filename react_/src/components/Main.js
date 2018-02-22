import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Form from '../containers/Form/Form'
import Articles from '../containers/Articles/Articles'
import Registration from '../containers/Login/Registration'
import Home from '../components/Home'
import Admin from '../components/Admin'
import Routes from "../containers/Candidates/Routes";
import '../style/components/Main.css';

class Main extends React.Component {
    constructor(props) {
        super(props)



    this.checkLogin =  this.checkLogin.bind(this)
    }

    checkLogin(nextState, replace) {
        const login_email = window.localStorage.getItem('email');
        const login_pass = window.localStorage.getItem('pass');
        if (login_email !== 'a.myronow@gmail.com' || login_pass !== '15975328') {
            console.log('Go to Hell');
            replace('/')
        }
    }



    render() {
        return (
            <main className='main-div'>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/form' component={Form} onEnter={this.checkLogin}/>
                    <Route path='/registration' component={Registration}/>
                    <Route path='/articles' component={Articles}/>
                    <Route path='/candidates' component={Routes}/>
                    <Route path='/admin' component={Admin}/>
                </Switch>
            </main>
        )
    }
}


export default Main