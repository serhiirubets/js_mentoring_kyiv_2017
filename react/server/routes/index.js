const express = require('express');

const router = express.Router();

const keepsController = require('../controllers/keeps');

router.get('/api/keeps/', keepsController.getAllKeeps);
router.get('/api/keeps/:id', keepsController.getKeepById);
router.delete('/api/keeps/:id', keepsController.deleteKeep);
router.post('/api/keeps/add', keepsController.createKeep);

module.exports = router;
