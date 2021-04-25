import React, { Component } from 'react';
import './App.css';
import { Route, Switch} from 'react-router-dom';

import ProjectList from './components/projects/ProjectList';
import ProjectDetails from './components/projects/ProjectDetails';
import Navbar from './components/navbar/Navbar';


class App extends Component {
  render(){
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/projects" component={ProjectList} />
          <Route exact path="/projects/:id" component={ProjectDetails} />
        </Switch>
      </div>
    );
  };  
}

export default App;