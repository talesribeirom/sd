const mongoose = require('mongoose')
const Schema = mongoose.Schema

let TarefaSchema = new Schema({
    desc: {type: String, required: true},
    prazo: {type: Date, "default": Date.now, required: true},
    completa: {type: Boolean, required: false}
})

module.exports = mongoose.model('Tarefas', TarefaSchema)
