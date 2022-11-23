const Todo = require('../models/Todo');

 const getAllTodos = async (req, res) => {
    const todos = await Todo.find();
    return res.json(todos);
};

const postTodo = async (req, res) => {
    const newTodo = await Todo.create(req.body);
    if (!req.body.title || !req.body.body) {
        return res.json({
            err: 'please enter a title and body'
        })
    } else {
        return res.json(newTodo)
    }
}

module.exports = {
    getAllTodos,
    postTodo
}