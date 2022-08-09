import React ,{useState}from "react";
import { Link } from "react-router-dom";
import ItemShow from "./item-dashboard";
import CustomerShow from "./customerList";
import SalesOrdersShow from "./salesorders-dashboard";
import PackagesShow from "./packages-dashboard";
import DeliveryChallanShow from "./deliverychallan-dashboard";
import SalesInvoiceShow from "./salesinvoice-dashboard";
import SalesReturnShow from "./salesreturn-dashboard";
import SalesPaymentsShow from "./salespayments-dashboard";
import CreditNotesShow from "./creditnotes-dashboard";
import VendorShow from "./vendors-dashboard";
import PurchaseOrdersShow from "./purchaseorders-dashboard";
import PurchasePaymentsShow from "./purchasepayments-dashboard";
import VendorCreditShow from "./vendorcredit-dashboard";




import { Form,Button,Table } from "react-bootstrap";


function Dashboard() {


  
  // const handleClickClose = event => {
  //     setIsShown(current => false);
  //   };

  return ( 
    <div>
    
    <h1>DASHBOARD</h1>
    <div className="dropdown">
		  <button className="dropbtn" >DASHBOARD OPTIONS</button>
		  <div className="dropdown-content">
		  <Link to="/item-dashboard">SHOW ITEMS</Link>
      <Link to="/customer-dashboard">SHOW CUSTOMERS</Link>
      <Link to="/salesorder-dashboard">SHOW SALES ORDER</Link>
      <Link to="/packagesshow-dashboard">SHOW PACKAGES</Link>
      <Link to="/deliverychallan-dashboard">SHOW DELIVERY CHALLAN</Link>
      <Link to="/salesinvoice-dashboard">SHOW SALES INVOICE</Link>
      <Link to="/salesreturn-dashboard">SHOW SALES RETURN</Link>
      <Link to="/salespayments-dashboard">SHOW SALES PAYMENTS</Link>
      <Link to="/creditnotes-dashboard">SHOW CREDIT NOTES</Link>
      <Link to="/vendor-dashboard">SHOW VENDORS</Link>
      <Link to="/purchaseorder-dashboard">SHOW PURCHASE ORDER</Link>
      <Link to="/purchasepayments-dashboard">SHOW PURCHASE PAYMENTS</Link>
      <Link to="/vendorcredit-dashboard">SHOW VENDOR CREDIT</Link>
		  </div>
		</div>




    </div>
   );
}

export default Dashboard;

