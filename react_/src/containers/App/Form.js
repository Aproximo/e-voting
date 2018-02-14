import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
import '../../style/Form.css';
import axios from 'axios'
// import humans from "../../json/humans";
// import Login from "../../containers/App/Login";
import Applicants from "../../containers/App/Applicants";
// let ok;

    class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            passport_id: '',
            name: '',
            surname: '',
            itn: '',
            passport_pin: '',
            date_of_birthday: '',
            valid_until: '',
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
        // axios({
        //     method: 'post',
        //     url: 'http://127.0.0.1:8000/api/humans',
        //     data: {
        //         passport_id: this.state.passport_id,
        //         name: this.state.name,
        //         surname: this.state.surname,
        //         id_code: this.state.id_code,
        //         passport_pass: this.state.passport_pass
        //     })
        //         .then(function (response) {
        //           console.log(response);
        //         })
        //          .catch(function (error) {
        //             console.log(error);
        //          })



        axios.post('http://127.0.0.1:8000/api/humans', {
            itn: this.state.itn,
            passport_id: this.state.passport_id,
            passport_pin: this.state.passport_pin,
            name: this.state.name,
            surname: this.state.surname,
            date_of_birthday: this.date_of_birthday,
            valid_until: this.state.valid_until,
        })

            // .then(function (response) {
            //     console.log(response);
            // })
            // .catch(function (error) {
            //     console.log(error);
            //     // const {status, data} = error.response;
            //     // let text;
            // });

            .then(function (response) {
                if(response.status === 200) {
                        this.handleChangeStatus() ;
                        // console.log(ok);
                }
                console.log('response',response);
            })


            .catch(function (error) {
                console.log(error);
                // const {status, data} = error.response;
                // let text;
            });

            // switch (status) {
            //     case 500:
            //         text = 'Внутренняя ошибка сервера. Обратитесь к администратору.';
            //         break;
            //     case 401:
            //         text = 'Ошибка авторизации. Пожалуйста войдите в систему.';
            //         break;
            //     default:
            //         text = data.error_description || data.message;
            //         break;
            // }


    }



    render() {

        console.log(this.state);



        if (this.state.status === 200){
                console.log(this.state.status)
            return (
                <Applicants/>
            );
        }else{
            console.log(this.state.status)
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
                            * itn ‎9999999999
                            * passport_id ‎123456789
                            * passport_pin 1111
                            * name Jon
                            * surname Doe
                            * date_of_birthday ‎2018-02-14
                            * valid_until ‎2018-02-14
                        </div>
                    </div>
                </form>
            );
    }}

}

export default Form;