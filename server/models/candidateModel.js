const mongoose = require("mongoose");

const candidateSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Please add the candidate name"],
		},
		email: {
			type: String,
			required: [true, "Please add the candidate email address"],
			unique: [true, "Email address already taken"],
		},
		password: {
			type: String,
			required: [true, "Please add the candidate password"],
		},
		aadhaarNo: {
			type: String,
			required: [true, "Please add the candidate aadhar number"],
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
			required: [true, "Please add the candidate pincode"],
		},
		aadhaarPhoto: {
			type: String,
			required: [true, "Please add the candidate aadhaar front image"],
		},
		userPhoto: {
			type: String,
			required: [true, "Please add the candidate real photo"],
		},
		partyName: {
			type: String,
			required: [true, "Please add the candidate party name"],
		},
		partyLogo: {
			type: String,
			required: false,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Candidate", candidateSchema);
