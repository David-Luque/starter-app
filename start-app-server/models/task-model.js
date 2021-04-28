const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  title: {type: String},
  description: {type: String},
  isCompleted: {type: Boolean},
  project: {
    type: Schema.Types.ObjectId,
    ref: 'Project'
  }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;