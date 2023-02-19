import React, { useContext, useEffect } from "react";

import { Context } from "../store/appContext";
import { Longcard } from "../component/newcard";

import "../../styles/home.css";
import clone from "../../img/clone-white.png";
import { useParams } from "react-router-dom";

export const Character = () => {
	const {store, action}= useContext(Context)
	
	return (
		<div className="container">
			<h1> soy personajes</h1>
			<div className="row">
				{store.Character.map((objeto, index)=>{
					return<Longcard
					img="https://dlprivateserver.com/wp-content/uploads/2022/08/%C2%BFTerminara-alguna-vez-Star-Wars.jpg"
					titulo={objeto.name}
					id={objeto.uid}
					ruta={"/detalle/character/"+ objeto.uid}
					button="información" />
					} )}
				
			</div>
		</div>
	)
}