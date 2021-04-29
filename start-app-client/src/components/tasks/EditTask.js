import React, { Component } from 'react';
import axios from 'axios';

class editTask extends Component {
    state = {
        title: this.props.taskInfo.title,
        description: this.props.taskInfo.description,
        isCompleted: this.props.taskInfo.isCompleted
    }

    handleChange = (event)=>{
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (event)=>{
        event.preventDefault();
        const { title, description, isCompleted } = this.state;
        axios.put(`http://localhost:5000/api/tasks/${this.props.taskInfo._id}`, { title, description, isCompleted })
        .then(() => {
            this.props.getTaskInfo();
            //this.props.history.push(`/projects/${this.props.match.params.projectId}`);
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