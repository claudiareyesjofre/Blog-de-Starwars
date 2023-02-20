import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { FaTrashAlt } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import "../../styles/home.css";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between" id="myNav">
			  <Link to="/">
				<img className="logo" src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-3-1.png" />
			  </Link>
		  <div>
		  <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <button className=" dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <CiHeart/>
          </button>
          <ul className="dropdown-menu dropdown-menu-dark">
            {store.favorites.map((value, index)=>{
				return <li key={index} className="dropdown-item"> {value} 
				<FaTrashAlt onClick={() => { actions.deleteFav(value.name);
                    }} /> </li>
			})}
          </ul>
        </li>
      </ul>
		  </div>

			  
		
			</nav>
		  );
				}