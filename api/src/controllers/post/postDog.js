const { Dog, Temperament } = require("../../db");


const postDog = async (name, min_weight, max_weight, min_height, max_height, life_span, temperament, image, createInDb) => {
        const newDog = await Dog.create({
            name,
            min_weight,
            max_weight,
            min_height,
            max_height,
            life_span,
            image,
            createInDb
        });

        let temperamentsDb = await Temperament.findAll({
            where: { name: temperament }
        });
        
        await newDog.addTemperament(temperamentsDb)
        return newDog;
    };



module.exports = {
    postDog
}





