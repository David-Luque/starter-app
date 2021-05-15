import React, { Component } from 'react';
import './App.css';
import { Route, Switch} from 'react-router-dom';

import ProjectList from './components/projects/ProjectList';
import ProjectDetails from './components/projects/ProjectDetails';
import Navbar from './components/navbar/Navbar';
import TaskDetails from './components/tasks/TaskDetails';
import Signup from './components/auth/Signup'
import Login from './components/auth/Login';
import AuthService from './components/Services/auth-service';
import ProtectedRoute from './components/auth/protected-route';


// TODO: integrate file uploads in client and server
// TODO: test all routes with new services and redirects

// TODO: deploy

class App extends Component {
  
  state = {
    loggedInUser: null
  };

  service = new AuthService();

  fetchUser = ()=>{
    if(this.state.loggedInUser === null){
      this.service.loggedIn()
      .then(response => {
        this.setState({ loggedInUser: response });
      })
      .catch((err)=>{
        console.log(err);
        this.setState({ loggedInUser: false });
      })
    }
  };

  getTheUser = (userObject)=>{
    this.setState({ loggedInUser:  userObject});
  };


  render(){
    this.fetchUser();
    if(this.state.loggedInUser){
      return (
        <div className="App">
          <Navbar userInSession={this.state.loggedInUser} getUser={this.getTheUser} />
          <Switch>
            <ProtectedRoute user={this.state.loggedInUser} path="/projects" component={ProjectList} />
            <ProtectedRoute user={this.state.loggedInUser} path="/projects/:id" component={ProjectDetails} />
            <ProtectedRoute user={this.state.loggedInUser} path="/projects/:projectId/tasks/:taskId" component={TaskDetails} />
          </Switch>
        </div>
      );
    } else {
      return (
        <div className="App">
          <Navbar userInSession={this.state.loggedInUser} />
          <Switch>
            <Route exact path="/signup" render={()=> <Signup getUser={this.getTheUser} />} />
            <Route exact path = "/login" render={()=> <Login getUser={this.getTheUser} /> } />
            <ProtectedRoute user={this.state.loggedInUser} path="/projects" component={ProjectList} />
            <ProtectedRoute user={this.state.loggedInUser} path="/projects/:id" component={ProjectDetails} />
            <ProtectedRoute user={this.state.loggedInUser} path="/projects/:projectId/tasks/:taskId" component={TaskDetails} />
          </Switch>
        </div>
      );
    };
  };  
}

export default App;