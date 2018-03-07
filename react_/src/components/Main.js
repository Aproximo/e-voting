import React from "react";
import {
    Route,
    Switch
} from "react-router-dom";
import Voting from "../containers/Voting/Voting";
import Registration from "../containers/Login/Registration";
import Home from '../components/Home';
import ArticleRoutes from "../containers/Articles/Routes";
import CandidatRoutes from "../containers/Candidates/Routes";
import Personal from '../containers/Personal/Personal';
import Articlе from '../containers/Articles/Article';
import Candidat from "../containers/Candidates/Candidat";
import Form from '../containers/Login/Form';
import Admin from '../components/Admin';
import '../style/components/Main.css';
import NotFound from '../components/NotFound';
import PrivateRoute from "../containers/Login/Registration";
import LoginPage from "../containers/Client/LoginPage";
import SignUpPage from "../containers/Client/SignUpPage";


class Main extends React.Component {

    render() {
        return (
            <main className='main-div'>
                <Switch>
                    <Route path='/login' component={LoginPage}/>
                    <Route path='/signup' component={SignUpPage}/>
                    <Route exact path='/' component={Home}/>
                    <Route path='/form' component={Form}/>
                    <Route path='/registration' component={Registration}/>
                    <Route path='/articles' component={ArticleRoutes}/>
                    <Route path='/article/:id' component={Articlе}/>
                    <PrivateRoute path='/voting' component={Voting}/>
                    <Route path='/admin' component={Admin}/>
                    <PrivateRoute path='/personal' component={Personal}/>
                    <Route path='/presidential-elections' component={CandidatRoutes}/>
                    <Route path='/candidate/:id' component={Candidat}/>
                    <Route path='*' component={NotFound}/>
                </Switch>
            </main>
        )
    }
}

export default Main


