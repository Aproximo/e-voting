import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import Voting from "../containers/Voting/Voting";
import Registration, {PrivateRoute} from "../containers/Login/Registration";
import Home from '../components/Home';
import ArticleRoutes from "../containers/Articles/Routes";
import CandidatRoutes from "../containers/Candidates/Routes";
import Personal from '../containers/Personal/Personal';
import Articles from '../containers/Articles/Articles';
import Articlе from '../containers/Articles/Article';
import Candidat from "../containers/Candidates/Candidat";
import Form from '../containers/Form/Form';
import Admin from '../components/Admin';
import '../style/components/Main.css';


class Main extends React.Component {

    render() {
        return (
            <main className='main-div'>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/form' component={Form}/>
                    <Route path='/registration' component={Registration}/>
                    <Route path='/articles' component={ArticleRoutes}/>
                    <Route path='/article/:id' component={Articlе}/>
                    <Route path='/voting' component={Voting}/>
                    <Route path='/admin' component={Admin}/>
                    <Route path='/personal' component={Personal}/>
                    <Route path='/candidates' component={CandidatRoutes}/>
                    <Route path='/candidate/:id' component={Candidat}/>
                </Switch>
            </main>
        )
    }
}


export default Main


