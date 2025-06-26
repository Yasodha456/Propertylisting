const express = require("express");
const router = express.Router();
const propertyController = require("../Controllers/propertyController");
const auth = require("../Middleware/authMiddleware");

router.get("/", propertyController.getProperties);
router.get("/:id", propertyController.getPropertyById);
router.post("/add", auth, propertyController.createProperty);

module.exports = router;
