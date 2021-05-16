import { Component } from "react";
import { Link } from 'react-router-dom';
import AddProject from './AddProject';
import ProjectService from '../Services/projects-service';

class projectList extends Component {

    state = {
        allProjects: []
    };

    service = new ProjectService();

    componentDidMount = ()=>{
        this.getAllProjects();
    };

    getAllProjects = ()=>{
        this.service.allProjects()
        .then(resFromApi => {
            this.setState({ allProjects: resFromApi });
        })
        .catch(err => {console.log(err)})
    };

    renderAllProjects = ()=>{
        const allProjectsCopy = [...this.state.allProjects]
        return allProjectsCopy.map((project) => {
            return (
                <div key={project._id}>
                    <Link to={`/projects/${project._id}`}>
                        <h3>{project.title}</h3>
                    </Link>
                    <ul>
                        {project.tasks.map((task, index) =>{
                            return <li key={index}>{task.title}</li>
                        })}
                    </ul>
                </div>
            )
        });
    }

    render(){
        return (
            <div>
                {this.state.allProjects.length > 0 && this.renderAllProjects()}
                <div>
                    <AddProject getData={this.getAllProjects} />
                </div>
            </div>
        );
    };
};

export default projectList;