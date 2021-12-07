const {Router} = require('express');
const { check, validationResult } = require('express-validator');
const router = Router();

router.get('/getMineralList', async(req,res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log('errors', errors);
            return res.status(400).json({
                errors: errors.array(),
                message: 'Вы допустили ошибку . . .'
            })
        }

        return res.status(200).json({ message: {
                status: true
            }});
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

        return res.status(200).json({ message: {
                status: true
            }});
    } catch (e) {
        return res.status(400).json({ message: 'Произошла ошибка на сервере' });
    }
})

module.exports = router;