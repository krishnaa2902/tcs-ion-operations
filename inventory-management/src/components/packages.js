import React ,{useState,useEffect} from 'react';
import { Form,Button,Table } from "react-bootstrap";
import axios from "axios";
export default function AddPackages() {

    const [packages,setPackages] = useState([]);
    const [salesorders,setSalesorders] = useState([])

    useEffect(() => {
      axios.get('http://localhost:5000/salesorders/')
      .then(res => {
        let saledatas = res.data;
        console.log(saledatas)
        setSalesorders(saledatas);
      })

    },["salesorders"])

    const addPackagedetails = (event)=> {
        event.preventDefault();

        const formData = event.target;
        const newPackage = {
            pac_id: formData.pac_id.value,
            pac_add: formData.pac_add.value
        }
  
    
        axios.post('http://localhost:5000/packages/add',newPackage)
        .then(res => console.log(res.data));


        setPackages(packages => [...packages,newPackage]);

      }


    return (  
        <div>
            <h1>PACKAGES</h1>
            <Form onSubmit={addPackagedetails} className="form-container">
                <Form.Group className="mb-3" controlId="formBasicItem">
                  <Form.Label>Sales Order ID</Form.Label>
                  <br/>
                    <select className="custom-select" name="pac_id" style={{width:"90%"}}>
                    <option value="">Select ID</option>
                      {
                        salesorders.map((sale)=> {
                          return (
                            
                            <option value={sale._id} > {sale._id} : {sale.so_item_id} </option>
                            
                          )
                        })
                      }
                    </select>
                    <br/><br/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicItem">
                  <Form.Label>Package Delivery Address</Form.Label>
                  <Form.Control type="text" placeholder="Enter Package Delivery Address" name="pac_add" />
                </Form.Group>
                <Button variant="primary" type="submit">Add Package</Button>
            </Form>
        </div>
    );
}

