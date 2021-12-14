const { Router } = require('express');
const { check, validationResult } = require('express-validator');
const router = Router();
const tokenService = require('../services/token')
const auth = require('../middlewares/auth.middleware')

const Admin = require('../models/Admin')
const Element = require('../models/Element')

router.post('/login', async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log('errors', errors);
            return res.status(400).json({
                errors: errors.array(),
                message: 'Вы допустили ошибку . . .'
            })
        }
        const { login, password } = req.body;

        const admin = await Admin.findOne({ login: login });
        if (!admin) {
            return res.status(400).json({ message: 'Введены неверные логин или пароль' });
        }

        if (password !== admin.password) {
            return res.status(400).json({ message: 'Введены неверные логин или пароль' });
        }

        const token = tokenService.generateTokens({ login: login })

        return res.status(200).json({
            message: "Успешный вход",
            token: token
        });
    } catch (e) {
        return res.status(400).json({ message: 'Произошла ошибка на сервере', e: e.toString() });
    }
})

router.post('/create', [auth],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                console.log('errors', errors);
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Вы допустили ошибку . . .'
                })
            }

            const { title, imageURL, description, companies, coords } = req.body;

            const element = new Element({
                title: title,
                imageURL: imageURL,
                description: description,
                companies: companies,
                coords: coords
            })

            await element.save();
            const elementId = element._id;

            return res.status(200).json({ message: "Элемент добавлен", elementId: elementId });
        } catch (e) {
            return res.status(400).json({ message: 'Произошла ошибка на сервере' });
        }
    })

router.post('/edit', [auth], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log('errors', errors);
            return res.status(400).json({
                errors: errors.array(),
                message: 'Вы допустили ошибку . . .'
            })
        }

        const { id, title, imageURL, description, companies, coords } = req.body;

        const element = await Element.findById(id);
        if (!element) {
            return res.status(400).json({ message: 'Неверный идентификатор' });
        }

        if (title) element.title = title;
        if (imageURL) element.imageURL = imageURL;
        if (description) element.description = description;
        if (companies) element.companies = companies;
        if (coords) element.coords = coords;

        //потому что await
        await element.save();

        return res.status(200).json({ message: "Элемент обновлен" });
    } catch (e) {
        console.log(e)
        return res.status(400).json({ message: 'Произошла ошибка на сервере' });
    }
})

router.post('/delete', [auth], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log('errors', errors);
            return res.status(400).json({
                errors: errors.array(),
                message: 'Вы допустили ошибку . . .'
            })
        }
        const { id } = req.body;
        const element = await Element.findByIdAndRemove(id);

        return res.status(200).json({ message: "Элемент удален" });
    } catch (e) {
        return res.status(400).json({ message: 'Произошла ошибка на сервере' });
    }
})

module.exports = router;