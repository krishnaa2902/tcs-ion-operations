import React ,{ useState ,useEffect}from 'react';
import { Form,Button,Table } from "react-bootstrap";

import {Link,useParams} from 'react-router-dom';

import axios from "axios";
export default function EditCustomer(  ) {



    const [editCustomer,setEditCustomer] = useState([])
    let id = useParams().id;
	useEffect(() => {
		axios.get('http://localhost:5000/customers/'+id)
		.then(res => {
			let editcust = res.data;
			setEditCustomer(editcust);
		})
		
	},[editCustomer])



    
    const editcustdetails = (event)=> {
        event.preventDefault();
        const formData = event.target;

        const newEditCust = {
        cust_name: formData.cust_name.value,
        cust_email:formData.cust_email.value
        }

        
        axios.post('http://localhost:5000/customers/update/'+id,newEditCust)
        .then(res => {
            console.log("hellos")
            console.log(res.data);
        })


        setEditCustomer(newEditCust);
        //setEditCustomer(editCustomer => [...editCustomer,newEditCust]);
    //console.log(newItem);
    // add a new item inside item array
    }




    return ( 
        <div>
            <h1>Edit Customer {editCustomer.cust_name} </h1>
            {
                    

            


            <Form  onSubmit={editcustdetails} className="form-container">
                <Form.Group className="mb-3" controlId="formBasicItem">
                  <Form.Label>Customer Name</Form.Label>
                  <Form.Control type="text" placeholder={editCustomer.cust_name} name="cust_name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicItem">
                  <Form.Label>Customer Email</Form.Label>
                  <Form.Control type="email" placeholder={editCustomer.cust_email} name="cust_email" />
                </Form.Group>
                <Button variant="primary" type="submit">Edit Customer</Button>
            </Form>
                    
                        
            }
            
        </div>
    );
}
