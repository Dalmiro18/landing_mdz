const express = require('express');
const router = express.Router();
const imageCtrl = require('../controllers/images.controller');
const multer = require('../libs/multer')

router.get('/', imageCtrl.getImages);
router.post('/', multer.single('image'), imageCtrl.createImage);
router.delete('/:id', imageCtrl.deleteImage);

module.exports = router;