import React from 'react';
import {Link} from 'react-router-dom';
import '../style/components/Header.css';

const Header = () => (
    <div>
        <header className="main-header">
            <Link to="/"><li className="main-header-icon">UEV</li></Link>
        </header>
        <nav className="main-nav">
            <ul>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/registration"><li className="main-nav-order">Регистрация</li></Link></li>
                <li><Link to="/articles"><li className="main-nav-order">Новости</li></Link></li>
                <li><Link to="/candidates"><li className="main-nav-order">Кандидаты</li></Link></li>
                <li><Link to="/form"><li className="main-nav-order">Личный кабинет</li></Link></li>
            </ul>
        </nav>
    </div>
);

export default Header;