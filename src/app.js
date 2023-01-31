const express = require('express')
const app = express()
const userRouter = require('./routes/user')
const petRouter = require('./routes/pet')
const { middleware1, middleware2 } = require('./middlewares/index')

//Middlewares
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(middleware1) // Middleware seteado a nivel aplicacion

app.use('/api/user', middleware2 ,userRouter) // Middleware seteado a nivel ROUTER
app.use('/api/pet', petRouter)


const server = app.listen(8080, () => console.log('Server running on port 8080'))
server.on('error', error => console.log(error))