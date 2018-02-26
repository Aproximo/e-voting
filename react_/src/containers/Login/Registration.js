import React, {Component} from 'react';
import {
    Route,
    Redirect,
    withRouter
} from "react-router-dom";
import {FormErrors} from './FormErrors';
import axios from "axios/index";


// export const AuthButton = withRouter(
//     ({ history }) =>
//         this.isAuthenticated ? (
//             <p>
//                 Welcome!{" "}
//                 <button
//                     onClick={() => {
//                         this.signOut(() => history.push("/"));
//                     }}
//                 >
//                     Sign out
//                 </button>
//             </p>
//         ) : (
//             <p>You are not logged in.</p>
//         )
// );
//
// export const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route
//         {...rest}
//         render={props =>
//             this.isAuthenticated ? (
//                 <Component {...props} />
//             ) : (
//                 <Redirect
//                     to={{
//                         pathname: "/registration",
//                         state: { from: props.location }
//                     }}
//                 />
//             )
//         }
//     />
// );

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            formErrors: {email: '', password: ''},
            emailValid: false,
            passwordValid: false,
            formValid: false,
            isAuthenticated: false,
            redirectToReferrer: false
        };



    this.handleSubmitRegistration = this.handleSubmitRegistration.bind(this);
    this.handleChangeRegistrationStatus = this.handleChangeRegistrationStatus.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
    this.validateField = this.validateField.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.errorClass = this.errorClass.bind(this);
    this.authenticate = this.authenticate.bind(this);
    this.signOut = this.signOut.bind(this);
    }



    authenticate = (e) => {
        this.setState({isAuthenticated: true, redirectToReferrer: true});
    };

    signOut = (e) => {
        this.setState({isAuthenticated: false});
    };

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
            () => { this.validateField(name, value) });
    };

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch(fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '': ' is too short';
                break;
            default:
                break;
        }
        this.setState({formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid
        },
            this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid});
    }

    errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
    }

    handleChangeRegistrationStatus(e) {
        this.setState({
            status: 200
        })
    }

    handleSubmitRegistration(e) {
        e.preventDefault();
        let registration_array = {
            email: this.state.email,
            password: this.state.password,
        };


//         const email = this.state.email;
//         const pass = this.state.password;

//         window.localStorage.setItem('email', this.state.email);
//         window.localStorage.setItem('pass',  this.state.password);

//         if (email === 'a.myronow@gmail.com' && pass === '15975328') {//Узнать как хранить в локалсторадже неизмененные данные
//             console.log('ok');
//             console.log( this.context.router);
//             console.log( this.props);
//             this.context.history.push('/admin')
//         } else {
//             console.log('no');
//             console.log( this.props);
//             // this.context.history.push('/')
//         }

        this.authenticate();


        registration_array = JSON.stringify(registration_array);
        axios.post('http://127.0.0.1:8000/api/registration', registration_array )

        .then((response) => {
            if(response.status === 201) {
                this.handleChangeRegistrationStatus() ;
                console.log('response',response);
            }
            console.log('response',response);
        })
        .catch(function (error) {
            console.log("error", error);
        });
    }

    render() {
        // console.log(this.state.isAuthenticated, this.props.location.state );
        // const { from } = this.props.location.state || { from: { pathname: "/" } };
        //
        // if (this.redirectToReferrer) {
        //     return <Redirect to={from} />;
        // }

        return (
            <form onSubmit={this.handleSubmitRegistration} className="RegistrationForm">
                <h2>Sign up</h2>
                <div className="panel panel-default">
                    <FormErrors formErrors={this.state.formErrors} />
                </div>
                <div className={`RegistrationForm_input ${this.errorClass(this.state.formErrors.email)}`}>
                    <label htmlFor="email">Email address</label>
                    <input type="email" required name="email"
                           placeholder="Email"
                           value={this.state.email}
                           onChange={this.handleUserInput}  />
                </div>
                <div className={`RegistrationForm_input ${this.errorClass(this.state.formErrors.password)}`}>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password"
                           placeholder="Password"
                           value={this.state.password}
                           onChange={this.handleUserInput}  />
                </div>
                <button type="submit" disabled={!this.state.formValid}>Sign up</button>
                {/*<AuthButton/>*/}
            </form>
        )
    }
}

export default Registration;
