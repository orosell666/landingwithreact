import React from "react";

const NaviBar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-dark">
			<div className="container-fluid ms-auto">
				<a className="navbar-brand text-white" href="#">
					Start Bootstrap
				</a>

				<div className="   navbar  me-3" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a
								className="nav-link active text-white"
								aria-current="page"
								href="#">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white-50" href="#">
								About
							</a>
						</li>

						<li className="nav-item">
							<a className="nav-link text-white-50" href="#">
								Services
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white-50" href="#">
								Contact
							</a>
						</li>
					</ul>
				</div>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="true"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon float-end"></span>
				</button>
			</div>
		</nav>
	);
};

export default NaviBar;
