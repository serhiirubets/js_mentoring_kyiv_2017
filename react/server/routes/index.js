const express = require('express');

const router = express.Router();

const keepsController = require('../controllers/keeps');

router.get('/api/keeps/', keepsController.getAllKeeps);
router.get('/api/keeps/archive', keepsController.getArchivesKeep);
router.get('/api/keeps/:id', keepsController.getKeepById);
router.get('/api/keeps/:id/favorite', keepsController.addKeepFavorite);
router.get('/api/keeps/:id/archive', keepsController.addKeepToArchive);
router.get('/api/keeps/search/:query', keepsController.getKeepByQuery);
router.delete('/api/keeps/:id', keepsController.deleteKeep);
router.put('/api/keeps/:id', keepsController.updateKeep);
router.post('/api/keeps/add', keepsController.createKeep);

module.exports = router;
