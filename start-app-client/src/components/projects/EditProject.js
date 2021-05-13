import React, { Component } from 'react';
import ProjectService from '../Services/projects-service';

class editProject extends Component {
    state = {
        title: this.props.theProject.title,
        description: this.props.theProject.description
    };

    service = new ProjectService();

    handleChange = (event)=>{
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (event)=>{
        event.preventDefault();
        const { title, description } = this.state;
        const projectId = this.props.theProject._id;
        this.service.editProject(projectId, title, description)
        .then(() => {
            this.props.getProjectInfo();
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