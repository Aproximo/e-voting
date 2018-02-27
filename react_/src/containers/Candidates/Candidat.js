import React, {Component} from 'react';
import axios from 'axios';

class Candidat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            candidat: {title : "loading"},
            name: '',
            candidat_id: '',
            choice: ''
        };
        this.componentWillMount = this.componentWillMount.bind(this);
        this.handleChangeStatus = this.handleChangeStatus.bind(this);
        this.handleSubmitChoice = this.handleSubmitChoice.bind(this);
    }

    handleChangeStatus(e) {
        this.setState({
            status: 200
        })
    }

    handleSubmitChoice(e) {
        e.preventDefault();
        let choice_array = {
            name: this.state.name,
            candidat_id: this.state.candidat.id,
        };
        console.log(choice_array);

        choice_array = JSON.stringify(choice_array);
        axios.post('http://127.0.0.1:8000/api/choice', choice_array )

            .then((response) => {
                if(response.status === 201) {
                    this.handleChangeStatus() ;
                    this.setState({
                        choice: 1
                    });
                    console.log('response',response);
                }
                console.log('response',response);
            })
            .catch(function (error) {
                console.log("error", error);
            });
    }


    componentWillMount() {
        localStorage.getItem('name') && this.setState({
            name: localStorage.getItem('name'),
            isLoading: false
        })

        axios.get(`http://127.0.0.1:8000/api/candidate/${this.props.match.params.id}`)
            .then(({ data }) => {
                    this.setState({
                        candidat: JSON.parse(data),
                    });
                    console.log(this.state.candidat.id);
                }
            )
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        console.log(this.state);
        return (
            <div>
                    <p>{this.state.candidat.name}</p><br/>
                <button onClick={this.handleSubmitChoice}>Проголосовать</button>
                    <img src={this.state.candidat.photo} alt="xxx"/><br/>
                    <p>{this.state.candidat.consigment}</p><br/>
                    <p>{this.state.candidat.electioneering}</p><br/>

                <span>Candidat</span>
            </div>
        )
    }
}

export default Candidat