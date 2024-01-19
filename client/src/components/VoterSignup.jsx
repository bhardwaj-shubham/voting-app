import { useState } from "react";
import "./signup.css";

const VoterSignup = () => {
	const [formData, setFormData] = useState({
		votername: "",
		email: "",
		password: "",
		aadharNo: "",
		dateOfBirth: "",
		address: "",
		pincode: "",
		aadharFront: "",
	});

	const handleChange = (e) => {
		const { name, value, files } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: files ? files[0] : value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Add your form submission logic here
		console.log(formData);
	};

	return (
		<div>
			<h1>Signup Form</h1>
			<form onSubmit={handleSubmit}>
				<label>
					Aadhar No:
					<input
						type="number"
						name="aadharNo"
						value={formData.aadharNo}
						onChange={handleChange}
						required
					/>
				</label>

				<label>
					Password:
					<input
						type="password"
						name="password"
						value={formData.password}
						onChange={handleChange}
						required
					/>
				</label>

				<label>
					Name:
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleChange}
						required
					/>
				</label>

				<label>
					Date of Birth:
					<input
						type="date"
						name="dob"
						value={formData.dob}
						onChange={handleChange}
						required
					/>
				</label>

				<label>
					Address:
					<input
						type="text"
						name="area"
						value={formData.area}
						onChange={handleChange}
					/>
				</label>

				<label>
					Pincode:
					<input
						type="number"
						name="pincode"
						value={formData.pincode}
						onChange={handleChange}
						required
					/>
				</label>

				<label>
					User Type:
					<select
						name="userType"
						required
						onChange={handleUserTypeChange}
						value={userType}
					>
						<option value="">Select User Type</option>
						<option value="admin">Admin</option>
						<option value="voter">Voter</option>
						<option value="candidate">Candidate</option>
					</select>
				</label>

				<div>You selected {userType}</div>

				<label>
					Aadhar Card Photo:
					<input
						type="file"
						name="aadharCardPhoto"
						accept="image/*"
						onChange={handleChange}
						required
					/>
				</label>

				<label>
					User Photo:
					<input
						type="file"
						name="userPhoto"
						accept="image/*"
						onChange={handleChange}
						required
					/>
				</label>

				<label>
					Aadhar Card Photo:
					<input
						type="file"
						name="aadharCardPhoto"
						accept="image/*"
						onChange={handleChange}
						required
					/>
				</label>

				<button type="submit">Sign Up</button>
				<button> Login</button>
			</form>
		</div>
	);
};

export default Signup;
