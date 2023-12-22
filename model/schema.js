const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/bulkdata');

const model = new mongoose.Schema({
    name:String,
    
});

const dataSchema = new mongoose.model('Data',model);

module.exports = dataSchema;