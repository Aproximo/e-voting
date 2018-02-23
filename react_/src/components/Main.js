import React from "react";
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import Voting from "../containers/Voting/Voting";
import Registration, {PrivateRoute} from "../containers/Login/Registration";
import Home from '../components/Home';
import Routes from "../containers/Candidates/Routes";
import Personal from '../containers/Personal/Personal';
import Articles from '../containers/Articles/Articles';
import '../style/components/Main.css';

//
// class Main extends React.Component {
//
//     render() {
//         return (
//             <main className='main-div'>
//                 <Switch>
//                     <Route exact path='/' component={Home}/>
//                     <PrivateRoute path='/form' component={Form}/>
//                     <PrivateRoute path='/registration' component={Registration}/>
//                     {/*<Route path='/articles' component={Articles}/>*/}
//                     <Route path='/voting' component={Voting}/>
//                     <Route path='/presidential-elections' component={Routes}/>
//                     {/*<Route path='/admin' component={Admin}/>*/}
//                     <Route path='/personal' component={Personal}/>
//                 </Switch>
//             </main>
//         )
//     }
// }
//
//
// export default Main

const Main = () => (
    <Router>
        <div className='main-div'>
            <Route exact path="/" component={Home} />
            <PrivateRoute path='/personal' component={Personal}/>
            <Route path="/registration" component={Registration} />
            <Route path="/articles" component={Articles}/>
            <PrivateRoute path="/voting" component={Voting} />
            <PrivateRoute path='/presidential-elections' component={Routes}/>
        </div>
    </Router>
);


export default Main;

