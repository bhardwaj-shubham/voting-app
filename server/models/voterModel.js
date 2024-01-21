const mongoose = require("mongoose");

const voterSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Please add the user name"],
		},
		email: {
			type: String,
			required: [true, "Please add the user email address"],
			unique: [true, "Email address already taken"],
		},
		password: {
			type: String,
			required: [true, "Please add the user password"],
		},
		aadhaarNo: {
			type: String,
			required: [true, "Please add the user aadhar number"],
			unique: [true, "Aadhar number already taken"],
		},
		dateOfBirth: {
			type: Date,
			required: false,
		},
		address: {
			type: String,
			required: false,
		},
		pincode: {
			type: String,
			required: [true, "Please add the user pincode"],
		},
		aadhaarPhoto: {
			type: String,
			required: [true, "Please add the user aadhaar front image"],
		},
		userPhoto: {
			type: String,
			required: [true, "Please add the user real photo"],
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Voter", voterSchema);
