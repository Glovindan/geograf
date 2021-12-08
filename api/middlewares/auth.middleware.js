const tokenService = require('../services/token');

module.exports = (req,res,next) => {
    if(req.method === 'OPTIONS') {
        return next();
    }

    try {
        const token = req.headers.authorization.split(' ')[1];

        if(!token) {
            return res.status(401).json({message:'Отказано в доступе'})
        }

        if(!tokenService.validateAccessToken(token)) {
            return res.status(401).json({message:'Отказано в доступе'})
        }

        next()
    } catch (err) {
        return res.status(401).json({message:'Отказано в доступе'})
    }
}