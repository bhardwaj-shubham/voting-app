const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const Candidate = require("../models/candidateModel");

const registerCandidate = asyncHandler(async (req, res) => {
	console.log("Candidate register data", req.body);
	let {
		name,
		email,
		password,
		aadharNo,
		dateOfBirth,
		address,
		pincode,
		aadharFront,
		partyName,
		partyLogo,
		// realPhoto,
	} = req.body;

	if (
		aadharFront === undefined ||
		aadharFront === null ||
		Object.keys(aadharFront).length === 0
	) {
		aadharFront = "";
	}

	console.log("aadharFront", aadharFront);

	const candidateExists = await Candidate.findOne({ aadharNo });

	if (candidateExists) {
		return res.status(400).send("Candidate already exists");
	}

	const hashedPassword = await bcrypt.hash(password, 10);
	const candidate = await Candidate.create({
		candidatename: name,
		email,
		password: hashedPassword,
		aadharNo,
		dateOfBirth,
		address,
		pincode,
		aadharFront,
		partyName,
		partyLogo,
		// realPhoto,
	});

	if (candidate) {
		return res.status(201).json({
			_id: candidate._id,
			candidateName: candidate.candidatename,
			email: candidate.email,
			aadharNo: candidate.aadharNo,
			dateOfBirth: candidate.dateOfBirth,
			address: candidate.address,
			pincode: candidate.pincode,
			aadharFront: candidate.aadharFront,
			partyName: candidate.partyName,
			partyLogo: candidate.partyLogo,
			// realPhoto: candidate.realPhoto,
		});
	} else {
		return res.status(400).json({ message: "Invalid candidate data" });
	}
});

const loginCandidate = asyncHandler(async (req, res) => {
	const { aadharNo, password } = req.body;

	if (!aadharNo || !password) {
		return res.status(400).send("Please enter all the fields");
	}

	const candidate = await Candidate.findOne({ aadharNo });

	if (candidate && (await bcrypt.compare(password, candidate.password))) {
		return res.status(200).json({
			_id: candidate._id,
			candidate: candidate.candidatename,
			aadharNo: candidate.aadharNo,
		});
	} else {
		return res.status(401).send("Invalid aadhar number or password");
	}
});

const getCandidateProfile = asyncHandler(async (req, res) => {
	const candidate = await Candidate.find({ aadharNo: req.body.aadharNo });

	if (candidate) {
		// return res.json({
		// 	_id: candidate._id,
		// 	candidatename: candidate.candidatename,
		// 	email: candidate.email,
		// 	aadharNo: candidate.aadharNo,
		// 	dateOfBirth: candidate.dateOfBirth,
		// 	address: candidate.address,
		// 	pincode: candidate.pincode,
		// 	aadharFront: candidate.aadharFront,
		// 	partyName: candidate.partyName,
		// 	partyLogo: candidate.partyLogo,
		// 	// realPhoto: candidate.realPhoto,
		// });

		return res.status(200).json(candidate);
	} else {
		return res.status(404).send("Candidate not found");
	}
});

module.exports = { registerCandidate, loginCandidate, getCandidateProfile };
