const express = require("express");
const router = express.Router();

const controller = require("../controllers/userController");

router.get("", controller.getAll);
router.post("", controller.add);
router.get("/donation", controller.getDonation);
router.get("/trade", controller.getTrade);
router.get("/:id", controller.getById);
router.delete("/:id", controller.remove);
router.post("/:userId/books", controller.addBook);
router.delete("/:userId/books/:bookId", controller.removeBook);
router.patch("/:userId/books/:bookId", controller.updateBook);




module.exports = router;