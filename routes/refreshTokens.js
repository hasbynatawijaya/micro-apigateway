const express = require("express");
const router = express.Router();

const refreshTokenHandles = require("./handler/refresh-tokens");

router.post("/", refreshTokenHandles.refreshToken);

module.exports = router;
