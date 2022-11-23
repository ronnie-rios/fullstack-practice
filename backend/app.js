const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 9001;
app.use(express.json());

const listener = () => {
    console.log(`server on ${port}`);
}

app.listen(port, listener)

