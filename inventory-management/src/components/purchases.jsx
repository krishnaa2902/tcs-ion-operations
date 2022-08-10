import React from "react";
import { BrowserRouter as Router,Route, Routes , Link} from "react-router-dom";
import purchaseimage from "../purchaseimage.jpg";


const Purchases = () => {
return (
	<div>
        <h1>PURCHASES</h1>
		<img src={purchaseimage} style={{height:"450px",width:"650px",position: 'absolute',right: 30,top: 140}}/>
		  <div className="dropdown">
		  <button className="dropbtn">PURCHASES OPTIONS</button>
		  <div className="dropdown-content">
		  <Link to="/purchases/vendors">Vendors</Link>
		  <Link to="/purchases/purchaseorders">Purchase Order</Link>
		  <Link to="/purchases/purchasepayments">Purchase Payments</Link>
		  <Link to="/purchases/vendorcredit">Vendor Credit</Link>
		  </div>
		</div>
			

	</div>
);
};

export default Purchases;
