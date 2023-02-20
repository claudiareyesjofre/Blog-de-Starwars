import React,{useContext} from "react";
import { Context } from "../store/appContext";
import { Link, useActionData } from "react-router-dom";
import { CiHeart } from "react-icons/ci";

import "../../styles/home.css";

export const NewCard = (props) => {
  return (
    <>
      <div className="card" >
        <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.titulo}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Link to={props.ruta}>
            <a className="btn btn-primary">{props.button}</a>
          </Link>
        </div>
      </div>

    </>
  );
}

export const Longcard = (props) => {
  const {actions}=useContext(Context)
  return (
    <>
      <div className="card" >
        <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.titulo}</h5>
          <p className="card-text">{props.detalles}</p>
          <div className="row">
            <div className="col-8">
              <Link to={props.ruta}>
                <a className="btn btn-primary">{props.button}</a>
              </Link>
            </div>
            <div className="col">
              <button className="favorito" onClick={()=>{
                actions.addFav(props.titulo)}
              }>
                <CiHeart />
              </button>
            </div>

          </div>

        </div>
      </div>

    </>
  );
}

