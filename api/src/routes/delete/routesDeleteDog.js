const { Router } = require('express');
const { deleteDog } = require('../../controllers/delete/deleteDog');


const router = Router();


router.delete('/:id', async (req, res) => {
    try {
       const {id} = req.params
       const deleted = await deleteDog(id)
     res.status(200).send("Dog successfully deleted")
    } catch (error) {
        res.status(400).send(error.message)
    }
});


module.exports = router;