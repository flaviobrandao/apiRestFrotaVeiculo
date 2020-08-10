const mongoose = require('mongoose');
const app = require('./app');

require('dotenv').config({path:'variables.env'});

// Conexao ao banco de dados
mongoose.connect(process.env.DATABASE, { useUnifiedTopology: true,  useNewUrlParser: true });
mongoose.Promise = global.Promise;
mongoose.connection.on('error',(error)=>{
    console.error("ERRO: "+error.message);
});

//Carregando todos os models
require('./models/motorista');

app.set('port',process.env.PORT || 7777);

const server = app.listen(app.get('port'),()=>{
    console.log("Server rodando na porta: "+server.address().port);
});