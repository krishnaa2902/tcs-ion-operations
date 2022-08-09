import React from "react";
import { Form,Button,Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import AddItem from "./funcComponent";
import ItemGroup from "./itemGroupComponent";
function Inventory() {

 

  return ( 
    <div>
    	<h1>INVENTORY</h1>
		<AddItem/>
    </div>
   );
}

export default Inventory;

