import React from "react";
import { Form,Button,Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import AddItem from "./items";
import ItemGroup from "./itemGroupComponent";

import inventoryimage2 from "../inventoryimage2.png";
import inventorycard from "../inventorycard.jpeg";

function Inventory() {

 

  return ( 
    <div>
    	<h1>INVENTORY</h1>
      <img src={inventoryimage2} className="imgmov" style={{height:"600px",width:"600px",position: 'absolute',right: 30,top: 100}}/>
      <div className="dropdown">
		  <button className="dropbtn" >INVENTORY OPTIONS</button>
		  <div className="dropdown-content">
		    <Link to="/inventory/itemgroups">ADD ITEM GROUP</Link>
        <Link to="/inventory/items">ADD ITEM</Link>
		  </div>
		</div>
		{/* <AddItem/> */}
      <div className="card">
      <img src={inventorycard} style={{height:"250px",width:"100%"}}/>
        <div className="container">
          <h4><b>INVENTORY</b></h4>
            <p>
              lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet consectetur adipisicing 
              elit. Quae hic sapiente mollitia ratione eos dolores consequuntur voluptatem eligendi magni voluptas adipisicing sapiente
              fuga ab consequatur excepturi non, deserunt consectetur reiciendis earum. Officia. Lorem, ipsum dolor deserunt consectetur 
            </p>
        </div>
      </div>
    </div>
   );
}

export default Inventory;

