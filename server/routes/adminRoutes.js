const express = require("express");
const {
	loginAdmin,
	getAdminProfile,
} = require("../controllers/adminController");

const router = express.Router();

router.post("/login", loginAdmin);
router.get("/profile", getAdminProfile);

module.exports = router;
