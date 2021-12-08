const jwt = require('jsonwebtoken');

class TokenService {
    generateTokens(payload) {
        return jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '1h'});
    }

    validateAccessToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_SECRET);
            return userData;
        } catch (e) {
            return null;
        }
    }
}

module.exports = new TokenService();