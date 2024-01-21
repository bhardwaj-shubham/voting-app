import { useState } from "react";

const Login = () => {
	const [aadhaarNo, setAadhaar] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = () => {
		console.log("Aadhaar:", aadhaarNo);
		console.log("Password:", password);
	};

	return (
		<div className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 h-screen flex items-center justify-center ">
			<div className="bg-white p-8 rounded-lg shadow-md w-96">
				<h2 className="text-3xl font-extrabold mb-6 text-center text-blue-600">
					E-Voting Login
				</h2>
				<form>
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
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>

					<div className="mb-6">
						<label
							htmlFor="userType"
							className="block text-gray-600 text-sm font-semibold mb-2"
						>
							User Type
						</label>
						<select className="text-black w-full px-3 py-2 border border-blue-gray-400 rounded-md focus:outline-none focus:border-blue-600">
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
