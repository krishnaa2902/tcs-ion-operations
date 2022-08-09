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

  const [ItemisShown, setItemIsShown] = useState(false);
  const handleItemClick = event => {
    setItemIsShown(current => !current);
  };
  


  const [CustomerisShown, setCustomerIsShown] = useState(false);
  const handleCustomerClick = event => {
    setCustomerIsShown(current => !current);
  };

  const [SalesOrderisShown, setSalesOrderIsShown] = useState(false);
  const handleSalesOrderClick = event => {
    setSalesOrderIsShown(current => !current);
  };

  const [PackageisShown, setPackageIsShown] = useState(false);
  const handlePackageClick = event => {
    setPackageIsShown(current => !current);
  };

  const [DeliveryChallanisShown, setDeliveryChallanIsShown] = useState(false);
  const handleDeliveryChallanClick = event => {
    setDeliveryChallanIsShown(current => !current);
  };

  const [SalesInvoiceisShown, setSalesInvoiceIsShown] = useState(false);
  const handleSalesInvoiceClick = event => {
    setSalesInvoiceIsShown(current => !current);
  };

  const [SalesReturnisShown, setSalesReturnisShown] = useState(false);
  const handleSalesReturnClick = event => {
    setSalesReturnisShown(current => !current);
  };

  const [SalesPaymentsisShown, setSalesPaymentsisShown] = useState(false);
  const handleSalesPaymentsClick = event => {
    setSalesPaymentsisShown(current => !current);
  };

  const [CreditNotesisShown, setCreditNotesisShown] = useState(false);
  const handleCreditNotesClick = event => {
    setCreditNotesisShown(current => !current);
  };

  const [VendorsisShown, setVendorsisShown] = useState(false);
  const handleVendorsClick = event => {
    setVendorsisShown(current => !current);
  };

  const [PurchaseOrdersisShown, setPurchaseOrdersisShown] = useState(false);
  const handlePurchaseOrdersClick = event => {
    setPurchaseOrdersisShown(current => !current);
  };

  const [PurchasePaymentsisShown, setPurchasePaymentsisShown] = useState(false);
  const handlePurchasePaymentsClick = event => {
    setPurchasePaymentsisShown(current => !current);
  };

  const [VendorCreditisShown, setVendorCreditisShown] = useState(false);
  const handleVendorCreditClick = event => {
    setVendorCreditisShown(current => !current);
  };
  
  // const handleClickClose = event => {
  //     setIsShown(current => false);
  //   };

  return ( 
    <div>
    
    <h1>DASHBOARD</h1>
    <Button variant="success" type="button" onClick={handleItemClick} >SHOW ITEMS</Button>
    <br/><br/>
    {ItemisShown && <ItemShow />}
    <Button variant="success" type="button" onClick={handleCustomerClick} >SHOW CUSTOMERS</Button>
    <br/><br/>
    {CustomerisShown && <CustomerShow />}
    <Button variant="success" type="button" onClick={handleSalesOrderClick} >SHOW SALES ORDERS</Button>
    <br/><br/>
    {SalesOrderisShown && <SalesOrdersShow />}
    <Button variant="success" type="button" onClick={handlePackageClick} >SHOW PACKAGES</Button>
    <br/><br/>
    {PackageisShown && <PackagesShow />}
    <Button variant="success" type="button" onClick={handleDeliveryChallanClick} >SHOW DELIVERY CHALLAN</Button>
    <br/><br/>
    {DeliveryChallanisShown && <DeliveryChallanShow />}
    <Button variant="success" type="button" onClick={handleSalesInvoiceClick} >SHOW SALES INVOICE</Button>
    <br/><br/>
    {SalesInvoiceisShown && <SalesInvoiceShow />}
    <Button variant="success" type="button" onClick={handleSalesReturnClick} >SHOW SALES RETURN</Button>
    <br/><br/>
    {SalesReturnisShown && <SalesReturnShow />}
    <Button variant="success" type="button" onClick={handleSalesPaymentsClick} >SHOW SALES PAYMENTS</Button>
    <br/><br/>
    {SalesPaymentsisShown && <SalesPaymentsShow />}
    <Button variant="success" type="button" onClick={handleCreditNotesClick} >SHOW CREDIT NOTES</Button>
    <br/><br/>
    {CreditNotesisShown && <CreditNotesShow />}
    <Button variant="success" type="button" onClick={handleVendorsClick} >SHOW VENDORS</Button>
    <br/><br/>
    {VendorsisShown && <VendorShow />}
    <Button variant="success" type="button" onClick={handlePurchaseOrdersClick} >SHOW PURCHASE ORDERS</Button>
    <br/><br/>
    {PurchaseOrdersisShown && <PurchaseOrdersShow />}
    <Button variant="success" type="button" onClick={handlePurchasePaymentsClick} >SHOW PURCHASE PAYMENTS</Button>
    <br/><br/>
    {PurchasePaymentsisShown && <PurchasePaymentsShow />}
    <Button variant="success" type="button" onClick={handleVendorCreditClick} >SHOW VENDOR CREDIT</Button>
    <br/><br/>
    {VendorCreditisShown && <VendorCreditShow />}

    </div>
   );
}

export default Dashboard;

