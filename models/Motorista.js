const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const motoristaSchema = new mongoose.Schema({
 
});

module.exports = mongoose.model('Motorista',motoristaSchema);