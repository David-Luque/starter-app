import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import AuthService from '../Services/auth-service';

class Login extends Component {

    state = {
        username: "",
        password: ""
    };

    service = new AuthService();

    handleFormSubmit = (event)=>{
        event.preventDefault();
        const { username, password } = this.state;
        this.service.login(username, password)
        .then(response => {
            this.setState({
                username: "",
                password: ""
            });
            this.props.getUser(response);
            this.props.history.push("/projects");
        })
        .catch(err => console.log(err))
    };

    handleChange = (event)=>{
        const { name, value } = event.target;
        this.setState({ [name]: value});
    };

    render(){
        return(
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <label>Username: </label>
                    <input type="text" name="username" value={this.state.username} onChange={(e)=>{this.handleChange(e)}} />
                    <label>Password: </label>
                    <input type="password" name="password" value={this.state.password} onChange={(e)=>{this.handleChange(e)}} />
                    <button>Log in</button>
                </form>
                <p>
                    Don't have account?
                    <Link to={"/signup"}>Sign Up</Link>
                </p>
            </div>
        );
    };
};

export default withRouter(Login);