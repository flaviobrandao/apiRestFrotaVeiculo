const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const motoristaSchema = new mongoose.Schema({
    tittle:{
        type:String,
        trim: true,
        require: true,
        required:''         
    },
    slug:String,
    body:{
        type:{
            type:String,
            trim:true,
        }
    },
    tags:[String]
});

module.exports = mongoose.model('Motorista',motoristaSchema);