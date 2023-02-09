const { Router } = require("express");
const { getTemperaments } = require("../../controllers/get/getTemperaments");


const router = Router();


router.get("/", async(req, res) => {
    const { name } = req.query;
    const temperaments = await getTemperaments();
    try {
        if(name){
           let filterTemperament = temperaments.filter(t => t.name.toLowerCase().includes(name.toLocaleLowerCase()));
           filterTemperament.length ? res.status(200).send(filterTemperament) : res.status(404).send("Temperament not found");
        }
        else{
            res.status(200).send(temperaments);
        }
    } catch (error) {
        res.status(404).send("Failed request");
    }
});


module.exports = router;