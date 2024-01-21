function Dashboard() {
	return (
		<div className="flex flex-col md:flex-row h-screen bg-gray-100">
			{/* Sidebar */}
			<div className="w-64 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white">
				<div className="p-4 text-2xl font-bold">Dashboard</div>
				<ul>
					<li className="p-4 hover:bg-blue-700 cursor-pointer">
						Home
					</li>
					<li className="p-4 hover:bg-blue-700 cursor-pointer">
						Analytics
					</li>
					<li className="p-4 hover:bg-blue-700 cursor-pointer">
						Settings
					</li>
				</ul>
			</div>

			{/* Main Content */}
			<div className="flex-1 p-4 md:p-8">
				<h1 className="text-3xl font-bold mb-4">
					Welcome to the Dashboard
				</h1>

				{/* Example Content */}
				<div className="bg-white p-6 rounded-md shadow-md">
					<p className="text-gray-700">
						This is where your main content goes. You can display
						charts, statistics, and other information relevant to
						the dashboard.
					</p>

					{/* Additional Elements */}
					<div className="mt-4">
						<h2 className="text-xl font-bold mb-2">
							Recent Activity
						</h2>
						<ul>
							<li className="text-gray-600">User A logged in.</li>
							<li className="text-gray-600">
								New data uploaded.
							</li>
							<li className="text-gray-600">
								Analytics updated.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
