const {Schema, model} = require('mongoose');

const Element = new Schema( {
    title: {type: String, index: true},
    imageURL: {type: String, index: true},
    description: {type: String},
    companies: {type: String},
    coords: {type: String}
});

module.exports = model('Element', Element);