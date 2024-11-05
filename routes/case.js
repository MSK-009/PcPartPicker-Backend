const express = require('express')
const Case = require('../models/Case')
const router = express.Router()


router.post('/getcase/:page', async (req, res) => {
    try {
        const sortOptions = req.body.sort
            ? { [req.body.sort]: req.body.order === 'asc' ? 1 : -1 }
            : {}
        const result = await Case.find({ Case_name: { $regex: req.body.search, $options: "i" } }).sort(sortOptions).skip((req.params.page - 1) * req.body.pageSize).limit(req.body.pageSize)
        const totalLength = await Case.countDocuments({ Case_name: { $regex: req.body.search, $options: "i" } })
        res.json( { result, totalLength } )

    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server error occured")
    }
})


module.exports = router