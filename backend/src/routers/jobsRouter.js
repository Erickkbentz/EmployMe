const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log("Page with List of Jobs")
    res.send("job list")
})

router.get('/collections/job/:jobID', (req, res) => {
    console.log("Page with a Single Job")
    res.send("job")
})

module.exports = router;