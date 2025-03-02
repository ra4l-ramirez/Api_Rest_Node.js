const { Router } = require('express');
const Tipo = require('../models/Tipo');
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

      let tipo = new Tipo();
      tipo.Nombre = req.body.Nombre;
      tipo.Estado = req.body.Estado;
      tipo.createdAt = new Date();
      tipo.updatedAt = new Date();

      tipo = await tipo.save(); // Guardar en la base de datos
      res.send(tipo);

    } catch (error) {
      console.log(error);
      res.status(500).send('Mensaje Error');
    }

});

router.get('/',async function (req,res)  {
  try{
      const tipos = await Tipo.find();
      res.send(tipos);
 
  } catch (error){
      console.log(error);
      res.status(500).send('Mensaje error')
 
  }

});

module.exports = router;