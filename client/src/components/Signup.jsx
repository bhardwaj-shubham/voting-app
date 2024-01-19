import { useState } from "react";
import "./signup.css";
import axios from "axios";

const Signup = () => {
	const [formData, setFormData] = useState({
		aadharNo: "",
		password: "",
		name: "",
		email: "",
		dateOfBirth: "",
		address: "",
		pincode: "",
		partyName: "",
		partyLogo: "",
		aadharFront: "",
	});

	const [userType, setUserType] = useState("");
	const [isCandidate, setIsCandidate] = useState(false);
	const [isAdmin, setIsAdmin] = useState(false);

	const handleChange = (e) => {
		const { name, value, files } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: files ? files[0] : value,
		}));

		// console.log(e.target);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		// Add your form submission logic here

		axios
			.post(`http://localhost:3000/api/${userType}/register`, formData)
			.then((response) => {
				console.log("Response from server:", response.data);
				// Handle the response as needed
			})
			.catch((error) => {
				console.error("Error:", error);
				// Handle errors
			});

		// console.log(formData);
	};

	const handleUserTypeChange = (e) => {
		setUserType(e.target.value);
		if (e.target.value === "candidates") {
			setIsCandidate(true);
		} else {
			setIsCandidate(false);
		}
		if (e.target.value === "admins") {
			setIsAdmin(true);
		} else {
			setIsAdmin(false);
		}
		console.log(userType);
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
					Email:
					<input
						type="email"
						name="email"
						value={formData.email}
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
						<option value="admins">Admin</option>
						<option value="voters">Voter</option>
						<option value="candidates">Candidate</option>
					</select>
				</label>

				{userType !== "" && <div>You selected {userType}</div>}

				{!isAdmin && (
					<>
						<label>
							Date of Birth:
							<input
								type="date"
								name="dateOfBirth"
								value={formData.dob}
								onChange={handleChange}
								required
							/>
						</label>

						<label>
							Address:
							<input
								type="text"
								name="address"
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
							Aadhar Card Photo:
							<input
								type="file"
								name="aadharFront"
								accept="image/*"
								onChange={handleChange}
								// required
							/>
						</label>
					</>
				)}

				{isCandidate ? (
					<>
						<label>
							Party Name:
							<input
								type="text"
								name="partyName"
								value={formData.partyName}
								onChange={handleChange}
								required
							/>
						</label>

						<label>
							Party Logo:
							<input
								type="file"
								name="partyLogo"
								accept="image/*"
								onChange={handleChange}
								// required
							/>
						</label>
					</>
				) : null}

				<button type="submit">Sign Up</button>
				<button> Login</button>
			</form>
		</div>
	);
};

export default Signup;
