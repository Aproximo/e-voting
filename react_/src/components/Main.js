import React, {Component} from 'react';

import Main from '../containers/Main/Main';
import Article from '../containers/Main/Articles';


class App extends Component {
  render () {
    return (
        <div>
            <Main />
            <Article />
        </div>

    )
  }
}

export default App;