

const { Router } = require('express');
const router = Router();
const { 
    bienvenidaHome,
    nosotrosHome,
    loginHome
} = require('../controllers/homeControler')


router.get('/', bienvenidaHome);

router.get('/nosotros', nosotrosHome,
);

router.post('/login', loginHome)

module.exports = router;






