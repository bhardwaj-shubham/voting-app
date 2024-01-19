const express = require("express");
const {
	registerVoter,
	loginVoter,
	getVoterProfile,
} = require("../controllers/voterController");

const router = express.Router();

router.post("/register", registerVoter);
router.post("/login", loginVoter);
router.get("/profile", getVoterProfile);

module.exports = router;
