import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route index element={<Home />}></Route>
					<Route path="login" element={<Login />}></Route>
					<Route path="signup" element={<Signup />}></Route>
					<Route path="dashboard" element={<Dashboard />}></Route>
				</Routes>
			</Router>
		</>
	);
}

export default App;
