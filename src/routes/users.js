const express = require("express");
const router = express.Router();

const controller = require("../controllers/userController");

router.get("", controller.getAll);
router.post("", controller.add);

module.exports = router;