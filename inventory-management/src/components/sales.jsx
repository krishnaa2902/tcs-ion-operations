import React from "react";
import { BrowserRouter as Router,  
  Route, Routes , Link} from "react-router-dom";


const Sales = () => {
return (
	<div>
        <h1>SALES</h1>

		  <div className="dropdown">
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
