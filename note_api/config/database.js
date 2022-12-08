const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/noteApp', { // esse noteApp será o nome do nosso database é criando asim que criarmos uma collection/tabela
}
).then(() => console.log('connection succesful'))
  .catch((err) => console.error(err));