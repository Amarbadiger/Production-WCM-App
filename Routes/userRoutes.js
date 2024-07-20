const express = require("express");
const {
  helloController,
  registerController,
  loginController,
  authController,
  getInputData,
  getData,
} = require("../Controller/userCtrl");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/hello", helloController);

router.post("/register", registerController);

router.post("/login", loginController);

router.post("/getUserdata", authMiddleware, authController);

router.post("/getInputData", authMiddleware, getInputData);

router.post("/getData", authMiddleware, getData);

module.exports = router;
