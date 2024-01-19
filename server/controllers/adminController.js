const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const Admin = require("../models/adminModel");

const registerAdmin = asyncHandler(async (req, res) => {
	console.log(req.body);
	const {
		name,
		email,
		password,
		aadharNo,
		// dateOfBirth,
		// address,
		// pincode,
		// aadharFront,
		// realPhoto,
	} = req.body;

	const adminExists = await Admin.findOne({ aadharNo });

	if (adminExists) {
		return res.status(400).send("Admin already exists");
	}

	const hashedPassword = await bcrypt.hash(password, 10);
	const admin = await Admin.create({
		adminname: name,
		email,
		password: hashedPassword,
		aadharNo,
		// dateOfBirth,
		// address,
		// pincode,
		// aadharFront,
		// realPhoto,
	});

	if (admin) {
		return res.status(201).json({
			_id: admin._id,
			adminname: admin.adminname,
			email: admin.email,
			aadharNo: admin.aadharNo,
			// dateOfBirth: admin.dateOfBirth,
			// address: admin.address,
			// pincode: admin.pincode,
			// aadharFront: admin.aadharFront,
			// realPhoto: admin.realPhoto,
		});
	} else {
		return res.status(400).json({ message: "Invalid admin data" });
	}
});

const loginAdmin = asyncHandler(async (req, res) => {
	const { aadharNo, password } = req.body;

	if (!aadharNo || !password) {
		return res.status(400).send("Please enter all the fields");
	}

	const admin = await Admin.findOne({ aadharNo });

	if (admin && (await bcrypt.compare(password, admin.password))) {
		return res.status(200).json({
			_id: admin._id,
			adminname: admin.adminname,
			aadharNo: admin.aadharNo,
		});
	} else {
		return res.status(401).send("Invalid aadhar number or password");
	}
});

const getAdminProfile = asyncHandler(async (req, res) => {
	const admin = await Admin.find({ aadharNo: req.body.aadharNo });

	if (admin) {
		// return res.json({
		// 	_id: admin._id,
		// 	adminname: admin.adminname,
		// 	email: admin.email,
		// 	aadharNo: admin.aadhar,
		// dateOfBirth: admin.dateOfBirth,
		// address: admin.address,
		// pincode: admin.pincode,
		// aadharFront: admin.aadharFront,
		// realPhoto: admin.realPhoto,
		// });

		return res.status(200).json(admin);
	} else {
		return res.status(404).send("Candidate not found");
	}
});

module.exports = { registerAdmin, loginAdmin, getAdminProfile };
