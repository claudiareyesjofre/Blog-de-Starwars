import React, { useState, useEffect, useContext } from "react";
import { Longcard } from "../component/newcard";

import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const Planet = () => {
    return(
        <div className="container">
			<h1> soy planetas</h1>
			<div className="row">
				<Longcard 
                titulo="personaje"
				ruta="/detalle/planet/:id"
				button="información"
                />
			</div>

		</div>
    )
	
};
