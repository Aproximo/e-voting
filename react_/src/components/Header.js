import React from 'react';
import {Link} from 'react-router-dom';
import '../style/components/Header.css';

const Header = () => (
    <div>
        <header className="main-header">
            <ul className="main-nav-ul">
                <Link to="/"><li className="main-header-icon">UEV</li></Link>
            </ul>
        </header>
        <nav className="main-nav">
            <ul className="main-nav-ul">
                <Link to="/"><li className="main-nav-order">Home</li></Link>
                <Link to="/articles"><li className="main-nav-order">Новости</li></Link>
                <Link to="/personal"><li className="main-nav-order">Личный кабинет</li></Link>
                <Link to="/voting"><li className="main-nav-order">Электронное голосование</li></Link>
                <Link to="/login"><li className="main-nav-order-right">LogIn</li></Link>
                <Link to="/signup"><li className="main-nav-order-right">SignUp</li></Link>

            </ul>
        </nav>
    </div>
);

export default Header;