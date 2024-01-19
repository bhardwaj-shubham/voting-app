const mongoose = require("mongoose");

const voterSchema = mongoose.Schema(
	{
		votername: {
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
		aadharNo: {
			type: String,
			required: [true, "Please add the user aadhar number"],
			unique: [true, "Aadhar number already taken"],
		},
		dateOfBirth: {
			type: Date,
			required: [true, "Please add the user date of birth"],
		},
		address: {
			type: String,
			required: [true, "Please add the user address"],
		},
		pincode: {
			type: String,
			required: [true, "Please add the user pincode"],
		},
		aadharFront: {
			type: String,
			required: [false, "Please add the user aadhar front image"],
		},
		realPhoto: {
			type: String,
			required: [false, "Please add the user real photo"],
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Voter", voterSchema);
