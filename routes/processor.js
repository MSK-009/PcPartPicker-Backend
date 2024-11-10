const express = require('express')
const Processor = require('../models/processor')
const router = express.Router()

router.post('/getprocessors/:page', async (req, res) => {
    try {
        const { pageSize, search, sort, order } = req.body;

        const searchPattern = String(search || '');
        const sortOptions = sort ? { [sort]: order === 'asc' ? 1 : -1 } : {};

        const result = await Processor.find({ CPU_name: { $regex: searchPattern, $options: 'i' } })
            .sort(sortOptions)
            .skip((req.params.page - 1) * pageSize)
            .limit(pageSize);
        
        const totalLength = await Processor.countDocuments({ CPU_name: { $regex: searchPattern, $options: 'i' } });
        
        res.json({ result, totalLength })

    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server error occurred")
    }
})

module.exports = router