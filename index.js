const express = require("express")
const mongoose = require("mongoose")

const tarefa_controller = require('./tarefas-controller')

mongoose.connect('mongodb+srv://admin:1234@cluster0.h7tdc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.Promise = global.Promise
try {
    let db = mongoose.connection
    db.on('errr', console.error.bind(console, 'Erro ao se conectar ao banco de dados'))
} catch (e) {
    console.log(e)
}

const router = express.Router()

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Tales Ribeiro - TP2 - Sistemas Distribuidos')
})

router.post('/tarefas', tarefa_controller.cadastrarTarefa)
router.get('/tarefas', tarefa_controller.listarTarefas)
router.get('/tarefas/:id', tarefa_controller.buscarTarefa)
router.delete('/tarefas/:id', tarefa_controller.deleteTarefa)
router.put('/tarefas/:id', tarefa_controller.updateTarefa)


app.use('/', router)


let porta = process.env.PORT || 4000

app.listen(porta, () => {
    console.log("Servidor executando na porta: " + porta)
})
