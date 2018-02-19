import React from 'react'
import {Link} from 'react-router-dom'
import candidates from '../../json/candidates'

const Candidates = ({children}) => {
    if (!candidates) {
        return (
            <div>Sorry now we have problems with this page</div>
        )
    } else {
        // console.log(candidates);
        return (

            <div>
                <nav>
                    <ul>
                        {candidates.map((tab) =>
                            <li key={tab.id}>
                                <Link to={`/candidates/${tab.id}`}>{tab.name}</Link>
                            </li>
                        )}
                    </ul>
                </nav>
                <main>
                    {children}
                </main>
            </div>
        )
    }
};

export default Candidates