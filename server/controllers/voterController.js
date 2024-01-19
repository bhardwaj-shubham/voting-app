const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const Voter = require("../models/voterModel");

const registerVoter = asyncHandler(async (req, res) => {
	console.log("Voter Register data", req.body);
	let {
		name,
		email,
		password,
		aadharNo,
		dateOfBirth,
		address,
		pincode,
		aadharFront,
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

	const voterExists = await Voter.findOne({ aadharNo });

	if (voterExists) {
		return res.status(400).send("Voter already exists");
	}

	const hashedPassword = await bcrypt.hash(password, 10);
	const voter = await Voter.create({
		votername: name,
		email,
		password: hashedPassword,
		aadharNo,
		dateOfBirth,
		address,
		pincode,
		aadharFront,
		// realPhoto,
	});

	if (voter) {
		return res.status(201).json({
			_id: voter._id,
			votername: voter.votername,
			email: voter.email,
			aadharNo: voter.aadharNo,
			dateOfBirth: voter.dateOfBirth,
			address: voter.address,
			pincode: voter.pincode,
			aadharFront: voter.aadharFront,
			// realPhoto: voter.realPhoto,
		});
	} else {
		return res.status(400).json({ message: "Invalid voter data" });
	}
});

const loginVoter = asyncHandler(async (req, res) => {
	const { aadharNo, password } = req.body;

	if (!aadharNo || !password) {
		return res.status(400).send("Please enter all the fields");
	}

	const voter = await Voter.findOne({ aadharNo });

	if (voter && (await bcrypt.compare(password, voter.password))) {
		return res.status(200).json({
			_id: voter._id,
			votername: voter.votername,
			aadharNo: voter.aadharNo,
		});
	} else {
		return res.status(401).send("Invalid aadhar number or password");
	}
});

const getVoterProfile = asyncHandler(async (req, res) => {
	// console.log("req.body", req.body.aadharNo);
	const voter = await Voter.find({ aadharNo: req.body.aadharNo });

	// console.log("voter", voter);

	if (voter) {
		// return res.status(200).json({
		// 	_id: voter._id,
		// 	votername: voter.votername,
		// 	email: voter.email,
		// 	aadhar: voter.aadhar,
		// 	dateOfBirth: voter.dateOfBirth,
		// 	address: voter.address,
		// 	pincode: voter.pincode,
		// 	aadharFront: voter?.aadharFront,
		// realPhoto: voter.realPhoto,
		// });

		return res.status(200).json(voter);
	} else {
		return res.status(404).send("Voter not found");
	}
});

module.exports = { registerVoter, loginVoter, getVoterProfile };
