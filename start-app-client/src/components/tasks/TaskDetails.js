import React, { Component } from 'react';
import axios from 'axios';
import EditTask from './EditTask';

class taskDetails extends Component {
    
    state = {
        taskInfo: {}
    };

    componentDidMount = ()=>{
        this.getTaskInfo();
    };

    getTaskInfo = ()=>{
        const { projectId, taskId } = this.props.match.params;
        axios.get(`http://localhost:5000/api/projects/${projectId}/tasks/${taskId}`)
        .then(responseFromApi => {
            const taskInfo = responseFromApi.data;
            this.setState({ taskInfo });
        })
        .catch(err => console.log(err))
    };

    changeTaskStatus = ()=>{
        this.setState({ taskInfo: {...this.state.taskInfo, isCompleted: !this.state.taskInfo.isCompleted} });
    };

    // toggleEditTaskForm = ()=>{
    //     this.setState({ showingEditForm: !this.state.showingEditForm });
    // };

    deleteTask = ()=>{
        axios.delete(`http://localhost:5000/api/tasks/${this.state.taskInfo._id}`)
        .then(()=>{
            this.props.history.push(`/projects/${this.props.match.params.projectId}`)
        })
        .catch(err => console.log(err))
    };

    renderEditForm = ()=>{
        if(!this.state.taskInfo.title){
            this.getTaskInfo();
        } else {
            return(
                <EditTask 
                    taskInfo={this.state.taskInfo} 
                    getTaskInfo={this.getTaskInfo}
                    {...this.props} 
                />
            );
        }
    };

    displayTaskInfo = ()=>{
        return(
            <div>
                <h4>{this.state.taskInfo.title}</h4>
                <p>{this.state.taskInfo.description}</p>
                <button onClick={()=>{this.changeTaskStatus()}}>
                    {this.state.taskInfo.isCompleted ? "DONE" : "Pending"}
                </button>
                <hr />
                {this.renderEditForm()}
                <hr />
                <button onClick={()=>{this.deleteTask()}} >DELETE TASK</button>
            </div>
        );
    };

    render(){
        return(
            <div>
                {this.state.taskInfo && this.displayTaskInfo()}
            </div>
        );
    };
};

export default taskDetails;