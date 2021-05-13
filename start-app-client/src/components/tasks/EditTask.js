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

    handleSubmit = (event)=>{
        event.preventDefault();
        const { title, description, isCompleted } = this.state;
        const taskId = this.props.taskInfo._id;
        this.service.editTask(taskId, title, description, isCompleted)
        .then(() => {
            this.props.getTaskInfo();
        })
        .catch(err => console.log(err))
    };

    
    render(){
        return(
            <div>
                <form onSubmit={()=>{this.handleSubmit()}}>
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