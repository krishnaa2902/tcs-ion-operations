import React ,{useState} from 'react';
import { Form,Button,Table } from "react-bootstrap";
import axios from "axios";
function AddVendors() {

    let initialVendor = [];
    const [vendors,setVendor] = useState(initialVendor);


    const addVendor = (event)=> {
        event.preventDefault();
        // console.log(event.target.item_name.value);
        const formData = event.target;
        const newVendor = {
            id: new Date().getTime().toString(),
            ven_name:formData.ven_name.value,
            ven_email:formData.ven_email.value
        }
  
    
        axios.post('http://localhost:5000/vendors/add',newVendor)
        .then(res => console.log(res.data));
        //console.log(newItem);
        // add a new item inside item array
        setVendor(vendors => [...vendors,newVendor]);
        // console.log("hi");
        // console.log(Object.keys(vendors));
      }

    return (  
        <div>
            <h1>VENDORS</h1>
            <Form onSubmit={addVendor} className="form-container">
                <Form.Group className="mb-3" controlId="formBasicItem">
                  <Form.Label>Vendor Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Vendor Name" name="ven_name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicItem">
                  <Form.Label>Vendor Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter Vendor Email" name="ven_email" />
                </Form.Group>
                <Button variant="primary" type="submit">Add Vendor</Button>
            </Form>
            
        </div>
    );
}

export default AddVendors;