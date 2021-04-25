import React, { Component } from 'react';
import axios from 'axios';

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
            axios.get(`http://localhost:5000/api/projects/${projectId}`)
            .then(responseFromApi =>{
                this.setState({ projectInfo: responseFromApi.data });
            })
            .catch(err => console.log(err))
        };
    };

    getProjectInfo = ()=>{
        const projectId = this.props.match.params.id;
        axios.get(`http://localhost:5000/api/projects/${projectId}`)
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
                    <h5>{task.title}</h5>
                    <p>{task.description}</p>
                </li>
            );
        }); 
    };

    render(){
        return(
            <article className="projectDetails">
                <h1>{this.state.projectInfo.title}</h1>
                <p>{this.state.projectInfo.description}</p>
                <hr />
                <ol>
                    {this.state.projectInfo.tasks && this.displayTasks()}
                </ol>
            </article>
        );
    };
};

export default projectDetails;