import axios from 'axios';

class ProjectService {
    constructor(){
        const service = axios.create({
            baseURL: "http://localhost:5000/api/projects",
            withCredentials: true
        });
        this.service = service;
    }

    allProjects = ()=>{
        return this.service.get('/')
        .then(response => response.data)
    };

    addProject = (title, description)=>{
        return this.service.post('/', { title, description })
        .then(response => response.data)
    };

    projectDetails = (projectId)=>{
        return this.service.get(`/${projectId}`)
        .then(response => response.data)
    };

    editProject = (projectId, title, description)=>{
        return this.service.put(`/${projectId}`, { title, description })
        .then(response => response.data)
    };

    deleteProject = (projectId)=>{
        return this.service.delete(`/${projectId}`)
        .then(response => response.data)
    };
};

export default ProjectService;