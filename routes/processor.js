const express = require('express')
const Processor = require('../models/Processor')
const router = express.Router()


// ROUTE 1: 
router.post('/getprocessor/:page', async (req, res) => {
    try {
        const user = await Processor.find({ CPU_name: { $regex: req.body.search, $options: "i" }}).skip((req.params.page - 1 )* 10).limit(req.body.pageSize)
        res.send(user)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server error occured")
    }
})


router.post('/getallprocessors/:page', async (req, res) => {
    try {
        const user = await Processor.find().skip((req.params.page - 1 )* 10).limit(req.body.pageSize)
        res.send(user)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server error occured")
    }
})


module.exports = router