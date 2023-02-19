import Clone from "../../img/clone-white.png"
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export function Characters() {
  const {store}=useContext(Context)
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  
  useEffect(() => {
    fetch("https://www.swapi.tech/api/people/" + id)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCharacter(data.result);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={Clone} />
          </div>
          <div className="col">
           <h1>{character?.properties?.name}</h1>
            <p>{character?.descripcion} </p>
          </div>
        </div>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Height</th>
      <th scope="col">Mass</th>
      <th scope="col">Hair color</th>
      <th scope="col">Skin color</th>
	  <th scope="col">Eye color</th>
	  <th scope="col">Birth year</th>
	  <th scope="col">Gender</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{character?.properties?.height}</th>
      <td>{character?.properties?.mass}</td>
      <td>{character?.properties?.hair_color}</td>
      <td>{character?.properties?.skin_color}</td>
      <td>{character?.properties?.eye_color}</td>
      <td>{character?.properties?.birth_year}</td>
      <td>{character?.properties?.gender}</td>    
	  </tr>
  </tbody>
</table>
      </div>
    </>
  );
}
