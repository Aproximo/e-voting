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
                        <Link to="/registration"><li className="main-nav-order">Регистрация</li></Link>
                        <Link to="/articles"><li className="main-nav-order">Новости</li></Link>
                        <Link to="/form"><li className="main-nav-order">Личный кабинет</li></Link>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Main;