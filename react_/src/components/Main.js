import React, {Component} from 'react';

import Main from '../containers/Main/Main';
import Articles from '../containers/Main/Articles';


class App extends Component {
  render () {
    return (
        <div>
            <Main />
            {/*<Articles />*/}
        </div>

    )
  }
}

export default App;