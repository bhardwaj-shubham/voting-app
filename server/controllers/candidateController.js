const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const Candidate = require("../models/candidateModel");

const registerCandidate = asyncHandler(async (req, res) => {
	console.log("Candidate register data", req.body);

	const { aadhaarNo, password } = req.body;

	const candidateExists = await Candidate.findOne({ aadhaarNo });

	if (candidateExists) {
		return res.status(400).send("Candidate already exists");
	}

	const hashedPassword = await bcrypt.hash(password, 10);

	try {
		const candidate = await Candidate.create({
			...req.body,
			password: hashedPassword,
		});

		if (candidate) {
			return res.status(201).json(candidate);
		} else {
			throw new Error();
		}
	} catch (error) {
		return res.status(400).json({ message: "Invalid candidate data" });
	}
});

const loginCandidate = asyncHandler(async (req, res) => {
	const { aadhaarNo, password } = req.body;

	if (!aadhaarNo || !password) {
		return res.status(400).send("Please enter all the fields");
	}

	try {
		const candidate = await Candidate.findOne({ aadhaarNo });

		if (!candidate) {
			throw new Error();
		}

		if (candidate && (await bcrypt.compare(password, candidate.password))) {
			return res.status(200).json({
				_id: candidate._id,
				name: candidate.name,
				aadhaarNo: candidate.aadhaarNo,
			});
		} else {
			throw new Error();
		}
	} catch (error) {
		return res.status(401).send("Invalid aadhar number or password");
	}
});

const getCandidateProfile = asyncHandler(async (req, res) => {
	console.log("Candidate Profile data", req.query);

	try {
		const candidate = await Candidate.findById(req.query.id);

		if (!candidate) {
			throw new Error();
		}

		return res.status(200).json({
			_id: candidate._id,
			name: candidate.name,
			aadhaarNo: candidate.aadhaarNo,
		});
	} catch (error) {
		return res.status(401).send("Invalid aadhar number or password");
	}
});

module.exports = { registerCandidate, loginCandidate, getCandidateProfile };
