import React, { useContext } from "react";

import { Context } from "../store/appContext";
import sw1 from "../../img/sw1.png"
import sw2 from "../../img/sw2.png"
import sw3 from "../../img/sw3.png"
import cielo from "../../img/cielo.png"

import { NewCard } from "../component/newcard";
/* import { Characters } from "../component/Characters";
import { Planets } from "../component/Planets";
import { Species } from "../component/Species";
import { Starships } from "../component/Startships";
import { Vehicles } from "../component/Vehicles"; */


export const Home = () => {

	const { store } = useContext(Context);

	return (
		 <div className="container">
     <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={sw1} className="d-block w-100 " alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={sw2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={sw3} className="d-block w-100 " alt="..."/>
    </div>
  </div>	
		</div>
  <div className="container"> 
  <div className="row">
   <NewCard	
   	titulo=" Personajes" 
	button=" conoce los personajes"
	ruta= "/character"/>
    </div> 
	<div className="diseño starwars">
		<img   className ="cielo" src={cielo} alt="cielo"/>
	</div>
	
	<div className="row">
   <NewCard
   titulo="Planetas"
   button=" conoce los planetas"
   ruta= "/planet"
   />
    </div> 
      </div>
 
      </div>
   
   
			 
	);
};
