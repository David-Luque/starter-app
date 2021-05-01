import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../auth/auth-service';

class navBar extends Component {
    
    state = {
        loggedInUser: null
    };

    service = new AuthService();

    componentWillReceiveProps(nextProps){
        this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
    };

    logoutUser = ()=>{
        this.service.logout()
        .then(()=>{
            this.setState({ loggedInUser: null });
            this.props.getUser(null);
        })
        .catch()
    };
    
    renderUserWelcome = ()=>{
        return(
            <ul>
                <li>Welcome, {this.state.loggedInUser.username}</li>
                <li> <Link to="/projects">Projects</Link> </li>
                <li> 
                    <Link to="/">
                        <button onClick={this.logoutUser}>Log out</button> 
                    </Link> 
                </li>
            </ul>
        );
    };

    renderSignupLogin = ()=>{
        return(
            <ul>
                <li> <Link to="/signup">Sign up</Link> </li>
                <li> <Link to="/login">Login</Link> </li>
            </ul>
        );
    };

    render(){
        return (
            <nav>
                {this.state.loggedInUser ? this.renderUserWelcome() : this.renderSignupLogin()}
            </nav>
        ); 
    };
};

export default navBar;