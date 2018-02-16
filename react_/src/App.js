import React, {Component} from 'react';
// import Applicants from '../containers/App/Applicants';
// import applicants from "../json/applicants";
// import humans from '../json/humans';
// import Form from '../containers/App/Form';
// import Articles from "../containers/Main/Articles";
// import {BrowserRouter, Route} from 'react-router-dom';
import Main from "./components/Main";
import Footer from "./components/Footer";
import Aside from "./components/Aside";

class App extends Component {
  render (

  ) {
    return (
        <div>
            <Main/>
            <Aside/>
            <Footer/>
        </div>

    )
  }
}

export default App;