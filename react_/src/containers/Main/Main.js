import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../style/Main.css';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }


    render() {
        return (
            <div>
                <header className="main-header">
                    <Link to="/"><li className="main-header-icon">UEV</li></Link>
                </header>
                <nav className="main-nav">
                    <ul>
                        <Link to="/" >Home</Link>
                        <Link to="/"><li className="main-nav-order">Электронное голосование</li></Link>
                        <Link to="/"><li className="main-nav-order">Новости</li></Link>
                        <Link to="/form"><li className="main-nav-order">Личный кабинет</li></Link>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Main;