let router = require("express").Router();
let Animal = require ("../models/animalModel")

router.get('/animal', (req, res)=>{
    Animal.find({}).exec(function(err, animal){
        if (err){
            res.status(500).send(err)
        }else{
        res.send(animal)
        }
    })
});

router.post('/animal', (req, res)=>{
    const newAnimal = new Animal (req.body)
    newAnimal.save(function(err , animal){
        if(err){
            res.status(500).send(err)
        }else{
        res.send(animal);
        }
    })
});

router.delete('/animal/:id', function(req, res){
    let id= req.params.id;
    Animal.findByIdAndRemove(id, function(err){
        if (err){
            res.status(500).send(err)
        };
        res.send("Removed!")
      })
});


module.exports = router;