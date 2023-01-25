const { Router } = require("express");
const { postDog } = require("../../controllers/post/postDog");


const router = Router();


router.post("/", async (req, res) => {
    const { name, min_weight, max_weight, min_height, max_height, life_span, image, temperament } = req.body
    try {
        const newDog = await postDog(name, min_weight, max_weight, min_height, max_height, life_span, image, temperament)
        res.status(200).send(newDog);
    } catch (error) {
        res.status(404).send(error.message)  
     }
});


module.exports = router;