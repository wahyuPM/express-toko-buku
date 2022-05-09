const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/auth', (req, res, next) => {
    res.status(200).json({
        message: 'Auth API'
    });
});

module.exports = router;
