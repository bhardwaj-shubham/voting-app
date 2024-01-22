import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
	const [aadhaarNo, setAadhaar] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [userType, setUserType] = useState("voter");
	const navigate = useNavigate();

	const [isError, setIsError] = useState(false);

	const handleLogin = async () => {
		const user = userType.toLowerCase();
		console.log(aadhaarNo, password, userType);

		// login request
		await axios
			.post(`http://localhost:3000/${user}s/login`, {
				aadhaarNo,
				password,
				email,
			})
			.then((res) => {
				console.log(res);
				navigate("/dashboard");
			})
			.catch((err) => {
				console.log(err);
				setIsError(true);
			});

		// removing error message
		setTimeout(() => {
			setIsError(false);
		}, 3000);

		// console.log(res);

		// console.log("Aadhaar:", aadhaarNo);
		// console.log("Password:", password);
		// console.log(userType);
	};

	return (
		<div className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 min-h-screen flex items-center justify-center ">
			<div className="bg-white p-8 rounded-lg shadow-md w-96">
				{isError ? (
					<div className="px-2 py-2 mb-2 bg-red-500 text-white flex justify-between rounded-full">
						<div className="flex items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-7 w-7 mr-3"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
							</svg>
							<p>Please check your credentials. </p>
						</div>
					</div>
				) : null}

				<h2 className="text-3xl font-extrabold mb-6 text-center text-blue-600">
					E-Voting Login
				</h2>
				<form>
					{userType === "Admin" ? (
						<div className="mb-4">
							<label
								htmlFor="email"
								className="block text-gray-600 text-sm font-semibold mb-2"
							>
								Email
							</label>
							<input
								type="email"
								id="email"
								className="text-black w-full px-3 py-2 border border-blue-gray-400 rounded-md focus:outline-none focus:border-blue-500"
								placeholder="Enter your email"
								required
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
					) : (
						<div className="mb-4">
							<label
								htmlFor="aadhaarNo"
								className="block text-gray-600 text-sm font-semibold mb-2"
							>
								Aadhaar No
							</label>
							<input
								type="text"
								id="aadharNo"
								className="text-black w-full px-3 py-2 border border-blue-gray-400 rounded-md focus:outline-none focus:border-blue-500"
								placeholder="Enter your aadhaar"
								minLength="12"
								maxLength="12"
								value={aadhaarNo}
								onChange={(e) => setAadhaar(e.target.value)}
							/>
						</div>
					)}

					<div className="mb-6">
						<label
							htmlFor="password"
							className="block text-gray-600 text-sm font-semibold mb-2"
						>
							Password
						</label>
						<input
							type="password"
							id="password"
							className="text-black w-full px-3 py-2 border border-blue-gray-400 rounded-md focus:outline-none focus:border-blue-500"
							placeholder="Enter your password"
							value={password}
							onChange={(e) => {
								setPassword(e.target.value);
							}}
						/>
					</div>

					<div className="mb-6">
						<label
							htmlFor="userType"
							className="block text-gray-600 text-sm font-semibold mb-2"
						>
							User Type
						</label>
						<select
							value={userType}
							onChange={(e) => setUserType(e.target.value)}
							className="text-black w-full px-3 py-2 border border-blue-gray-400 rounded-md focus:outline-none focus:border-blue-600"
						>
							<option name="voters">Voter</option>
							<option name="candidates">Candidate</option>
							<option name="admins">Admin</option>
						</select>
					</div>

					<button
						type="button"
						className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full w-full"
						onClick={handleLogin}
					>
						Login
					</button>
				</form>

				<p className="text-sm text-gray-600 mt-4 text-center">
					Don`t have an account?{" "}
					<a href="/signup" className="text-blue-500 hover:underline">
						Sign up
					</a>
				</p>
			</div>
		</div>
	);
};

export default Login;
