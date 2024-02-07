const express = require('express');
const router = express.Router();

const professionController = require('../controllers/profession.controller');
// const { isAdmin } = require('../middlewares/is-Admin');
// const isAuth = require('../middlewares/is-Auth').isAuth;

router.get('/', professionController.getProfessions);

module.exports = router;
