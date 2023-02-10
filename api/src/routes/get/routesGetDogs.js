const { Router } = require("express");
const { getDogsApi, getInfoAll } = require("../../controllers/get/getDogs");


const router = Router();


router.get("/", async(req, res) => {
    const {name} = req.query;
    const dogs = await getInfoAll();
    try {
        if(name){
           let filterDog = dogs.filter(d => d.name.toLowerCase().includes(name.toLocaleLowerCase()));
           filterDog.length ? res.status(200).send(filterDog) : res.status(404).send("Dog not found");
        }else{
            res.status(200).send(dogs);
        }
    } catch (error) {
        res.status(404).send("Failed request");
    }
});


router.get("/:id", async (req, res) => {
   //  const id = req.params.id;
       const {id} = req.params;
       try {
           const dogs = await getInfoAll()
           if(id) {
            const dogId = await dogs.filter(d => d.id == id);
            dogId.length 
            ? res.status(200).send(dogId)
            : res.status(404).send("Dog not found");
           }
       } catch (error) {
           res.status(404).send(error.message);
       }
});


module.exports = router;

  