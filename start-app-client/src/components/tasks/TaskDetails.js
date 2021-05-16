import React, { Component } from 'react';
import EditTask from './EditTask';
import TaskService from "../Services/tasks-service";

class taskDetails extends Component {
    
    state = {
        taskInfo: {}
    };

    service = new TaskService();

    componentDidMount = ()=>{
        this.getTaskInfo();
    };

    getTaskInfo = ()=>{
        const { projectId, taskId } = this.props.match.params;
        this.service.getTask(projectId, taskId)
        .then(responseFromApi => {
            this.setState({ taskInfo: responseFromApi });
        })
        .catch(err => console.log(err))
    };

    changeTaskStatus = ()=>{
        this.setState({ 
            taskInfo: {...this.state.taskInfo, isCompleted: !this.state.taskInfo.isCompleted} 
        });
        const { _id, title, desription, isCompleted } = this.state.taskInfo
        this.service.editTask(_id, title, desription, isCompleted)
        .then(response => console.log(response))
    };

    // toggleEditTaskForm = ()=>{
    //     this.setState({ showingEditForm: !this.state.showingEditForm });
    // };

    deleteTask = ()=>{
        this.service.deleteTask(this.state.taskInfo._id)
        .then((response)=>{
            console.log(response)
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
                <img src={this.state.taskInfo.imageUrl} alt={`${this.state.taskInfo.title}`} />
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