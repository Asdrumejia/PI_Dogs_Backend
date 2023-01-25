const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const routesGetDogs = require("./get/routesGetDogs.js");
const routesGetTemperaments = require("./get/routesGetTemperaments");


const router = Router();


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/dogs", routesGetDogs);

router.use("/temperament", routesGetTemperaments);


module.exports = router;
