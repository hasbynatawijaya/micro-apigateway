const express = require("express");
const router = express.Router();

const webHookHandler = require("./handler/webHook");

router.post("/", webHookHandler.webHook);

module.exports = router;
