import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

class Candidates extends Component {
    constructor(props) {
        super(props);
        this.state = {
            candidats: {title : "loading"},

        };

        this.componentWillMount = this.componentWillMount.bind(this);
        this.toDo = this.toDo.bind(this);
    }

    componentWillMount() {
        axios.get('http://127.0.0.1:8000/api/candidate')
            .then(({ data }) => {
                    this.setState({
                        candidats: JSON.parse(data),
                        item: ''
                    });
                    console.log(this.state);
                    this.toDo();
                }
            )
            .catch(function (error) {
                console.log(error);
            });


    }
    toDo(){
        let item = this.state.candidats.map((item, key) => {
            return (
                <li id={key}>
                    <Link to={`/candidate/${item.id}`}>{item.name}</Link>

                </li>
            )
        });
        this.setState({
            item: item,
            candidat_id: item.id
        })
    }

    render() {
        console.log(this.props)
        let item = this.state.item;
        return (
            <div>
                <ul>
                    {item}
                </ul>
                <span>Candidates</span>
            </div>
        )
    }

};

export default Candidates