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

    createTask = (title, description, imageUrl, project)=>{
        return this.service.post('tasks', { title, description, imageUrl, project })
        .then(response => response.data)
    };

    editTask = (taskId, title, desription, isCompleted)=>{
        return this.service.put(`/tasks/${taskId}`, { title, desription, isCompleted })
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