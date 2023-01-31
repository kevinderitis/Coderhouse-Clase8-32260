const { Router } = require('express')
const petRouter = Router()
const upload = require('../utils/index')

const pets = [];
 
petRouter.get('/', (req, res) => {
    res.json(pets)
})

petRouter.post('/agregar', upload.single('archivo'), (req, res) => {
    const file = req.file;
    if(!file){
        res.send('Error al subir archivo')
    }
    let pet = req.body;
    pet.image = file.path;
    pets.push(pet)
    res.send('Mascota agregada')
})

module.exports = petRouter;