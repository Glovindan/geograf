const {Schema, model} = require('mongoose');

const Element = new Schema( {
    title: {type: String, index: true},
    imageURL: {type: String, index: true},
    description: {type: String, index: true},
    companies: {type: [String], index: true}
});

module.exports = model('Element', Element);