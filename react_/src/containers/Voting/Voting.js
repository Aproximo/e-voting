import React from 'react';
import {Link} from 'react-router-dom';
import '../../style/containers/Voting.css';

const Voting = () => (
    <div className="voting">
        <nav className="voting-nav">
            <ul>
                <Link to="/voting/local-elections"><li className="voting-nav-order">Местные выборы</li></Link>
                <Link to="/presidential-elections"><li className="voting-nav-order">Выборы призидента</li></Link>
                <Link to="/voting/parliamentary-elections"><li className="voting-nav-order">Парламентские выборы</li></Link>
            </ul>
        </nav>
    </div>
);

export default Voting;