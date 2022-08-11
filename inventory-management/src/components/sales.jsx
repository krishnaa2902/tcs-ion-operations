import React from "react";
import { BrowserRouter as Router,  Route, Routes , Link} from "react-router-dom";

import dashboardimage1 from "../dashboardimage1.png";
import salescard from "../salescard.jpg";


const Sales = () => {
return (
	<div>
        <h1>SALES</h1>
		<img src={dashboardimage1} className="imgmov" style={{height:"500px",width:"700px",position: 'absolute',right: 30,top: 130}}/>
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

		<div className="card">
		<img src={salescard} style={{height:"250px",width:"100%"}}/>
      <div className="container">
        <h4><b>SALES</b></h4>
          <p>
            lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Quae hic sapiente mollitia ratione eos dolores consequuntur voluptatem eligendi magni voluptas 
            fuga ab consequatur excepturi non, deserunt consectetur reiciendis earum. Officia. Lorem, ipsum dolor Lorem, ipsum dolor deserunt consectetur
          </p>
      </div>
    </div>
			

	</div>
);
};

export default Sales;
