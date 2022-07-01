const outrosController = {
    SERVICOS: (req, res) =>{
        res.render('servicos');
    },
    SOBRE: (req, res) =>{
        res.render('sobre');
    },
}

module.exports = outrosController;