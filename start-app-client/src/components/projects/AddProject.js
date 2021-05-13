import React, { Component } from 'react';
import ProjectService from '../Services/projects-service';

class AddProject extends Component {

    state = {
        title: "",
        description: ""
    }

    service = new ProjectService();
    
    handleChange = (event)=>{
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleFormSubmit = (event)=>{
        event.preventDefault();
        const { title, description } = this.state;
        this.service.addProject(title, description)
        .then(response =>{
            console.log(response)
            this.props.getData();
            this.setState({
                title: "",
                description: ""
            });
        })
        .catch(err => {console.log(err)})

    };

    render(){
        return(
            <div className="addProject" >
                <h2>Create project</h2>
                <form onSubmit={this.handleFormSubmit}>
                    <label>Title: </label>
                    <input type="text" name="title" value={this.state.title} onChange={(e)=>{this.handleChange(e)}} />
                    <label>Description: </label>
                    <input type="text" name="description" value={this.state.description} onChange={(e)=>{this.handleChange(e)}} />
                    <button>Create</button>
                </form>
            </div>
        ); 
    };
    
    
};

export default AddProject;