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

import ItemShow from "./components/item-dashboard";
import CustomerShow from "./components/customerList";
import SalesOrdersShow from './components/salesorders-dashboard';
import PurchaseOrdersShow from './components/purchaseorders-dashboard';
import PackagesShow from './components/packages-dashboard';
import SalesPaymentsShow from './components/salespayments-dashboard';
import SalesReturnShow from './components/salesreturn-dashboard';
import VendorCreditShow from './components/vendorcredit-dashboard';
import VendorShow from './components/vendors-dashboard';
import SalesInvoiceShow from './components/salesinvoice-dashboard';
import PurchasePaymentsShow from './components/purchasepayments-dashboard';
import DeliveryChallanShow from './components/deliverychallan-dashboard';
import CreditNotesShow from './components/creditnotes-dashboard';
import ItemGroup from "./components/itemGroupComponent";
import AddItem from './components/items';


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

            <Route path="/item-dashboard" element={<ItemShow/>} />
            <Route path="/customer-dashboard" element={<CustomerShow/>} />
            <Route path="/salesorder-dashboard" element={<SalesOrdersShow/>} />
            <Route path="/purchaseorder-dashboard" element={<PurchaseOrdersShow/>} />
            <Route path="/packagesshow-dashboard" element={<PackagesShow/>} />
            <Route path="/salespayments-dashboard" element={<SalesPaymentsShow/>} />
            <Route path="/salesreturn-dashboard" element={<SalesReturnShow/>} />
            <Route path="/vendorcredit-dashboard" element={<VendorCreditShow/>} />
            <Route path="/vendor-dashboard" element={<VendorShow/>} />
            <Route path="/salesinvoice-dashboard" element={<SalesInvoiceShow/>} />
            <Route path="/purchasepayments-dashboard" element={<PurchasePaymentsShow/>} />
            <Route path="/deliverychallan-dashboard" element={<DeliveryChallanShow/>} />
            <Route path="/creditnotes-dashboard" element={<CreditNotesShow/>} />

            <Route path="/inventory/itemgroups" element={<ItemGroup/>} />
            <Route path="/inventory/items" element={<AddItem/>} />

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

  



