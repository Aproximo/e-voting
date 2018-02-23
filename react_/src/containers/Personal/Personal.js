import React from 'react';
import {Link} from 'react-router-dom';
import '../../style/containers/Personal.css';

const Personal = () => (
    <div className="personal">
        <nav className="personal-nav">
            <ul>
                <Link to="/payment"><li className="personal-nav-order">Оплата коммунальных услуг</li></Link>
                <Link to="/petitions"><li className="personal-nav-order">Петиции</li></Link>
                <Link to="/complaints"><li className="personal-nav-order">Жалобы</li></Link>
                <Link to="/e-queue"><li className="personal-nav-order">Электронная очередь</li></Link>
            </ul>
        </nav>
    </div>
);

export default Personal;