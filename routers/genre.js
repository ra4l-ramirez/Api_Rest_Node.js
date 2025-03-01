const { Router } = require('express');
const Genre = require('../models/Genre');
const { check, validationResult } = require('express-validator'); // ❌ Se importaba mal "validationResut"

const router = Router();

router.post(
  '/',
  [
    check('Name', 'Invalid Name').not().isEmpty(),
    check('State', 'Invalid State').isIn(['active', 'inactive']), // ❌ Había un .not().isIn(...)
    check('Title', 'Invalid Title').not().isEmpty(),
    check('Description', 'Invalid Description').not().isEmpty(),
   
  ],
  async function (req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: errors.array() }); // ❌ "messge" estaba mal escrito
      }

      let genre = new Genre();
      genre.Name = req.body.Name;
      genre.State = req.body.State;
      genre.Title= req.body.Title;
      genre.Description = req.body.Description;
      genre.createdAt = new Date();
      genre.updatedAt = new Date();

      await genre.save(); // Guardar en la base de datos

      res.status(201).json({ message: 'Genre saved successfully', genre});
      console.log(req.body);
    } catch (error) {
      console.log(error);
      res.status(500).send('Server error');
    }
  }
);

router.get('/',async function (req,res)  {
  try{
      const genre = await Genre.find();
      res.send(genre);
 
  } catch (error){
      console.log(error);
 
  }
 
      res.send('obteniendo')
  });

module.exports = router;