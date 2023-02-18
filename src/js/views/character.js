import React, { useContext, useEffect } from "react";

import { Context } from "../store/appContext";
import { Longcard } from "../component/newcard";

import "../../styles/home.css";
import clone from "../../img/clone-white.png";
import { useParams } from "react-router-dom";

export const Character = () => {
	return (
		<div className="container">
			<h1> soy personajes</h1>
			<div className="row">
				<Longcard
				titulo="personaje"
				ruta="/detalle/character/:id"
				button="información" />
				
			</div>

		</div>
	)
}