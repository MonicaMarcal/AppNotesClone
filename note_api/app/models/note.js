const mongoose = require('mongoose');

let noteSchema = new mongoose.Schema({
  title: String,
  body: String,
  created_at: { type: Date, default: Date.now }, //Criado //reproduz qual a data e horario atual
  updated_at: { type: Date, default: Date.now }, //atualizado

  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }

});

noteSchema.index({'title': 'text', 'body': 'text'});

module.exports = mongoose.model('Note', noteSchema);