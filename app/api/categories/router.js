const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/categories', (req, res, next) => {
    res.status(200).json({
        message: 'categories API'
    });
});

module.exports = router;
