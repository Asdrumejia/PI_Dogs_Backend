const axios = require("axios");
const { Dog, Temperament } = require("../../db");
const { API_KEY } = process.env;


const getDogsApi = async () => {
//  const url = await axios.get(`https://api.thedogapi.com/v1/breeds?api`);
    const url = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
    const apiInfo = await url.data.map(d => {
        return {
            id: d.id,
            name: d.name,
            min_weight: (d.weight.metric.split("-")[0].trim() === "NaN") ? "1" : d.weight.metric.split("-")[0].trim(),
            max_weight: (d.weight.metric.split("-").reverse()[0].trim() === "NaN") ? "1" : d.weight.metric.split("-").reverse()[0].trim(),
            min_height: (d.height.metric.split("-")[0].trim()),
            max_height: (d.height.metric.split("-").reverse()[0].trim()),
            life_span: d.life_span,
            temperaments: d.temperament,
            image: d.image.url
        }
    })
   return apiInfo;
};


const getInfoDb = async () => { 
    const infodb = await Dog.findAll({
    include:{
         model: Temperament,
         attributes: ['name'],
         through: {attributes : []}
    } 
})
   return infodb;
};


const getInfoAll = async () => {
    const apiInfo = await getDogsApi();
    const dbInfo = await getInfoDb();
    const totalInfo = apiInfo.concat(dbInfo);
    return totalInfo;
};


module.exports = {
   getInfoAll
}



