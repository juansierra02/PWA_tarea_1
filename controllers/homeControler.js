

const bienvenidaHome = (req, res) => {
    res.send(`Buenas noches, bienvenido a la App`)
}


const nosotrosHome = (req, res) => {
    res.send(`Somos los productos`)
}


const loginHome = (req, res) => {

    const {usuario, pasword } = req.body;

    console.log(`nombre de Usuario: ${usuario} y contraseña ${pasword}`);

    res.send(`Login de pagina`);
}

module.exports = {
    bienvenidaHome,
    nosotrosHome,
    loginHome
}