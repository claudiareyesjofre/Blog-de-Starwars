import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { Context } from "../store/appContext";
import { FaGratipay } from "react-icons/fa";

export const Navbar = () => {
	const { store, actions } = useContext(Context); 

	return (
		<div>
			<div className="row">
				<div className="col">
					<nav className="navbar navbar-light bg-dark mb-3">
						<Link to="/">
							<span className="navbar-brand m-2 h1">
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Star_Wars_Logo..png/640px-Star_Wars_Logo..png"
									width="90"
								/>
							</span>
						</Link>
						 <div className="ml-auto">
							<Dropdown>
								<Dropdown.Toggle  className="toggle">
									<div className="drp">
										<FaGratipay/> <div className="drp counter"> {store.favorites.length} </div>
									</div>
								</Dropdown.Toggle>
								<Dropdown.Menu>
									{store.favorites ? (
										store.favorites.map((elem, i) => (
											<Dropdown.Item key={i} id={++i} title={elem.item}>
												{elem.item}
												<div id={i} onClick={() => actions.removeItem(i)}>
													&#128465;
												</div>
											</Dropdown.Item>
										))
									) : (
										<span>(empty)</span>
									)} 
								</Dropdown.Menu>
							</Dropdown> 
						</div>
					</nav>
				</div>
			</div>
		</div>
	);
};
