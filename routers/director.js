const { Router } = require('express');
const Director = require('../models/Director');
const { validationResult, check} = require('express-validator');

const router = Router();

router.post('/',  [
    check('Nombre', 'Invalid Nombre').not().isEmpty(),
    check('Estado', 'Invalid Estado').isIn(['Activo', 'Inactivo']),
],  async function (req, res) {
    
    try {      
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: errors.array() });
      }

      let director = new Director();
      director.Nombre = req.body.Nombre;
      director.Estado = req.body.Estado;
      director.createdAt = new Date();
      director.updatedAt = new Date();

      director = await director.save(); // Guardar en la base de datos
      res.send(director);

    } catch (error) {
      console.log(error);
      res.status(500).send('Mensaje Error');
    }

});

router.get('/',async function (req,res)  {
  try{
      const directors = await Director.find();
      res.send(directors);
 
  } catch (error){
      console.log(error);
      res.status(500).send('Mensaje error')
 
  }

});

//Update

router.put('/:director_id',  [
  check('Nombre', 'Invalid Nombre').not().isEmpty(),
  check('Estado', 'Invalid Estado').isIn(['Activo', 'Inactivo']), 
],  async function (req, res) {
  
  try {      
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array() }); 
    }
    let director =await Director.findById(req.params.director_id);
    
    if (!director) {
      return res.status(400).send("este ID no existe en director"); 
    }

    const directorExist = await Director.findOne({ Nombre: req.body.Nombre });
    if (directorExist) {
      return res.status(400).send('Director ya Existe')
    }
    
    director.Nombre = req.body.Nombre;
    director.Estado = req.body.Estado;
    director.updatedAt = new Date();
   

    director = await director.save(); // Guardar en la base de datos
    res.send(director);

  } catch (error) {
    console.log(error);
    res.status(500).send('Mensaje Error');
  }

});

module.exports = router;