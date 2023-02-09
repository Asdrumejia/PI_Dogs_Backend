const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getDogs = require("./get/routesGetDogs");
const getTemperaments = require("./get/routesGetTemperaments");
const postDog = require("./post/routesPostDog");
const putDog = require("./put/routesPutDog");
const deleteDog = require("./delete/routesDeleteDog");


const router = Router();


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/dogs", getDogs);

router.use("/temperaments", getTemperaments);

router.use("/dog", postDog);

router.use("/dog", putDog);

router.use("/dog", deleteDog);


module.exports = router;
