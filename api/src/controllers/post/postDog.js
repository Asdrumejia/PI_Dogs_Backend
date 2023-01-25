const { Dog, Temperament } = require("../../db");


const postDog = async (name, min_weight, max_weight, min_height, max_height, life_span, image, temperament) => {
    if(!name || !min_weight || !max_weight || !min_height || !max_height || !life_span || !image || !temperament){
        throw Error("Missing data to create Dog")
    }else {
        const newDog = await Dog.create({
            name,
            min_weight,
            max_weight,
            min_height,
            max_height,
            life_span,
            image
        });

        let temperamentDb = await Temperament.findAll({
            where: { name: temperament.length ? temperament : temperament.map(t => t.name) }
        });
        
        await newDog.addTemperament(temperamentDb)
        return newDog
    }
 };


module.exports = {
    postDog
}





