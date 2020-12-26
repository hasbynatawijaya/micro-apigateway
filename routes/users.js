const express = require("express");
const router = express.Router();

const verifyToken = require("../middlewares/verifyToken");

const usersHandler = require("./handler/users");

router.post("/register", usersHandler.register);
router.post("/login", usersHandler.login);
router.put("/", verifyToken, usersHandler.update);
router.get("/", verifyToken, usersHandler.getUser);
router.post("/logout", verifyToken, usersHandler.logout);

module.exports = router;
