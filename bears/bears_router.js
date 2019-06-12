// bring in express 
const express = require('express');

// create express router
const router = express.Router();

const BearsModel = require('./bears_model');


// GET all bears
router.get('/', async (req, res) => {
    try {
        const br = await BearsModel.find()
        res.status(200).json(br)
    } catch (err) {
        res.status(500).json({
            message: "The bears could not be retrieved"
        })
    }
})

// GET bear by ID
router.get('/:id', async (req, res) => {
    try {
        const br = await BearsModel.findById(req.params.id)
        if (br) {
            res.status(200).json(br)
        } else {
            res.status(404).json({
                message: "The bear with this specific ID does not exist"
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "The bear information could not be retrieved"
        })
    }
});

// POST a new bear
router.post('/', async (req, res) => {
    try {
        const br = await BearsModel.add(req.body)
        res.status(201).json(br)
    } catch (error) {
        res.status(500).json({
            message: "Please provide necessary information"
        })
    }
});


// UPDATE a bear 
router.put('/:id', async (req, res) => {
    try {
        const br = await BearsModel.update(req.params.id, req.body)
        if (br) {
            res.status(200).json(br)
        } else {
            res.status(404).json({
                message: "The breat with the specific ID does not exist"
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "The bear information could not be modified"
        })
    }
});


// REMOVE a bear
router.delete('/:id', async (req, res) => {
    try {
        const count = await BearsModel.remove(req.params.id)
        if (count > 0) {
            res.status(200).json({
                message: "The bear has been deleted"
            })
        } else {
            res.status(404).json({
                message: "The bear with the specific ID does not exist"
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "The bear could not be removed"
        })
    }
});




module.exports = router;