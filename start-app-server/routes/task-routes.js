const express = require('express');
const router = express.Router();
const Task = require('../models/task-model');
const Project = require('../models/project-model');
const mongoose = require('mongoose');

router.get('/projects/:projectId/tasks/:taskId',(req, res, next)=>{
  if(!mongoose.Types.ObjectId.isValid(req.params.projectId)){
    res.status(400).json({ message: "Specified project id is not valid" });
  };
  if(!mongoose.Types.ObjectId.isValid(req.params.taskId)){
    res.status(400).json({ message: "Specified task id is not valid" });
  };
  
  Task.findById(req.params.taskId)
  .then(task => {res.json(task)})
  .catch(err => {res.json(err)})
});


router.post('/tasks', (req, res, next)=>{
  const { title, description, imageUrl, projectId } = req.body;
  Task.create({
    title,
    description,
    imageUrl,
    project: projectId
  })
  .then(response => {
    return Project.findByIdAndUpdate(projectId, {
      $push: {tasks: response._id}
    })
    .then(theResponse => {res.json(theResponse)})
  })
  .catch(err => {res.json(err)})
})

router.put('/tasks/:id', (req, res, next)=>{
  if(!mongoose.Types.ObjectId.isValid(req.params.id)){
    res.status(400).json({ message: "Specified id is not valid" });
  };
  Task.findByIdAndUpdate(req.params.id, req.body)
  .then(()=>{res.json({ message: `Task with id: ${req.params.id} is updated successfully.` })})
  .catch(err => {res.json(err)})
});

router.delete('/tasks/:id', (req, res, next)=>{
  if(!mongoose.Types.ObjectId.isValid(req.params.id)){
    res.status(400).jason({ message: "Specified id is not valid" });
  };
  Task.findByIdAndRemove(req.params.id)
  .then(()=>{res.json({ message: `Task with id: ${req.params.id} is removed successfully` })})
  .catch(err => {res.json(err)})
});

module.exports = router;