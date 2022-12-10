const lenguaje = require('../models/lenguajes')


      const getLenguajes = async (req, res) => {
        let allLenguajes = {};
     try {
        allLenguajes = await lenguaje.find({}); 
     } catch (err) {
         console.log(err);
         return res.status(400).json({message: 'Huvo un error'});
     }
     return res.status(200).json(allLenguajes);
     }
     
     const getLenguaje = async (req, res) => {
         let lenguajeSearched = null;
         let lenguajeId = req.params.id;
         try {
            lenguajeSearched = await lenguaje.findById(lenguajeId);
         } catch (err) {
             console.error(err);
             if (!lenguajeSearched) {
                 return res.status(404).json({message: 'Error, el lenguaje que estas buscando no existe'})
             } else {
                 return res.status(400).json({message: 'Huvo un error'})
             };
         };
         return res.status(200).json(lenguajeSearched);
     };

     module.exports = {
        getAll: getLenguajes,
        getOne: getLenguaje
     }

 