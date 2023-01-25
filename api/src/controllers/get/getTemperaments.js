const axios = require("axios");
const { API_KEY } = process.env;
require("dotenv").config();
const { Temperament } = require("../../db");

const getTemperaments = async () => {
// const url = await axios.get(`https://api.thedogapi.com/v1/breeds?api`);
   const url = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
   const temps = await url.data;
   let temperament = temps
   .map(t => t.temperament)
   .join(", ")
   .split(", ")
   .sort()
   .filter(t => t != "")


   temperament.map( (t) => {
     Temperament.findOrCreate({
        where: {
            name: t,
        },
    });
   });

   const dbTemps = await Temperament.findAll();
   return dbTemps;
};


module.exports = {
    getTemperaments
}