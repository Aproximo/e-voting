import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../style/Form.css';
import axios from 'axios'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            passport_id: '',
            name: '',
            surname: '',
            id_code: '',
            passport_pass: ''
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSurnameChange = this.handleSurnameChange.bind(this);
        this.handlePassIdChange = this.handlePassIdChange.bind(this);
        this.handlePassportPassChange = this.handlePassportPassChange.bind(this);
        this.handleIdCodeChange = this.handleIdCodeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handlePassIdChange(e) {
        this.setState({
            passport_id: e.target.value
        })
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    handleSurnameChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    handleIdCodeChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    handlePassportPassChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    handleSubmit(e) {
       e.preventDefault();
       console.log(this.state)

        // axios.post('http://127.0.0.1:8000/api/form', {
        //     firstName: 'Fred',
        //     lastName: 'Flintstone'
        // })
        //     .then(function (response) {
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         console.log("error", error);
        //     });


        axios.post('http://127.0.0.1:8000/api/form', {
            firstName: 'Fred',
            lastName: 'Flintstone'
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    }



    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form-field">
                <div className="form">
                    <label>
                        <span>Password ID</span>
                        <input type="text" value={this.state.passport_id} onChange={this.handlePassIdChange} className="form-field-input"/>
                    </label>
                    <label>
                        <span>Name</span>
                        <input type="text" value={this.state.name} onChange={this.handleNameChange} className="form-field-input"/>
                    </label>
                    <label>
                        <span>Surname</span>
                        <input type="text" value={this.state.surname} onChange={this.handleSurnameChange} className="form-field-input"/>
                    </label>
                    <label>
                        <span>Identification code</span>
                        <input type="text" value={this.state.id_code} onChange={this.handleIdCodeChange} className="form-field-input"/>
                    </label>
                    <label>
                        <span>Passport password</span>
                        <input type="text" value={this.state.passport_pass} onChange={this.handlePassportPassChange} className="form-field-input"/>
                    </label>

                    <button>Save</button>

                </div>
            </form>
        )
    }
}

export default Form;