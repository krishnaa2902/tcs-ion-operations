import React from "react";
import { Form,Button,Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import AddItem from "./items";
import ItemGroup from "./itemGroupComponent";

import inventoryimage2 from "../inventoryimage2.png";

function Inventory() {

 

  return ( 
    <div>
    	<h1>INVENTORY</h1>
      <img src={inventoryimage2} style={{height:"600px",width:"600px",position: 'absolute',right: 30,top: 100}}/>
      <div className="dropdown">
		  <button className="dropbtn" >INVENTORY OPTIONS</button>
		  <div className="dropdown-content">
		    <Link to="/inventory/itemgroups">ADD ITEM GROUP</Link>
        <Link to="/inventory/items">ADD ITEM</Link>
		  </div>
		</div>
		{/* <AddItem/> */}
    </div>
   );
}

export default Inventory;

