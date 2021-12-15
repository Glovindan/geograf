const { Schema, model } = require('mongoose');

const Admin = new Schema({
    login: { type: String, index: true, required: true, unique: true },
    password: { type: String, index: true, required: true }
});

module.exports = model('Admin', Admin);