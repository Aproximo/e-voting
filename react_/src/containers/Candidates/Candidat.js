import React, {Component} from 'react';
import axios from 'axios';

class Candidat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            candidat: {title : "loading"}
        };
        this.componentWillMount = this.componentWillMount.bind(this);
    }

    componentWillMount() {
        axios.get(`http://127.0.0.1:8000/api/candidat/${this.props.match.params.id}`)
            .then(({ data }) => {
                    this.setState({
                        candidat: JSON.parse(data),
                        item: ''
                    });
                    console.log(this.state.candidat);
                }
            )
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        let item = this.state.item;
        return (
            <div>
                <ul>
                    <li>{this.state.candidat.name}</li>
                    <li>{this.state.candidat.photo}</li>
                    <li>{this.state.candidat.consigment}</li>
                    <li>{this.state.candidat.electioneering}</li>
                </ul>
                <span>Candidat</span>
            </div>
        )
    }
}

export default Candidat