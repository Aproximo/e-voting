import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
import '../../style/Form.css';
import axios from 'axios'
// import humans from "../../json/humans";
import Login from "../../containers/App/Login";
import Applicants from "../../containers/App/Applicants";
// let ok;

    class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            passport_id: '',
            name: '',
            surname: '',
            id_code: '',
            passport_pass: '',
            status: ''
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSurnameChange = this.handleSurnameChange.bind(this);
        this.handlePassIdChange = this.handlePassIdChange.bind(this);
        this.handlePassportPassChange = this.handlePassportPassChange.bind(this);
        this.handleIdCodeChange = this.handleIdCodeChange.bind(this);
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

    handleIdCodeChange(e) {
        this.setState({
            id_code: e.target.value
        })
    }

    handlePassportPassChange(e) {
        this.setState({
            passport_pass: e.target.value
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
            passport_id: this.state.passport_id,
            name: this.state.name,
            surname: this.state.surname,
            id_code: this.state.id_code,
            passport_pass: this.state.passport_pass
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
                        <div>
                            passport_id: 123456789,
                            passport_pass: 7531,
                            name: 'John',
                            surname: 'Doe',
                            id_code: 1597532580
                        </div>
                    </div>
                </form>
            )

        if (this.state.status == 200){
                console.log(this.state.status)
            return (
                <Applicants/>
            );
        }else{
            console.log(this.state.status)
            return (
                <Login/>
            );
    }}

}

export default Form;