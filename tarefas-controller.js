var Tarefas = require('./tarefas-model')


exports.listarTarefas = function (req, res) {
    Tarefas.find({}, function (err, tarefas) {
        if (err) return next(err)
        return res.json(tarefas);
    })
}

exports.buscarTarefa = function (req, res) {
    Tarefas.findById(req.params.id, function(err, tarefa){
        if (err) return next(err)
        return res.json(tarefa)
    })
}

exports.cadastrarTarefa = function (req, res) {
    let tarefa = new Tarefas({
        desc: req.body.desc,
        prazo: req.body.prazo,
        completa: req.body.completa     
    })
    tarefa.save(function (err){
        if (err) {
            return next(err)
        }
    })
    res.send('Tarefa cadastrada com sucesso.')
}

exports.updateTarefa = function(req, res) {
    const id = req.params.id;
	Tarefas.findByIdAndUpdate(id, { content: req.body.content }, err => {
        if (err) return res.send(500, err);
        res.send("Tarefa atualizada!");
        });
    }

exports.deleteTarefa = function (req, res, err) {  
        Tarefas.deleteOne({_id:req.params.id},function(err,tarefa){
        if(err)
        res.send(err);
        res.json({message:'Tarefa apagada!'});
    });
}