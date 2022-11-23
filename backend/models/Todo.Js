const mongoose = require('mongoose');

const toDoSchema = new mongoose.Schema({
    title: String,
    body: String
}, { timestamps: true });

const Todo = mongoose.model('Todo', toDoSchema);

module.exports = Todo;