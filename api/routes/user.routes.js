const {Router} = require('express');
const { check, validationResult } = require('express-validator');
const router = Router();
const Element = require('../models/Element')
const elementsListPageSize = 10;

router.get('/getMineralsList', async(req,res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log('errors', errors);
            return res.status(400).json({
                errors: errors.array(),
                message: 'Вы допустили ошибку . . .'
            })
        }
        const {page} = req.query;
        const elementsAggregation = await Element.aggregate([
            {
                $project: {
                    "title":1,
                    "imageURL":1
                }
            },
            {
                $skip: (page - 1) * elementsListPageSize
            },
            {
                $limit: elementsListPageSize
            }
        ])

        return res.status(200).json({ message: elementsAggregation});
    } catch (e) {
        return res.status(400).json({ message: 'Произошла ошибка на сервере' });
    }
})

router.get('/getMineral', async(req,res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log('errors', errors);
            return res.status(400).json({
                errors: errors.array(),
                message: 'Вы допустили ошибку . . .'
            })
        }
        const {id} = req.query;
        const element = await Element.findById(id);

        return res.status(200).json({ message: element});
    } catch (e) {
        return res.status(400).json({ message: 'Произошла ошибка на сервере' });
    }
})

module.exports = router;