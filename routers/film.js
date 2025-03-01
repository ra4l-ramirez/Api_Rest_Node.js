// const {Router} = require('express');
// const Films = require('../models/Films');
// const {validationResut,check, validationResult} = require('express-validator');


// const router = Router();
// router.post('/', [

//     check('title', 'invalid.title').not().isEmpty(),
//     check('State','invalid.State').not().isIn(['active', 'inactive']),
//     check('genre', 'invalid.genre').not().isEmpty(),
//     check('name', 'invalid.name').not().isEmpty(),
//     check('Last_name', 'invlid.Last_name').not().isEmpty(),
//     check('Nationality', 'invalid.Nationality').not().isEmpty(),

// ],
//      async function(req,res){
//         try{
//             const errors = validationResult(req);
//             if (!errors.isEmpty()){
//                 return res.status(400).json({messge:errors.array()});
//             }
//         let films = new Films();
//         Films.title = req.body.title;
//         films.State = req.body.State;
//         films.genre = req.body.genre;
//         films.name =req.body.name;
//         films.Last_name = req.body.Last_name;
//         films.Nationality = req.body.Nacionality;
//         films.createdAt = new Date();
//         films.updatedAt = new Date();

//         }catch(error){
//             console.log(error);
//             res.status(500).send('message error')

//         }
//   
// });


 //module.exports= router;

const { Router } = require('express');
const Film = require('../models/Film');
const { check, validationResult } = require('express-validator'); // ❌ Se importaba mal "validationResut"

const router = Router();

router.post(
  '/',
  [
    check('title', 'Invalid title').not().isEmpty(),
    check('State', 'Invalid State').isIn(['active', 'inactive']), // ❌ Había un .not().isIn(...)
    check('genre', 'Invalid genre').not().isEmpty(),
    check('name', 'Invalid name').not().isEmpty(),
    check('Last_name', 'Invalid Last_name').not().isEmpty(),
    check('Nationality', 'Invalid Nationality').not().isEmpty(),
  ],
  async function (req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: errors.array() }); // ❌ "messge" estaba mal escrito
      }

      let films = new Film();
      film.title = req.body.title;
      film.tate = req.body.State;
      film.genre = req.body.genre;
      film.name = req.body.name;
      film.Last_name = req.body.Last_name;
      film.Nationality = req.body.Nationality; // ❌ "Nacionality" estaba mal escrito
      film.createdAt = new Date();
      fil.updatedAt = new Date();

      await films.save(); // Guardar en la base de datos

      res.status(201).json({ message: 'Film saved successfully', film: film });
      console.log(req.body);
    } catch (error) {
      console.log(error);
      res.status(500).send('Server error');
    }
  }
);

router.get('/',async function (req,res)  {
  try{
      const film = await Films.find();
      res.send(film);
 
  } catch (error){
      console.log(error);
 
  }
 
      res.send('obteniendo')
  });

module.exports = router;
