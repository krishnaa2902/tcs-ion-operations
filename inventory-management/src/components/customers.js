import React ,{useState} from 'react';
import { Form,Button,Table } from "react-bootstrap";
import CustomerShow from "./customerList";
import axios from "axios";
function AddCustomers() {

    let initialCustomer = [];
    const [customers,setCustomer] = useState(initialCustomer);


    const addCustomer = (event)=> {
        event.preventDefault();
        // console.log(event.target.item_name.value);
        const formData = event.target;
        const newCustomer = {
            id: new Date().getTime().toString(),
            cust_name:formData.cust_name.value,
            cust_email:formData.cust_email.value,
            cust_add:formData.cust_add.value
        }
  
    
        axios.post('http://localhost:5000/customers/add',newCustomer)
        .then(res => console.log(res.data));
        //console.log(newItem);
        // add a new item inside item array
        setCustomer(customers => [...customers,newCustomer]);
        // console.log("hi");
        // console.log(Object.keys(customers));
      }

    return (  
        <div>
            <h1>CUSTOMERS</h1>
            <Form onSubmit={addCustomer} className="form-container">
                <Form.Group className="mb-3" controlId="formBasicItem">
                  <Form.Label>Customer Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Customer Name" name="cust_name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicItem">
                  <Form.Label>Customer Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter Customer Email" name="cust_email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicItem">
                  <Form.Label>Customer Address</Form.Label>
                  <Form.Control type="text" placeholder="Enter Customer Address" name="cust_add" />
                </Form.Group>
                <Button variant="primary" type="submit">Add Customer</Button>
            </Form>
            
        </div>
    );
}

export default AddCustomers;