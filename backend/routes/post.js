const express = require('express');
const router = express.Router();
const postCtrl = require('../controller/post');
const auth = require('../middleware/auth');

router.post('/', postCtrl.createPost);

module.exports = router;