import React from "react";
import {
    Route,
    Redirect,
} from "react-router-dom";
import Registration from "./Registration";
import Form from "./Form";


export const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signout(cb) {
        this.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};

// export const AuthButton = withRouter(
//     ({ history }) =>
//         fakeAuth.isAuthenticated ? (
//             <p>
//                 Welcome!{" "}
//                 <button
//                     onClick={() => {
//                         fakeAuth.signout(() => history.push("/"));
//                     }}
//                 >
//                     Sign out
//                 </button>
//             </p>
//         ) : (
//             <p>You are not logged in.</p>
//         )
// );

class Login extends React.Component {
    state = {
        redirectToReferrer: false
    };

    login = () => {
        fakeAuth.authenticate(() => {
            this.setState({ redirectToReferrer: true });
        });
    };

    render() {
        const { from } = this.props.location.state || { from: { pathname: "/" } };
        const { redirectToReferrer } = this.state;

        if (redirectToReferrer) {
            return <Redirect to={from} />;
        }

        return (
            <div>
                <p>You must log in to view the page at {from.pathname}</p>
                <button onClick={this.login}>Log in</button>
            </div>
        );
    }
}

export default Login;

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            fakeAuth.isAuthenticated ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: props.location }
                    }}
                />
            )
        }
    />
);

c