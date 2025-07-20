const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.use(authMiddleware)

// Defines user-related routes
router.get('/all', userController.getCurrentUser);
router.put('/basic-details', userController.updateBasicDetails);
router.put('/bio', userController.updateBio);
router.put('/skills', userController.updateSkills);
router.put('/roles', userController.updateRoles);
router.put('/job-types', userController.updateJobTypes);
router.put('/expected-salary', userController.updateExpectedSalary);
router.put('/job-locations', userController.updateJobLocations);
router.put('/work-experience', userController.updateWorkExperience);
router.put('/password', userController.updatePassword);
router.post('/identifier/otp', userController.sendIdentifierOtp);
router.put('/identifier', userController.updateIdentifier);

module.exports = router;