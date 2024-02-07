const express = require('express');
const router = express.Router();

const applicantController = require('../controllers/applicant.controller');
// const { isAdmin } = require('../middlewares/is-Admin');
// const isAuth = require('../middlewares/is-Auth').isAuth;

router.get('/', applicantController.getApplicants);

module.exports = router;
