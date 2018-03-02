import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
import '../style/components/Footer.css';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }


    render() {
        return (
            <div className="footer">
                Development and designed by Aleksandr Myronov and Aproximo<br/>
                <a href="https://github.com/Aproximo/e-voting">Project on GITHub</a><br/>
                All rights reserved &#169;
            </div>
        )
    }
}

export default Footer;