import React, { Component } from 'react';
import axios from 'axios';
import EditProject from './EditProject';
import { Link } from 'react-router-dom';
import AddTask from '../tasks/AddTask';

class projectDetails extends Component {
    
    state = {
        projectInfo: {}
    }; 
    
    componentDidMount = ()=>{
        this.getProjectInfo();
    };

    componentDidUpdate = (prevProps)=>{
        if(prevProps.match.params.id !== this.props.match.params.id){
            const projectId = this.props.match.params.id;
            axios.get(`http://localhost:5000/api/projects/${projectId}`, {withCredentials:true})
            .then(responseFromApi =>{
                this.setState({ projectInfo: responseFromApi.data });
            })
            .catch(err => console.log(err))
        };
    };

    getProjectInfo = ()=>{
        const projectId = this.props.match.params.id;
        axios.get(`http://localhost:5000/api/projects/${projectId}`, {withCredentials:true})
        .then(responseFromApi => {
            const projectInfo = responseFromApi.data;
            this.setState({ projectInfo });
        })
        .catch(err => console.log(err))
    };

    // displayPorjectInfo = ()=>{
    //     return(
    //         <article>
    //             <h1>{this.state.projectInfo.title}</h1>
    //             <p>{this.state.projectInfo.description}</p>
    //             <ol>
    //                 {this.displayTasks()}
    //             </ol>
    //         </article>
    //     )
    // };
    
    displayTasks = ()=>{
        const projectInfoCopy = {...this.state.projectInfo};
        return projectInfoCopy.tasks.map((task) => {
            return(
                    <li key={task._id}>
                        <Link  to={`/projects/${this.state.projectInfo._id}/tasks/${task._id}`}>
                            <h4>{task.title}</h4>
                        </Link>
                        <p>{task.description}</p>
                        <p>{task.isCompleted ? "DONE" : "Pending"}</p>
                    </li>
                
                
            );
        }); 
    };

    renderEditForm = ()=>{
        if(!this.state.projectInfo.title){
            this.getProjectInfo();
        } else {
            return(
                <EditProject 
                    theProject={this.state.projectInfo} 
                    getProjectInfo={this.getProjectInfo} 
                    {...this.props} //=> {...props} => so we can have 'this.props.history' in Edit.js
                />
            )
        }
    };

    deleteProject = ()=>{
        const projectId = this.props.match.params.id
        axios.delete(`http://localhost:5000/api/projects/${projectId}`, {withCredentials:true})
        .then(() => {
            this.props.history.push('/projects');
        })
        .catch(err => console.log(err))
    };

    renderAddTaskForm = ()=>{
        if(this.state.projectInfo.title){
            return (
                <AddTask 
                    theProject={this.state.projectInfo}
                    getProjectInfo={this.getProjectInfo}
                />
            )
        };
    };

    ownerCheck = (project)=>{
        if(this.props.loggedInUser && project.owner === this.props.loggedInUser._id){
            return(
                <div>
                    {this.renderEditForm()}
                    {this.renderAddTaskForm()}
                    <button onClick={()=>{this.deleteProject()}}>DELETE PROJECT</button>
                </div>
            );
        }
    };

    render(){
        return(
            <article className="projectDetails">
                <h1>{this.state.projectInfo.title}</h1>
                <p>{this.state.projectInfo.description}</p>
                <hr />
                {this.state.projectInfo.tasks && this.state.projectInfo.tasks.length > 0 && <h3>Tasks:</h3>}
                <ol>
                    {this.state.projectInfo.tasks && this.displayTasks()}
                </ol>
                <hr />
                <div>{this.ownerCheck(this.state.projectId)}</div>
                <br/>
                <Link to={"/projects"}>Back to projects</Link>
            </article>
        );
    };
};

export default projectDetails;