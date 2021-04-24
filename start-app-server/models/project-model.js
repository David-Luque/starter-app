const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  title: {type: String},
  description: {type: String},
  tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }]
  //owner
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;