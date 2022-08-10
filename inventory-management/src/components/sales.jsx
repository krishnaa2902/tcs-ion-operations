import React from "react";
import { BrowserRouter as Router,  Route, Routes , Link} from "react-router-dom";

import dashboardimage1 from "../dashboardimage1.png";


const Sales = () => {
return (
	<div>
        <h1>SALES</h1>
		<img src={dashboardimage1} style={{height:"500px",width:"700px",position: 'absolute',right: 30,top: 130}}/>
		  <div className="dropdown" style={{left :"-45.5%"}}>
		  <button className="dropbtn">SALES OPTIONS</button>
		  <div className="dropdown-content">
		  <Link to="/sales/customers">Customers</Link>
		  <Link to="/sales/salesOrders">Sales Orders</Link>
		  <Link to="/sales/packages">Packages</Link>
		  <Link to="/sales/deliverychallan">Delivery Challan</Link>
		  <Link to="/sales/salesinvoice">Sales Invoice</Link>
		  <Link to="/sales/salesreturn">Sales Return</Link>
		  <Link to="/sales/salespayments">Sales Payments</Link>
		  <Link to="/sales/creditnotes">Credit Notes</Link>
		  </div>
		</div>
			

	</div>
);
};

export default Sales;
