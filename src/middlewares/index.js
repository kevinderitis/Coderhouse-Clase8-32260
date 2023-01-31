const middleware1 = (req, res, next) => {
    console.log('Pasó por el middleware 1')
    next()
}

const middleware2 = (req, res, next) => {
    console.log('Pasó por el middleware 2 y es solo para user, no para pet')
    next()
}

const middleware3 = (req, res, next) => {
    console.log('solamente para una ruta en particular')
    next()
}

const middleware4 = (req, res, next) => {
    if(req.headers.secret == 'clave'){
         next()
    }else{
        res.send('No tiene el secret en los headers')
    }
    
}

module.exports = { middleware1, middleware2, middleware3, middleware4 }