import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { CiHeart } from "react-icons/ci";
import "../../styles/home.css";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	let urlArr;
	let category;
	let element;

	// useEffect(
	// 	() => {
	// 		window.localStorage.getItem(store.favourites) !== null
	// 			? JSON.parse(window.localStorage.getItem(store.favourites))
	// 			: store.favourites;
	// 	},
	// 	[store.favourites]
	// );

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between" id="myNav">
			<Link to="/">
				<img className="logo" src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-3-1.png" />
			</Link>

			<div className="dropdown myDropdown">
				<button
					className="dropdown-toggle pl-5 pr-5"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					<CiHeart/>
				</button>
				<div className="dropdown-menu myFavourites" aria-labelledby="dropdownMenuButton">
					<ul className="text-warning">
						{store.favourites && store.favourites.length > 0 ? (
							store.favourites.map(item => {
								//Para poder usar correctamente los Links, ya que mis perfiles del elemento seleccionado
								//van con categoría y id, no directamente con la url de la Api..

								urlArr = item.url.split("/");

								category = urlArr[urlArr.length - 2];

								element = urlArr[urlArr.length - 1];

								return (
									<li
										key={item.url}
										className="dropdown-item text-warning d-flex justify-content-between align-items-center"
										id="myLiList">
										<Link to={`/${category}/${element}`}>{item.name}</Link>

										<i
											className="far fa-trash-alt"
											onClick={() => actions.deleteFavourite(item.url, store.favourites)}
										/>
									</li>
								);
							})
						) : (
							<p className="pl-3">You do not have any favourite</p>
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};
