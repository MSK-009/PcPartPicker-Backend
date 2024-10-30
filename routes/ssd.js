const express = require('express')
const SSD = require('../models/SSD')
const router = express.Router()


router.post('/getssd/:page', async (req, res) => {
    try {
        const { pageSize, search, sort, order } = req.body;

        const searchPattern = String(search || '');
        const sortOptions = sort ? { [sort]: order === 'asc' ? 1 : -1 } : {};

        const result = await SSD.find({ SSD_name: { $regex: searchPattern, $options: 'i' } })
            .sort(sortOptions)
            .skip((req.params.page - 1) * pageSize)
            .limit(pageSize);
        
        const totalLength = await SSD.countDocuments({ SSD_name: { $regex: searchPattern, $options: 'i' } });
        
        res.json( { result, totalLength } )

    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server error occured")
    }
})


module.exports = router