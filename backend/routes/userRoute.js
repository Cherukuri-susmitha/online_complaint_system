const express = require('express');
const {register,login,logout} = require('../controllers/userController');
const router = express.Router();
const app= express();
app.use(express.json());


router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);


module.exports = router;