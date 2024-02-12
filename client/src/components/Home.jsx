import { useNavigate } from "react-router-dom";
import Header from "./Header";

function Home() {
	const Navigate = useNavigate();

	return (
		<>
			<Header />
			<div className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 h-screen flex items-center justify-center text-white">
				<div className="text-center">
					<h1 className="text-5xl font-extrabold mb-4">
						E-Voting Blockchain
					</h1>
					<p className="text-lg mb-8">
						A Secure and Transparent Voting System
					</p>
					<button
						type="button"
						onClick={() => {
							Navigate("/login");
						}}
						className="bg-yellow-500 hover:bg-yellow-600 text-gray-800 font-semibold py-2 px-6 rounded-full"
					>
						Get Started
					</button>
				</div>
			</div>
		</>
	);
}

export default Home;
