import { useState } from "react";
import axios from "axios";

function Login() {
	const [aadharNo, setAadharNo] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		// Add your form submission logic here

		axios
			.post("http://localhost:3000/api/voters/login", {
				aadharNo,
				password,
			})
			.then((response) => {
				console.log("Response from server:", response.data);
				// Handle the response as needed
			})
			.catch((error) => {
				console.error("Error:", error);
				// Handle errors
			});
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<h1>Candidate Login</h1>
				<label>
					Aadhar No:
					<input
						type="text"
						name="aadharNo"
						value={aadharNo}
						onChange={(e) => {
							setAadharNo(e.target.value);
						}}
					/>
				</label>

				<label>
					Password:
					<input
						type="password"
						name="password"
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
					/>
				</label>

				<button type="submit">Login</button>
				<button>Signup</button>
			</form>
		</div>
	);
}
export default Login;
