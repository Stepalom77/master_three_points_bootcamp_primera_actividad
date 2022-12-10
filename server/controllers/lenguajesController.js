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

     const createLenguaje = async (req, res) => {
        let lenguajeCreated = null;
        let savedLenguaje = null;
        let { nombre, tipo,  año } = req.body
        try{
           lenguajeCreated = await lenguaje.create({
               nombre,
               tipo,
               año
           })
           savedLenguaje = await lenguajeCreated.save()
        } catch (err) {
            console.error(err);
            return res.status(400).json({message: 'Huvo un error'})
        };
        return res.status(201).json(savedLenguaje);
    };

    const updateLenguaje =  async (req, res) => {
        let lenguajeSearched = null;
        let lenguajeId = req.params.id;
        let lenguajeUpdated = null;
        try {
           lenguajeSearched =  await lenguaje.findById(lenguajeId);
           lenguajeUpdated =  await lenguaje.findByIdAndUpdate(lenguajeId, req.body, {
               new: true,
           })
        } catch (err) {
            console.error(err);
            return res.status(400).json({message: 'Huvo un error'})
        };
        if(!lenguajeSearched){
            return res.status(201).json(lenguajeUpdated)
        }
        return res.status(200).json(lenguajeUpdated);
    };

    const deleteLenguaje = async (req, res) => {
        let lenguajeDeleted = null;
        let lenguajeId = req.params.id;
        let lenguajeSearched = null;
        try {
           lenguajeSearched =  await lenguaje.findById(lenguajeId);
           lenguajeDeleted = await  lenguajeSearched.remove()
        } catch (err) {
            console.error(err);
            if(!lenguajeSearched) {
                return res.status(204).json({message: 'Error, el lenguaje que estas tratando de eliminar no fue encontrado'})
            } else {
                return res.status(400).json({message: 'Huvo un error'})
            }
        };
        return res.status(200).json({message: 'Lenguaje borrado'});
    }

     module.exports = {
        getAll: getLenguajes,
        getOne: getLenguaje,
        create: createLenguaje,
        update: updateLenguaje,
        delete: deleteLenguaje
     }

 