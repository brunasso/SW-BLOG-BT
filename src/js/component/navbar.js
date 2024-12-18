import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../img/SWLogo.png';
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'rgba(48, 47, 47, 0.623)', marginTop: "70px", marginBottom: "100px" }}>
			<div className="container">
				<Link to={`/`}>
					<img
						src={logo}
						alt="gif 2"
						style={{
							width: '150px',
							height: '75px',
							position: "absolute",
							top: "-6px"
						}}
						className="navbar-brand mb-0 h1"
					/>
				</Link>

			<div className="ms-auto">
				<div className="dropdown">
					<button
						className="btn bg-primary dropdown-toggle" style={{ marginTop: "10px", marginRight: "30px" }}
						type="button"
						id="dropdownMenuButton"
						onClick={toggleDropdown}
					>
						Favorites
					</button>
					<ul
						className={`dropdown-menu dropdown-menu-end bg-dark text-white ${isOpen ? "show" : ""}`}
						aria-labelledby="dropdownMenuButton"
					>
						{store.favorites.length > 0 ? (
							store.favorites.map((fav, index) => (
								<li key={index} className="dropdown-item d-flex justify-content-between align-items-center text-white" style={{ whiteSpace: "normal", overflow: "visible", borderBottom: "1px solid #555" }}>
									<span>{fav.name}</span>
									<button
										className="btn btn-sm btn-danger ms-2"
										onClick={() => actions.Favorite(fav)}
									>
										<i className="fas fa-trash"></i>
									</button>
								</li>
							))
						) : (
							<li className="dropdown-item text-muted">No favorites added</li>
						)}
					</ul>
				</div>
			</div>
		</div >
		</nav >
	);
};