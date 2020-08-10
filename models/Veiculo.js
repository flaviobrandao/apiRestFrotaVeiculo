const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const veiculoSchema = new mongoose.Schema({
 
});

module.exports = mongoose.model('Veiculo',veiculoSchema);