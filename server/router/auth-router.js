const express = require('express');
const router = express.Router();


// router.get('/', (req, res) => {
//     res.status(200).send("Welcome to world best mern series by Sailesh using router");
// });

router.route("/").get((req, res) => {
    res.status(200).send("Welcome to world best mern series by Sailesh using router");
});

router.route("/register").get((req, res) => {
    res.status(200).send("Welcome to Register page.");
});

module.exports = router;