import React, { Component } from 'react';
import TaskService from "../Services/tasks-service";

class addTask extends Component {
    state = {
        title: "",
        description: "",
        imageUrl: "",
        isShowingForm: false
    };

    service = new TaskService();

    toggleShowForm = ()=>{
        this.setState({ isShowingForm: !this.state.isShowingForm });
    };

    handleChange = (event)=>{
        const { name, value } = event.target
        this.setState({ [name]: value });
    };

    handleFormSubmit=(event)=>{
        event.preventDefault();
        const { title, description, imageUrl } = this.state;
        const projectId = this.props.theProject._id
        this.service.createTask(title, description, imageUrl, projectId)
        .then(()=>{
            this.props.getProjectInfo();
            this.setState({
                title: "",
                description: "",
                imageUrl: ""
            });
        })
        .catch(err => {console.log(err)})
    };

    handleFileUpload = (e)=>{
        //console.log(e.target.files[0])
        const uploadData = new FormData();
        uploadData.append('imageUrl', e.target.files[0]);
        this.service.fileUpload(uploadData)
        .then(response => {
            console.log(response)
            this.setState({ imageUrl: response.secure_url });
        })
        .catch(err => console.log("Error uploading file", err))
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
                    <label>Image:</label>
                    <input type="file" onChange={(e)=>{this.handleFileUpload(e)}} />
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