const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const routesGetDogs = require("./get/routesGetDogs");
const routesGetTemperaments = require("./get/routesGetTemperaments");
const routesPostDog = require("./post/routesPostDog");
const routesPutDog = require("./put/routesPutDog");
const routesDeleteDog = require('./delete/routesDeleteDog');


const router = Router();


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/dogs", routesGetDogs);

router.use("/temperament", routesGetTemperaments);

router.use("/dog", routesPostDog);

router.use("/dog", routesPutDog);

router.use("/dog", routesDeleteDog);


module.exports = router;
