// bring in express 
const express = require('express');

// create express router
const router = express.Router();

const ZooModel = require('./zoo_model');



router.get('/', async (req, res) => {
    try {
        const zm = await ZooModel.get()
        res.status(200).json(zm)
    } catch (err) {
        res.status(500).json({
            message: "The animals could not be retrieved"
        })
    }
})

module.exports = router;