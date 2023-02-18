import React, { useContext } from "react";
import Clone from "../../img/clone-white.png"


import { Context } from "../store/appContext";

export function Planets() {
	

	return (
		<>
		<div className="container">
        <div className="row">
          <div className="col">
            <img src={Clone} />
          </div>
          <div className="col">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut
              placerat ipsum, sed rutrum turpis. Cras sit amet sodales nunc.
              Nulla nunc justo, sollicitudin eu cursus eget, rhoncus a tortor.
              Mauris sapien dolor, sagittis non purus sed, laoreet ornare purus.
              Fusce semper vulputate venenatis. Nunc hendrerit, erat quis
              commodo tempor, nunc erat vulputate nulla, nec lobortis tortor
              velit eu eros. Duis a odio efficitur, facilisis lectus vitae,
              tempus metus. Integer molestie ullamcorper lectus ut maximus.
              Integer sollicitudin nunc sit amet lobortis gravida. Pellentesque
              rutrum risus orci, vel consectetur metus scelerisque non. Sed
              tristique, leo egestas mattis pharetra, diam ante facilisis erat,
              vehicula pharetra felis neque nec odio. Sed vehicula urna ac
              tortor imperdiet, a fringilla sapien pellentesque. Quisque
              fermentum sapien vitae placerat euismod. Pellentesque nibh leo,
              consectetur aliquam laoreet a, ornare quis purus. Vestibulum
              convallis dolor vitae vulputate mollis. Sed sit amet dui tempus,
              finibus elit quis, venenatis dolor.
            </p>
          </div>
        </div>
		<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
	  <th scope="col">Handle</th>
	  <th scope="col">Handle</th>
	  <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
	  <td>Mark</td>
	  <td>Mark</td>
	  <td>Mark</td>
	  <td>Mark</td>
	  <td>Mark</td>
	  </tr>
  </tbody>
</table>
      </div>
		</>
	);
}
