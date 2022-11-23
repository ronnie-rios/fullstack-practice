const express = require('express');
const router = express.Router();
const { getAllTodos, postTodo } = require('../controller/todoController');

router.get('/', (req, res) => {
    getAllTodos(req, res)
});
router.post('/', (req, res) => {
    postTodo(req, res)
});


module.exports = router;