import React, { Component } from 'react';
import TaskService from "../Services/tasks-service";

class editTask extends Component {
    state = {
        title: this.props.taskInfo.title,
        description: this.props.taskInfo.description,
        isCompleted: this.props.taskInfo.isCompleted
    };

    service = new TaskService();

    handleChange = (event)=>{
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleFormSubmit = (event)=>{
        event.preventDefault();
        const { title, description, isCompleted, imageUrl } = this.state;
        const taskId = this.props.taskInfo._id;
        this.service.editTask(taskId, title, description, isCompleted, imageUrl)
        .then(() => {
            this.props.getTaskInfo();
        })
        .catch(err => console.log(err))
    };

    
    render(){
        return(
            <div>
                <form onSubmit={(e)=>{this.handleFormSubmit(e)}}>
                    <label> Title: </label>
                    <input type="text" name="title" value={this.state.title} onChange={(e)=>{this.handleChange(e)}} />
                    <label>Description: </label>
                    <input type="text" name="description" value={this.state.description} onChange={(e)=>{this.handleChange(e)}} />
                    <button>Confirm</button>
                </form>
            </div>
        );
    };
};

export default editTask;