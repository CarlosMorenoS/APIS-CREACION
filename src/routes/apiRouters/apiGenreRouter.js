const express = require('express');
const router = express.Router();
const controller = require('../../controllers/apiControllers/apiGenreController');

router.get('/genres', controller.list);
router.get('/genres/:id', controller.detail);

module.exports = router;