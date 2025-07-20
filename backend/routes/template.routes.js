const express = require('express');
const router = express.Router();
const templateController = require('../controllers/template.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.use(authMiddleware);

router.post('/add', templateController.addTemplate);
router.get('/all', templateController.getAllTemplates);
router.put('/update/:id', templateController.updateTemplate);
router.delete('/delete/:id', templateController.deleteTemplate);

module.exports = router;