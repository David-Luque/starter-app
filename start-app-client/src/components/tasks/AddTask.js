import React, { Component } from 'react';
import axios from 'axios';

class addTask extends Component {
    state = {
        title: "",
        description: "",
        isShowingForm: false
    };

    toggleShowForm = ()=>{
        this.setState({ isShowingForm: !this.state.isShowingForm });
    };

    handleChange = (event)=>{
        const { name, value } = event.target
        this.setState({ [name]: value });
    };

    handleFormSubmit=(event)=>{
        event.preventDefault();
        const { title, description } = this.state;
        const projectId = this.props.theProject._id
        const task = {
            title,
            description,
            projectId
        };
        axios.post("http://localhost:5000/api/tasks", task)
        .then(()=>{
            this.props.getProjectInfo();
            this.setState({
                title: "",
                description: ""
            });
        })
        .catch(err => {console.log(err)})
    };

    showAddTaskForm = ()=>{
        return(
            <div>
                <h3>Add task</h3>
                <form onSubmit={this.handleFormSubmit}>
                    <label>Title: </label>
                    <input type="text" name="title" value={this.state.title} onChange={(e)=>{this.handleChange(e)}} />
                    <label>Description: </label>
                    <textarea name="description" value={this.state.description} onChange={(e)=>{this.handleChange(e)}} />
                    <button>Confirm</button>
                </form> 
            </div>
        );
    };

    render(){
        return(
            <div className="addTask">
                <hr />
                <button onClick={this.toggleShowForm}>
                    {this.state.isShowingForm ? "Cancel" : "Add task"}
                </button>
                {this.state.isShowingForm && this.showAddTaskForm()}
            </div>
        );
    };
};

export default addTask;