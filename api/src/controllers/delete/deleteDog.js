const { Dog } = require("../../db");


const deleteDog = async function (id){
   const deleteDb = await Dog.findByPk(id)

   const destroyDog = deleteDb?.destroy() 

   return destroyDog;
};


module.exports = {
    deleteDog
}