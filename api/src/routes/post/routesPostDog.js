const { Router } = require("express");
const { postDog } = require("../../controllers/post/postDog");


const router = Router();


router.post("/", async (req, res) => {
    const { name, min_weight, max_weight, min_height, max_height, life_span, temperament, image } = req.body;
    try {
        if(!name || !min_weight || !max_weight || !min_height || !max_height || !life_span || !temperament || !image){
            return res.status(404).json('Missing data to create Dog');
        }
        const newDog = await postDog(name, min_weight, max_weight, min_height, max_height, life_span, temperament, image);
        res.status(200).send(newDog);
    } catch (error) {
        res.status(404).send(error.message)  
     }
});


module.exports = router;