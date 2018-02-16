import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../style/components/Aside.css';

class Aside extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }


    render() {
        return (
            <div className="aside">
                <ul>
                    <Link  to="advertising" >
                        <div ><img src="https://kor.ill.in.ua/m/190x120/2118201.jpg" className="aside-advertising-img" alt="Aside"/></div>
                    </Link>
                    <Link  to="advertising" >
                        <div ><img src="https://kor.ill.in.ua/m/190x120/2118198.jpg" className="aside-advertising-img" alt="Aside"/></div>
                    </Link>
                    <Link to="advertising" >
                        <div><img src="https://kor.ill.in.ua/m/190x120/2118192.jpg" className="aside-advertising-img" alt="Aside"/></div>
                    </Link>
                    <Link  to="advertising" >
                        <div><img src="https://kor.ill.in.ua/m/190x120/2118189.jpg" className="aside-advertising-img" alt="Aside"/></div>
                    </Link>

                </ul>
            </div>
        )
    }
}

export default Aside;