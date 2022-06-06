module.exports = app =>{
    const tutorials = require('../controllers/tutorial.controller.js');
    var router = require("express").Router();

    // crear un nuevo tutorial
    router.post('/', tutorials.create);

    // recibir todos los tutoriales
    router.get('/', tutorials.findAll);

    // recibir todos los tutoriales publicados
    router.get('/published', tutorials.findAllPublished);

    //recibir un solo tutorial por id
    router.get('/:id', tutorials.findOne);

    // Actualizar tutorial por id
    router.put('/:id', tutorials.update);

    // Borrar tutorial por id
    router.delete('/:id', tutorials.delete);

    // borrar todos los tutoriales
    router.delete('/', tutorials.deleteAll);
    app.use('/api/tutorials',router);
};