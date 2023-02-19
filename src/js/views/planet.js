import React, { useState, useEffect, useContext } from "react";
import { Longcard } from "../component/newcard";

import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";



export const Planet = () => {

	const {store}=useContext(Context)

    return(
        <div className="container">
			<h1> soy planetas</h1>
				<div className="row">
					{store.Planet.map((objeto, index)=>{
						return <Longcard 
                 titulo={objeto.name}
				 id={objeto.uid}
				ruta={"/detalle/planet/"  + objeto.uid}
				button="información" 
                />})}
				
				</div>
				

		</div>
    )
	
};
