import axios from "axios";

class TaskService {
    constructor(){
        const service = axios.create({
            baseURL: "http://localhost:5000/api",
            withCredentials: true
        });
        this.service = service;
    }

    getTask = (projectId, taskId)=>{
        return this.service.get(`/projects/${projectId}/tasks/${taskId}`)
        .then(response => response.data)
    };

    createTask = (title, description, imageUrl, projectId)=>{
        console.log(projectId)
        return this.service.post('/tasks', { title, description, imageUrl, projectId })
        .then(response => response.data)
    };

    editTask = (taskId, title, description, isCompleted, imageUrl)=>{
        return this.service.put(`/tasks/${taskId}`, { title, description, isCompleted, imageUrl })
        .then(response => response.data)
    };

    fileUpload = (theFile)=>{
        return this.service.post('/upload', theFile)
        .then(response => response.data)
    };

    deleteTask = (taskId)=>{
        return this.service.delete(`/tasks/${taskId}`)
        .then(response => response.data)
    };
};

export default TaskService;