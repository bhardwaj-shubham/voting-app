import logo from "../assets/logo.png";
import "../styles/Header.css";

function Header() {
	return (
		<>
			<header className="bg-white shadow-lg h-20 hidden md:flex">
				<a
					href=""
					className="border flex-shrink-0 flex items-center justify-center px-4 lg:px-6 xl:px-8"
				>
					<img className="h-14" src={logo} alt="e-voting logo" />
				</a>
				<nav className="header-links contents font-semibold text-base lg:text-lg">
					<ul className="flex items-center ml-4 xl:ml-8 mr-auto">
						<li className="p-3 xl:p-3 text-base active">
							<a href="">
								<span>Home</span>
							</a>
						</li>
						<li className="p-3 xl:p-3 text-base">
							<a href="">
								<span>About Us</span>
							</a>
						</li>
						<li className="p-3 xl:p-3 text-base">
							<a href="">
								<span>Statistics</span>
							</a>
						</li>
						<li className="p-3 xl:p-3 text-base">
							<a href="">
								<span>Election Program</span>
							</a>
						</li>
						<li className="p-3 xl:p-3 text-base">
							<a href="">
								<span>Political Parties</span>
							</a>
						</li>
						<li className="p-3 xl:p-3 text-base">
							<a href="" className="flex items-center">
								<span>Pages</span>
								<svg
									className="h-3 opacity-30 ml-2  svg-inline--fa fa-chevron-down fa-w-14 fa-7x"
									aria-hidden="true"
									focusable="false"
									data-prefix="far"
									data-icon="chevron-down"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 448 512"
								>
									<path
										fill="currentColor"
										d="M441.9 167.3l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L224 328.2 42.9 147.5c-4.7-4.7-12.3-4.7-17 0L6.1 167.3c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z"
									></path>
								</svg>
							</a>
						</li>
						<li className="p-3 xl:p-3 text-base">
							<a href="">
								<span>Contact Us</span>
							</a>
						</li>
					</ul>
				</nav>
				<div className="border flex items-center px-2 lg:px-6 xl:px-8">
					<button className="bg-black hover:bg-gray-700 text-white font-bold px-4 xl:px-6 py-2 xl:py-3 rounded-full">
						Login
					</button>
				</div>
			</header>
		</>
	);
}
export default Header;
