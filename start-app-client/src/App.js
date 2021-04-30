import React, { Component } from 'react';
import './App.css';
import { Route, Switch} from 'react-router-dom';

import ProjectList from './components/projects/ProjectList';
import ProjectDetails from './components/projects/ProjectDetails';
import Navbar from './components/navbar/Navbar';
import TaskDetails from './components/tasks/TaskDetails';
import Signup from './components/auth/Signup'


class App extends Component {
  
  state = {
    loggedInUser: null
  };

  getTheUser = (userObject)=>{
    this.setState({ loggedInUser:  userObject});
  };

  render(){
    return (
      <div className="App">
        <Navbar userInSession={this.state.loggedInUser} />
        <Switch>
          <Route exact path="/signup" render={()=>{<Signup getTheUser={this.getTheUser} />}} />
          <Route exact path="/projects" component={ProjectList} />
          <Route exact path="/projects/:id" component={ProjectDetails} />
          <Route exact path="/projects/:projectId/tasks/:taskId" component={TaskDetails} />
        </Switch>
      </div>
    );
  };  
}

export default App;