import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Planeta from "../../img/paleta.png"
import { Context } from "../store/appContext";

export function Planets() {
	const { id } = useParams();
  const [planet, setPlanet] = useState({});

  useEffect(() => {
    fetch("https://www.swapi.tech/api/planets/" + id)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPlanet(data.result);
      })
      .catch((error) => console.log(error));
  }, []);

	return (
		<>
		<div className="container">
        <div className="row">
          <div className="col">
            <img src={Planeta} />
          </div>
          <div className="col">
          <h1>{planet?.properties?.name}</h1>
            <p>{planet?.description}</p> 
            
          </div>
        </div>
		<table class="table">
  <thead>
    <tr>
      <th scope="col">Climate</th>
      <th scope="col">Diameter</th>
      <th scope="col">Rotation period</th>
      <th scope="col">Orbitalperiod</th>
	  <th scope="col">Gravity</th>
	  <th scope="col">Population</th>
	  <th scope="col">Terrain</th>
    <th scope="col">Surface water</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{planet?.properties?.climate}</th>
      <td>{planet?.properties?.diameter}</td>
	  <td>{planet?.properties?.rotation_period}</td>
	  <td>{planet?.properties?.orbital_period}</td>
	  <td>{planet?.properties?.gravity}</td>
	  <td>{planet?.properties?.population}</td>
	  <td>{planet?.properties?.terrain}</td>
    <td>{planet?.properties?.surface_water}</td>
	  
	  </tr>
  </tbody>
</table>
      </div>
		</>
	);
}
