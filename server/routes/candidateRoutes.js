const express = require("express");
const {
	registerCandidate,
	loginCandidate,
	getCandidateProfile,
} = require("../controllers/candidateController");

const router = express.Router();

router.post("/register", registerCandidate);
router.post("/login", loginCandidate);
router.get("/profile", getCandidateProfile);

module.exports = router;
