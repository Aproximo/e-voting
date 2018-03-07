import React, {Component} from 'react';
import '../../style/containers/Form.css';
import axios from 'axios'
import {Redirect} from "react-router-dom";


    class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            passport_id: '9999999999',
            name: 'Jon',
            surname: '',
            itn: '123456789',
            passport_pin: 'Doe',
            date_of_birthday: '2018-02-14',
            valid_until: '2018-02-14',
            modalOpen: false,
            status: ''
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSurnameChange = this.handleSurnameChange.bind(this);
        this.handlePassIdChange = this.handlePassIdChange.bind(this);
        this.handlePassportPinChange = this.handlePassportPinChange.bind(this);
        this.handleITNChange = this.handleITNChange.bind(this);
        this.handlePassportDateChange = this.handlePassportDateChange.bind(this);
        this.handleValidChange = this.handleValidChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeStatus = this.handleChangeStatus.bind(this);
        this.authenticAlert = this.authenticAlert.bind(this);
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
            surname: e.target.value
        })
    }

    handleITNChange(e) {
        this.setState({
            itn: e.target.value
        })
    }

    handlePassportPinChange(e) {
        this.setState({
            passport_pin: e.target.value
        })
    }

    handlePassportDateChange(e) {
        this.setState({
            date_of_birthday: e.target.value
        })
    }

    handleValidChange(e) {
        this.setState({
            valid_until: e.target.value
        })
    }

    handleChangeStatus(e) {
            this.setState({
                status: 200
            })
    }


    handleSubmit(e) {
       e.preventDefault();
        let array = {
            itn: this.state.itn,
            passport_id: this.state.passport_id,
            passport_pin: this.state.passport_pin,
            name: this.state.name,
            surname: this.state.surname,
            date_of_birthday: '2018-02-14',
            valid_until: this.state.valid_until,
        };

        array = JSON.stringify(array);

        axios.post('http://127.0.0.1:8000/api/form_authentication', array )
        .then((response) => {
            if(response.status === 200) {
                this.handleChangeStatus() ;
            }
        })
        .catch(function (error) {
            console.log("error", error);
        });
    }

    authenticAlert = () => {
        alert('Вы успешно зарегестрированы');
    };

    render() {
        console.log(this.state);
        if (this.state.status !== 200){
            return (
                <form onSubmit={this.handleSubmit} className="form-field">
                    <div className="form">
                        <label>
                            <span>ITN</span>
                            <input type="text" value={this.state.itn} onChange={this.handleITNChange} className="form-field-input"/>
                        </label>
                        <label>
                            <span>Passport ID</span>
                            <input type="text" value={this.state.passport_id} onChange={this.handlePassIdChange} className="form-field-input"/>
                        </label>
                        <label>
                            <span>Passport pin</span>
                            <input type="text" value={this.state.passport_pin} onChange={this.handlePassportPinChange} className="form-field-input"/>
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
                            <span>Date of birth</span>
                            <input type="text" value={this.state.date_of_birthday} onChange={this.handlePassportDateChange} className="form-field-input"/>
                        </label>
                        <label>
                            <span>Valid until</span>
                            <input type="text" value={this.state.valid_until} onChange={this.handleValidChange} className="form-field-input"/>
                        </label>

                        <button>Save</button>
                        <div>
                            <p>* itn ‎9999999999</p>
                            <p>* passport_id ‎123456789</p>
                            <p>* passport_pin 1111</p>
                            <p>* name Jon</p>
                            <p>* surname Doe</p>
                            <p>* date_of_birthday ‎2018-02-14</p>
                            <p>* valid_until ‎2018-02-14</p>
                        </div>
                    </div>
                </form>
            );
        } else {
            console.log(this.state.status);
            if (this.state.status === 200) {
                {this.authenticAlert()}
                return (
                    <div>
                        <Redirect to="/" push/>
                    </div>
                )
            }
            else {
                console.log (
                    <div>Sorry try change your data in authentic form</div>
                )

            }

        }
    }

}

export default Form;