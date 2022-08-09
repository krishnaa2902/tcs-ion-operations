import React ,{useState} from 'react';
import { Form,Button,Table } from "react-bootstrap";
import CustomerShow from "./customerList";
import axios from "axios";
function AddCustomers() {

    
    const [deliverychallan,setDeliverychallan] = useState([]);


    const addChallan = (event)=> {
        event.preventDefault();
        // console.log(event.target.item_name.value);
        const formData = event.target;
        const newDeliverychallan = {
            dc_cust_name:formData.dc_cust_name.value,
            dc_date:Date(formData.dc_date.value),
            dc_status: formData.dc_status.value
        }
  
    
        axios.post('http://localhost:5000/deliverychallan/add',deliverychallan)
        .then(res => console.log(res.data));
        

        setDeliverychallan(deliverychallan => [...deliverychallan,newDeliverychallan]);
        
      }

    return (  
        <div>
            <h1>DELIVERY CHALLAN</h1>
            <Form onSubmit={addChallan} className="form-container">
                <Form.Group className="mb-3" controlId="formBasicItem">
                  <Form.Label>Customer Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Customer Name" name="dc_cust_name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicItem">
                  <Form.Label>Delivery Challan Date</Form.Label>
                  <Form.Control type="date" placeholder="Enter Delivery Challan Date" name="dc_date" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicItem">
                  <Form.Label>Delivery Status</Form.Label>
                  <br/>
                  <select className="custom-select" name="dc_status">
                    <option value="">Select Status</option>
                    <option value="Challan Generated">Challan Generated</option>
                    <option value="Item Dispatched">Item Dispatched</option>
                    <option value="Delevered">Delevered</option>
                  </select>
                </Form.Group>
                <br/>

                <Button variant="primary" type="submit">Add Delivery Challan</Button>
            </Form>
            
        </div>
    );
}

export default AddCustomers;