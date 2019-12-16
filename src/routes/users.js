const express = require("express");
const router = express.Router();

const controller = require("../controllers/userController");

router.get("", controller.getAll);
router.post("", controller.add);
router.get("/donations", controller.getDonation);
router.get("/:id", controller.getById);
router.delete("/:id", controller.remove);


module.exports = router;