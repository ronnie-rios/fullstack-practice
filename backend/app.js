//imports
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//express 
const app = express();
const port = 9001;
app.use(express.json());

//mongoose connection
mongoose.connect('mongodb://localhost/todo-prac');

//routes
const toDoRoutes = require('./routes/todoRoutes');
app.use('/todos', toDoRoutes)
//Express Listener
const listener = () => {
    console.log(`server on ${port}`);
}

app.listen(port, listener)

