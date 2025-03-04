const { Router } = require('express');
const Genero = require('../models/Genero');
const { validationResult, check} = require('express-validator'); // ❌ Se importaba mal "validationResut"

const router = Router();

router.post('/',  [
    check('Nombre', 'Invalid Nombre').not().isEmpty(),
    check('Estado', 'Invalid Estado').isIn(['Activo', 'Inactivo']), // ❌ Había un .not().isIn(...)
    check('Descripcion', 'Invalid Descripcion').not().isEmpty(),
],  async function (req, res) {
    
    try {      
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: errors.array() }); // ❌ "messge" estaba mal escrito
      }

      let genero = new Genero();
      genero.Nombre = req.body.Nombre;
      genero.Estado = req.body.Estado;
      genero.Descripcion = req.body.Descripcion;
      genero.createdAt = new Date();
      genero.updatedAt = new Date();

      genero = await genero.save(); // Guardar en la base de datos
      res.send(genero);

    } catch (error) {
      console.log(error);
      res.status(500).send('Mensaje Error');
    }

});

router.get('/',async function (req,res)  {
  try{
      const generos = await Genero.find();
      res.send(generos);
 
  } catch (error){
      console.log(error);
      res.status(500).send('Mensaje error')
 
  }

});

//Update

router.put('/:genero_id',  [
  check('Nombre', 'Invalid Nombre').not().isEmpty(),
  check('Estado', 'Invalid Estado').isIn(['Activo', 'Inactivo']), 
  check('Descripcion', 'Invalid Descripcion').not().isEmpty(),
],  async function (req, res) {
  
  try {      
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array() }); 
    }
    let genero =await Genero.findById(req.params.genero_id);
    
    if (!genero) {
      return res.status(400).send("este ID no existe en genero"); 
    }

    const generoExist = await Genero.findOne({ Nombre: req.body.Nombre });
    if (generoExist) {
      return res.status(400).send('Genero ya Existe')
    }

    genero.Nombre = req.body.Nombre;
    genero.Estado = req.body.Estado;
    genero.Descripcion = req.body.Descripcion;
    genero.updatedAt = new Date();
    
    genero = await genero.save(); // Guardar en la base de datos
    res.send(genero);

  } catch (error) {
    console.log(error);
    res.status(500).send('Mensaje Error');
  }

});

module.exports = router;