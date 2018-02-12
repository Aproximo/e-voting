import React, {Component} from 'react';
import Applicants from '../containers/App/Applicants';
import applicants from "../json/applicants";
import humans from '../json/humans';
import Form from '../containers/App/Form';
import Check from "../containers/App/Check";

class App extends Component {
  render () {
    return (
        <div>
            <Applicants items={applicants}/>
            <Form/>
            <Check items={humans}/>
        </div>

    )
  }
}

export default App;