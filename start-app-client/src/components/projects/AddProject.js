import React, { Component } from 'react';
import axios from 'axios';

class AddProject extends Component {

    state = {
        title: "",
        description: ""
    }
    
    handleChange = (event)=>{
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleFormSubmit = (event)=>{
        event.preventDefault();
        const newProject = {
            title: this.state.title,
            description: this.state.description
        };
        axios.post('http://localhost:5000/api/projects', newProject, {withCredentials:true})
        .then(()=>{
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