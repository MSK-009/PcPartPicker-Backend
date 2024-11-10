const express = require('express')
const Motherboard = require('../models/Motherboard')
const router = express.Router()


router.post('/getmobo/:page', async (req, res) => {
    try {
        const { pageSize, search, sort, order } = req.body;

        const searchPattern = String(search || '');
        const sortOptions = sort ? { [sort]: order === 'asc' ? 1 : -1 } : {};

        const result = await Motherboard.find({ Chipset: { $regex: searchPattern, $options: 'i' } })
            .sort(sortOptions)
            .skip((req.params.page - 1) * pageSize)
            .limit(pageSize);
        
        const totalLength = await Motherboard.countDocuments({ Chipset: { $regex: searchPattern, $options: 'i' } });

        
        res.json( { result, totalLength } )

    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server error occured")
    }
})


module.exports = router