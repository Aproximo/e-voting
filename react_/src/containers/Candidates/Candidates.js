import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import candidates from '../../json/candidates'

class Candidates extends Component {

    constructor(props) {
        super(props);
        this.state = {
            choice: ''
        };
        this.Choice = this.Choice.bind(this);


    }



    Choice(e) {
        this.setState({
            choice: +1
        })
    }

    render() {
        return (
            <div>
                {/*<nav>*/}
                    {/*<ul>*/}
                        {/*{candidates.map((tab) =>*/}
                            {/*<li key={tab.id}>*/}
                                {/*<Link to={`/presidential-elections/${tab.id}`}>{tab.name}</Link>*/}
                                {/*<button onClick={this.Choice}></button>*/}
                            {/*</li>*/}
                        {/*)}*/}
                    {/*</ul>*/}

                {/*</nav>*/}
                {/*<main>*/}
                    {/*{children}*/}
                {/*</main>*/}
                Hello
            </div>
        )
    }

};

export default Candidates