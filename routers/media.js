const { Router } = require('express');
const Media = require('../models/Media');
const { validationResult, check} = require('express-validator');

const router = Router();

router.post('/', [
  check('Serial','invalid.Serial').not().isEmpty(),
  check('Titulo','invalid.Titulo').not().isEmpty(),
  check('Sinopsis','invalid.Sinopsis').not().isEmpty(),
  check('Url','invalid.Url').not().isEmpty(),
  check('Imagen','invalid.Imagen').not().isEmpty(),
  check('Estreno','invalid.Estreno').not().isEmpty(),
  check('Genero','invalid.Genero').not().isEmpty(),
  check('Director','invalid.Director').not().isEmpty(),
  check('Productora','invalid.Productora').not().isEmpty(),
  check('Tipo','invalid.Tipo').not().isEmpty()
], async function (req, res) {
    
  try {      
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array() });
    }

    let media = new Media();
    media.Serial = req.body.Serial;
    media.Titulo = req.body.Titulo;
    media.Sinopsis = req.body.Sinopsis;
    media.Url = req.body.Url;
    media.Imagen = req.body.Imagen;
    media.Estreno = req.body.Estreno;
    media.Genero = req.body.Genero._id;
    media.Director = req.body.Director._id;
    media.Productora = req.body.Productora._id;
    media.Tipo = req.body.Tipo._id;
    media.createdAt = new Date();
    media.updatedAt = new Date();

    media = await media.save(); // Guardar en la base de datos
    res.send(media);

  } catch (error) {
    console.log(error);
    res.status(500).send('Mensaje Error');
  }

});

router.get('/', async function(req, res) {
  try {
      const medias = await Media.find().populate([
          {
              path: 'Genero', select: 'Nombre Estado'
          },
          {
              path: 'Director', select: 'Nombre Estado'
          },
          {
              path: 'Productora', select: 'Nombre Estado'
          },
          {
              path: 'Tipo', select: 'Nombre Estado'
          }

      ]); //select * from users;
      res.send(medias);

  } catch (error) {
      console.log(error);
      res.status(500).send('Mensaje Error')
  }
});


module.exports = router;