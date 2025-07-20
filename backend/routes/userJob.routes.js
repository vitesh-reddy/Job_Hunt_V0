const express = require('express');
const router = express.Router();
const userJobController = require('../controllers/userJob.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.use(authMiddleware);

router.post('/add', userJobController.addJob);
router.get('/all-jobs', userJobController.getAllJobs);
router.post('/update-status', userJobController.changeJobStatus);
router.put('/update-status-date', userJobController.changeStatusDate);
router.post('/create-status', userJobController.createStatus);
router.put('/update-status', userJobController.updateStatus);
router.delete('/delete-status', userJobController.deleteStatus);

module.exports = router;