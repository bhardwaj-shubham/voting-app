const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const Voter = require("../models/voterModel");

const registerVoter = asyncHandler(async (req, res) => {
	console.log("Voter Register data", req.body);

	const { aadhaarNo, password } = req.body;

	const voterExists = await Voter.findOne({ aadhaarNo });

	if (voterExists) {
		return res.status(400).send("Voter already exists");
	}

	const hashedPassword = await bcrypt.hash(password, 10);

	try {
		const voter = await Voter.create({
			...req.body,
			password: hashedPassword,
		});

		if (voter) {
			return res.status(201).json(voter);
		} else {
			throw new Error();
		}
	} catch (error) {
		return res.status(400).json({ message: "Invalid voter data" });
	}
});

const loginVoter = asyncHandler(async (req, res) => {
	const { aadhaarNo, password } = req.body;

	if (!aadhaarNo || !password) {
		return res.status(400).send("Please enter all the fields");
	}

	try {
		const voter = await Voter.findOne({ aadhaarNo });

		if (!voter) {
			throw new Error();
		}

		if (voter && (await bcrypt.compare(password, voter.password))) {
			return res.status(200).json({
				_id: voter._id,
				name: voter.name,
				aadhaarNo: voter.aadhaarNo,
			});
		} else {
			throw new Error();
		}
	} catch (error) {
		return res.status(401).send("Invalid aadhar number or password");
	}
});

const getVoterProfile = asyncHandler(async (req, res) => {
	console.log("Voter Profile data", req.query);

	try {
		const voter = await Voter.findById(req.query.id);

		if (!voter) {
			throw new Error();
		}

		return res.status(200).json({
			_id: voter._id,
			name: voter.name,
			aadhaarNo: voter.aadhaarNo,
		});
	} catch (error) {
		return res.status(401).send("Invalid aadhaar number or password");
	}
});

module.exports = { registerVoter, loginVoter, getVoterProfile };
