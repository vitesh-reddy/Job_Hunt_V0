const express = require('express');
const router = express.Router();
const coverLetterController = require('../controllers/coverLetter.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.use(authMiddleware);

router.post('/add', coverLetterController.addCoverLetter);
router.get('/all', coverLetterController.getAllCoverLetters);
router.put('/update/:id', coverLetterController.updateCoverLetter);
router.delete('/delete/:id', coverLetterController.deleteCoverLetter);

module.exports = router;