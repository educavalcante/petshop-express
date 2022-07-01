const userController ={
    contato: (req , res)=>{
        res.render('contato')
    },
    cadastro: (req , res)=>{
        res.render('cadastro')
    },
    logar: (req , res)=>{
        res.render('login')
    }
}

module.exports = userController;