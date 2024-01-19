const mongoose = require("mongoose");

const adminSchema = mongoose.Schema(
	{
		adminname: {
			type: String,
			required: [true, "Please add the admin name"],
		},
		email: {
			type: String,
			required: [true, "Please add the admin email address"],
			unique: [true, "Email address already taken"],
		},
		password: {
			type: String,
			required: [true, "Please add the admin password"],
		},
		aadharNo: {
			type: String,
			required: [true, "Please add the admin aadhar number"],
			unique: [true, "Aadhar number already taken"],
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Admin", adminSchema);
