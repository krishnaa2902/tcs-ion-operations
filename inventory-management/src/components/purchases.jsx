import React from "react";
import { BrowserRouter as Router,Route, Routes , Link} from "react-router-dom";
import purchaseimage from "../purchaseimage.jpg";
import purchasescard from "../purchasescard.webp";


const Purchases = () => {
return (
	<div>
        <h1>PURCHASES</h1>
		<img src={purchaseimage} className="imgmov" style={{height:"450px",width:"650px",position: 'absolute',right: 30,top: 140}}/>
		  <div className="dropdown">
		  <button className="dropbtn">PURCHASES OPTIONS</button>
		  <div className="dropdown-content">
		  <Link to="/purchases/vendors">Vendors</Link>
		  <Link to="/purchases/purchaseorders">Purchase Order</Link>
		  <Link to="/purchases/purchasepayments">Purchase Payments</Link>
		  <Link to="/purchases/vendorcredit">Vendor Credit</Link>
		  </div>
		</div>
		<div className="card">
		<img src={purchasescard} style={{height:"250px",width:"100%"}}/>
      <div className="container">
        <h4><b>PURCHASES</b></h4>
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

export default Purchases;
