import { useState } from "react";

function Login() {
	const [aadharNo, setAadharNo] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		// Add your form submission logic here

		await fetch("http://localhost:5000/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				aadharNo,
				password,
			}),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log("Response from server:", data);
				// Handle the response as needed
			})
			.catch((error) => {
				console.error("Error:", error);
				// Handle errors
			});

		// const data = await response.json();
		// console.log(data);
	};

	return (
		<form onSubmit={handleSubmit}>
			<h1>Login</h1>
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
		</form>
	);
}
export default Login;
