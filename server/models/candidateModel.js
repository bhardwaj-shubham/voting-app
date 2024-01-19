const mongoose = require("mongoose");

const candidateSchema = mongoose.Schema(
	{
		candidatename: {
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
		aadharNo: {
			type: String,
			required: [true, "Please add the candidate aadhar number"],
			unique: [true, "Aadhar number already taken"],
		},
		dateOfBirth: {
			type: Date,
			required: [true, "Please add the candidate date of birth"],
		},
		address: {
			type: String,
			required: [true, "Please add the candidate address"],
		},
		pincode: {
			type: String,
			required: [true, "Please add the candidate pincode"],
		},
		aadharFront: {
			type: String,
			required: [false, "Please add the candidate aadhar front image"],
		},
		realPhoto: {
			type: String,
			required: [false, "Please add the candidate real photo"],
		},
		partyName: {
			type: String,
			required: [true, "Please add the candidate party name"],
		},
		partyLogo: {
			type: String,
			required: [false, "Please add the candidate party logo"],
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Candidate", candidateSchema);
