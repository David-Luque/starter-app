import { Component } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import AddProject from './AddProject';

class projectList extends Component {

    state = {
        allProjects: []
    };

    componentDidMount = ()=>{
        this.getAllProjects();
    };

    getAllProjects = ()=>{
        axios.get('http://localhost:5000/api/projects')
        .then(resFromApi => {
            this.setState({ allProjects: resFromApi.data });
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
                    {/* <p>{project.description}</p> */}
                </div>
            )
        });
    }

    render(){
        return (
            <div>
                {this.state.allProjects && this.renderAllProjects()}
                <div>
                    <AddProject getData={()=>this.getAllProjects()} />
                </div>
            </div>
        );
    };
};

export default projectList;