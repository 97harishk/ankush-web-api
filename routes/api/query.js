const express = require("express");
const router = express.Router();
const queryController = require("../../controllers/query_controller");
router.post("/send-query", queryController.sendQuery);
module.exports = router;
