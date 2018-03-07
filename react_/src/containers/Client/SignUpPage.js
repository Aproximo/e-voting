/**
 * Created by Elena on 07.03.2018.
 */

import React, {Component} from 'react';
import axios from "axios/index";
import SignUpForm from '../Client/SignUpForm';


class SignUpPage extends Component {

    /**
     * Class constructor.
     */
    constructor(props) {
        super(props);

        // set the initial component state
        this.state = {
            errors: {},
            user: {
                email: '',
                name: '',
                password: '',
                isAuthenticated: false
            }
        };

        this.handleSubmitRegistration = this.handleSubmitRegistration.bind(this);
        this.changeUser = this.changeUser.bind(this);
        this.authenticate = this.authenticate.bind(this);
        this.handleChangeRegistrationStatus = this.handleChangeRegistrationStatus.bind(this);
        this.registrationAlert = this.registrationAlert.bind(this);
    }

    /**
     * Change the user object.
     *
     * @param {object} event - the JavaScript event object
     */
    changeUser(event) {
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;

        this.setState({
            user
        });
    }

    authenticate = (e) => {
        this.setState({isAuthenticated: true});
    };

    handleChangeRegistrationStatus(e) {
        this.setState({
            status: 200
        })
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('name', this.state.name)
    }

    registrationAlert = () => {
        alert('Вы успешно зарегестрированы');
    };

    /**
     * Process the form.
     *
     * @param {object} event - the JavaScript event object
     */
    handleSubmitRegistration(e) {
        // prevent default action. in this case, action is the form submission event
        e.preventDefault();

        // console.log('name:', this.state.user.name);
        // console.log('email:', this.state.user.email);
        // console.log('password:', this.state.user.password);


        let registration_array = {
            name: this.state.user.name,
            email: this.state.user.email,
            password: this.state.user.password,
        };
        this.setState({
            name: this.state.user.name,
            email: this.state.user.email,
            password: this.state.user.password
        });

        this.authenticate();


        registration_array = JSON.stringify(registration_array);
        axios.post('http://127.0.0.1:8000/api/registration', registration_array)

            .then((response) => {
                if (response.status === 201) {
                    this.handleChangeRegistrationStatus();

                    console.log('response', response);
                }
                console.log('response', response);
            })
            .catch(function (error) {
                console.log("error", error);
            });
    }

    render() {
        return (
            <SignUpForm
                onSubmit={this.handleSubmitRegistration}
                onChange={this.changeUser}
                errors={this.state.errors}
                user={this.state.user}
            />
        );
    }

}

export default SignUpPage;
