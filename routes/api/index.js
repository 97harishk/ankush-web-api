const express = require("express");
const router = express.Router();
router.use("/query", require("./query"));
module.exports = router;
