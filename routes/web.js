const express = require("express");

const registerController = require("../controllers/register");
const loginController = require("../controllers/login");
const homeController = require("../controllers/home");

const router = express.Router();

router.get('/', homeController.welcome);
router.get('/home', homeController.show);
router.get('/welcome', homeController.index);

router.get('/login', loginController.showLoginForm);
router.post('/login', loginController.login);

router.get('/register', registerController.showRegistrationForm);
// router.post('/register', registerController.registerUser);


module.exports = router;
