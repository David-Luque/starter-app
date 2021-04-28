import React, { Component } from 'react';
import axios from 'axios';

class editProject extends Component {
    state = {
        title: this.props.theProject.title,
        description: this.props.theProject.description
    };


    handleChange = (event)=>{
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (event)=>{
        event.preventDefault();
        const { title, description } = this.state;
        axios.put(`http://localhost:5000/api/projects/${this.props.theProject._id}`, {title, description})
        .then(() => {
            this.props.getProjectInfo();
            //this.props.history.push('/projects'); //==> after submitting the form, if we want redirect to '/projects'
        })
        .catch(err => console.log(err))
    };


    render(){
        return(
            <div>
                <hr />
                <h3>Edit project</h3>
                <form className="editProject" onSubmit={this.handleSubmit} >
                    <label>Title: </label>
                    <input type="text" name="title" value={this.state.title} onChange={(e)=>{this.handleChange(e)}} />
                    <label>Description: </label>
                    <textarea name="description" value={this.state.description} onChange={(e)=>{this.handleChange(e)}} />
                    <button>Confirm</button>
                </form>
            </div>
        );
    };
};

export default editProject;