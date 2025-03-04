const { Router } = require('express');
const Productora = require('../models/Productora');
const { validationResult, check} = require('express-validator');

const router = Router();

router.post('/',  [
    check('Nombre', 'Invalid Nombre').not().isEmpty(),
    check('Estado', 'Invalid Estado').isIn(['Activo', 'Inactivo']),
    check('Slogan', 'Invalid Slogan').not().isEmpty(),
    check('Descripcion', 'Invalid Descripcion').not().isEmpty(),
],  async function (req, res) {
    
    try {      
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: errors.array() });
      }

      let productora = new Productora();
      productora.Nombre = req.body.Nombre;
      productora.Estado = req.body.Estado;
      productora.Slogan = req.body.Slogan;
      productora.Descripcion = req.body.Descripcion;
      productora.createdAt = new Date();
      productora.updatedAt = new Date();

      productora = await productora.save(); // Guardar en la base de datos
      res.send(productora);

    } catch (error) {
      console.log(error);
      res.status(500).send('Mensaje Error');
    }

});

router.get('/',async function (req,res)  {
  try{
      const productoras = await Productora.find();
      res.send(productoras);
 
  } catch (error){
      console.log(error);
      res.status(500).send('Mensaje error')
 
  }

});

//Update

router.put('/:productora_id',  [
  check('Nombre', 'Invalid Nombre').not().isEmpty(),
  check('Estado', 'Invalid Estado').isIn(['Activo', 'Inactivo']),
  check('Slogan', 'Invalid Slogan').not().isEmpty(),
  check('Descripcion', 'Invalid Descripcion').not().isEmpty(),
],  async function (req, res) {
  
  try {      
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array() }); 
    }
    let productora =await Productora.findById(req.params.productora_id);
    
    if (!productora) {
      return res.status(400).send("este ID no existe en productora"); 
    }

    const productoraExist = await Productora.findOne({ Nombre: req.body.Nombre });
    if (productoraExist) {
      return res.status(400).send('Productora ya Existe')
    }

    productora.Nombre = req.body.Nombre;
    productora.Estado = req.body.Estado;
    productora.Slogan = req.body.Slogan;
    productora.Descripcion = req.body.Descripcion;
    productora.updatedAt = new Date();
    
    productora = await productora.save(); // Guardar en la base de datos
    res.send(productora);

  } catch (error) {
    console.log(error);
    res.status(500).send('Mensaje Error');
  }

});


module.exports = router;