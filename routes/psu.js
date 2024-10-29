const express = require('express')
const PSU = require('../models/PSU')
const router = express.Router()


router.post('/getpsu/:page', async (req, res) => {
    try {
        const sortOptions = req.body.sort
            ? { [req.body.sort]: req.body.order === 'asc' ? 1 : -1 }
            : {}
        const result = await PSU.find({ PSU_name: { $regex: req.body.search, $options: "i" } }).sort(sortOptions).skip((req.params.page - 1) * req.body.pageSize).limit(req.body.pageSize)
        const totalLength = await PSU.countDocuments({ PSU_name: { $regex: req.body.search, $options: "i" } })
        res.json( { result, totalLength } )

    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server error occured")
    }
})


module.exports = router