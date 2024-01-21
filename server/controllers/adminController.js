const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const Admin = require("../models/adminModel");

// const registerAdmin = asyncHandler(async (req, res) => {
// 	const { name, email, password } = req.body;

// 	const adminExists = await Admin.findOne({ email });

// 	if (adminExists) {
// 		return res.status(400).send("Admin already exists");
// 	}

// 	const hashedPassword = await bcrypt.hash(password, 10);

// 	try {
// 		const admin = await Admin.create({
// 			...req.body,
// 			password: hashedPassword,
// 		});

// 		if (admin) {
// 			return res.status(201).json(admin);
// 		} else {
// 			throw new Error();
// 		}
// 	} catch (error) {
// 		return res.status(400).json({ message: "Invalid admin data" });
// 	}
// });

const loginAdmin = asyncHandler(async (req, res) => {
	const { email, password } = req.body;

	if (!email || !password) {
		return res.status(400).send("Please enter all the fields");
	}

	try {
		const admin = await Admin.findOne({ email });

		if (!admin) {
			throw new Error();
		}

		if (admin && (await bcrypt.compare(password, admin.password))) {
			return res.status(200).json({
				_id: admin._id,
				name: admin.name,
				email: admin.email,
			});
		} else {
			throw new Error();
		}
	} catch (error) {
		return res.status(401).send("Invalid email or password");
	}
});

const getAdminProfile = asyncHandler(async (req, res) => {
	console.log("Admin Profile data", req.query);

	try {
		const admin = await Admin.findById(req.query.id);

		if (!admin) {
			throw new Error();
		}

		return res.status(200).json({
			_id: admin._id,
			name: admin.name,
			email: admin.email,
		});
	} catch (error) {
		return res.status(401).send("Invalid email or password");
	}
});

module.exports = { loginAdmin, getAdminProfile };
