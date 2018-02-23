import React from 'react'
import { Link } from 'react-router-dom'
import CandidatAPI from '../../api/candidates_api'

const Candidat = (props) => {
    const candidates = CandidatAPI.get(
        parseInt(props.match.params.number, 10)
    );
    // console.log(candidates);

    if (!candidates) {
        return <div>Sorry, but the candidat was not found</div>
    }
    return (
        <div>
            <Link to='/presidential-elections'>Back</Link>
            <h1>{candidates.name}</h1>
            <img src={candidates.photo} alt="No photos"/>
            <h2>Партия: {candidates.consigment}</h2>
            <h3>Предвыблорная програма кандидата</h3>
            <p>{candidates.electioneering}</p>

        </div>
    )
}

export default Candidat