const express = require('express');
const router = express.Router();

const newsConller = require('../app/controllers/NewsController')

router.use('/:slug', newsConller.show)
router.use('/', newsConller.index)

module.exports = router;