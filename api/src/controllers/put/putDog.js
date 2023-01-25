const { Dog } = require("../../db");


const putDog = async (id, name, min_height, max_height, min_weight, max_weight, life_span, image, temperament) => {
   const DogDb = await Dog.findByPk(id)

   DogDb?.update({
      name: name, 
      min_height: min_height, 
      max_height: max_height, 
      min_weight: min_weight, 
      max_weight: max_weight, 
      life_span: life_span, 
      image: image, 
      temperament: temperament
   }); 
   return DogDb
};


module.exports = {
    putDog
}

