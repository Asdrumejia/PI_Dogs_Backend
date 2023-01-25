const { Router } = require('express');
const { putDog } = require('../../controllers/put/putDog');


const router = Router();


router.put('/:id', async (req, res) => {
    try {
       const {id} = req.params
       const {name, min_height, max_height, min_weight, max_weight, life_span, image, temperament} = req.body 
       if(!name || !min_height || !max_height || !min_weight || !max_weight || !life_span || !temperament){
          res.status(404).send("Missing data to modify this dog")
       }else{
          const dogUpdated = await putDog(id, name, min_height, max_height, min_weight, max_weight, life_span, image, temperament)
          res.status(200).send("Successfully modified dog")
       }
    } catch (error) {
        res.status(400).send(error.message)
    }
});


module.exports = router;

