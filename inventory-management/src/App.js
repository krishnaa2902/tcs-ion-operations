import './App.css';
import { BrowserRouter as Router,  
  Route, Routes} from "react-router-dom";
import React ,{ Component } from "react";
import AddCustomers from "./components/customers";
import AddSalesOrders from "./components/salesOrders";
import AddPackages from "./components/packages"; 
import EditCustomer from "./components/editCustomer"; 
import EditItems from './components/editItems';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import AddInventory from './components/classComponent';
import ItemGroup from './components/itemGroupComponent';
import ColorSchemesExample from './components/navbar';


import Dashboard from "./components/dashboard.jsx";
import Inventory from "./components/inventory.jsx";
import Sales from "./components/sales.jsx";
import Purchases from "./components/purchases";
import DeliveryChallan from "./components/deliverychallan";

import SalesInvoice from './components/salesinvoice';
import SalesPayments from './components/salespayments';
import SalesReturn from './components/salesreturn';
import CreditNotes from './components/creditnotes';

import AddVendor from "./components/vendors";
import EditVendor from "./components/editvendors";
import AddPurchaseOrders from "./components/purchaseorders";
import PurchasesPayments from "./components/purchasepayments";
import VendorCredit from "./components/vendorcredit";


import background from "./components/inventory-bg.jpg";


// import AddItem from './components/funcComponent';
export default class App extends Component {
  render() {
    return (
      <div className="App" >
        
          
          
          
             
        <Router>
        <ColorSchemesExample/>
          <Routes>     
            <Route exact path="/" element={<Dashboard/>} />
            <Route path="/inventory" element={<Inventory/>} />
            <Route path="/sales" element={<Sales/>} />
            <Route path="/purchases" element={<Purchases/>} />

            <Route path="/inventory/editItems/:id" element={<EditItems/>} />
            <Route path="/sales/customers" element={<AddCustomers/>} />
            <Route path="/sales/salesOrders" element={<AddSalesOrders/>} />
            <Route path="/sales/packages" element={<AddPackages/>} />
            <Route path="/sales/deliverychallan" element={<DeliveryChallan/>} />
            <Route path="/sales/editCustomer/:id" element={<EditCustomer/>} />
            <Route path="/sales/salesinvoice/" element={<SalesInvoice/>} />
            <Route path="/sales/salespayments/" element={<SalesPayments/>} />
            <Route path="/sales/salesreturn/" element={<SalesReturn/>} />
            <Route path="/sales/creditnotes/" element={<CreditNotes/>} />

            <Route path="/purchases/vendors/" element={<AddVendor/>} />
            <Route path="/purchases/editvendors/:id" element={<EditVendor/>} />
            <Route path="/purchases/purchaseOrders" element={<AddPurchaseOrders/>} />
            <Route path="/purchases/purchasepayments/" element={<PurchasesPayments/>} />
            <Route path="/purchases/vendorcredit/" element={<VendorCredit/>} />
          </Routes>
          
        </Router>
      

        
      </div>
    );
  } 

}

  



