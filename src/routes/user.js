const { Router } = require('express')
const userRouter = Router()
const { middleware3, middleware4 } = require('../middlewares/index')

const users = [];

userRouter.get('/', middleware3, middleware4, (req, res) => {
    res.json(users)
})

userRouter.post('/agregar', (req, res) => {
    let user = req.body;
    users.push(user)
    res.send('Usuario agregado')
})


module.exports = userRouter;