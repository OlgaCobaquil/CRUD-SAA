const express = require('express');
const router = express.Router();
const Caso = require('../models/task');

const async = require('async');

//esperar a que las tareas se ejecuten con async
router.get('/', (req, res) =>{
    const casos = Caso.find();
    console.log(casos);
    res.json('received');
});
module.exports = router;