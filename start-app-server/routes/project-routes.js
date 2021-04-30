const express = require('express');
const Project = require('../models/project-model');
const router = express.Router();
const mongoose = require('mongoose');
const Task = require('../models/task-model'); //=> MUST FOR '.populate('tasks')'

router.post('/projects', (req, res, next)=>{
  const {title, description} = req.body;
  Project.create({
    title,
    description,
    tasks: [],
    owner: req.user._id
  })
  .then(response => res.json(response))
  .catch(err => res.json(err))
});


router.get('/projects', (req, res, next)=>{
  Project.find()
  .populate('tasks')
  .then(allProjects => {res.json(allProjects)})
  .catch(err => res.json(err))
});

router.get('/projects/:id', (req, res, next)=>{
  if(!mongoose.Types.ObjectId.isValid(req.params.id)){
    res.status(400).json({ message: "Specified 'id' is not valid" });
  };
  Project.findById(req.params.id)
  .populate('tasks')
  .then(theProject => {res.status(200).json(theProject)})
  .catch(err => {res.json(err)})
});

router.put('/projects/:id', (req, res, next)=>{
  if(!mongoose.Types.ObjectId.isValid(req.params.id)){
    res.status(400).json({ message: "Specified 'id' is not valid" });
  };
  Project.findByIdAndUpdate(req.params.id, req.body)
  .then(()=>{
    res.json({ message: `Project with id: ${req.params.id} is updated successfully` })
  })
  .catch(err=>{res.json(err)})
});

router.delete('/projects/:id', (req, res, next)=>{
  if(!mongoose.Types.ObjectId.isValid(req.params.id)){
    res.status(400).jason({ message: "Specified 'id' is not valid" });
  };
  Project.findByIdAndRemove(req.params.id)
  .then(()=>{
    res.json({ message: `Project with id: ${req.params.id} is removed successfully` });
  })
  .catch(err => res.json(err))
});


module.exports = router;