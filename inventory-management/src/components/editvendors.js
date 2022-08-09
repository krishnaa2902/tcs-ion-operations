import React ,{ useState ,useEffect}from 'react';
import { Form,Button,Table } from "react-bootstrap";

import {Link,useParams} from 'react-router-dom';

import axios from "axios";
export default function EditVendor(  ) {



    const [editVendor,setEditVendor] = useState([])
    let id = useParams().id;
	useEffect(() => {
		axios.get('http://localhost:5000/vendors/'+id)
		.then(res => {
			let editven = res.data;
			setEditVendor(editven);
		})
		
	},[editVendor])



    
    const editvendordetails = (event)=> {
        event.preventDefault();
        const formData = event.target;

        const newEditVen = {
        ven_name: formData.ven_name.value,
        ven_email:formData.ven_email.value
        }

        
        axios.post('http://localhost:5000/vendors/update/'+id,newEditVen)
        .then(res => {
            console.log("hellos")
            console.log(res.data);
        })


        setEditVendor(newEditVen);
        //setEditVendor(editVendor => [...editVendor,newEditVen]);
    //console.log(newItem);
    // add a new item inside item array
    }




    return ( 
        <div>
            <h1>Edit Vendor {editVendor.ven_name} </h1>
            {
                    

            


            <Form  onSubmit={editvendordetails} className="form-container">
                <Form.Group className="mb-3" controlId="formBasicItem">
                  <Form.Label>Vendor Name</Form.Label>
                  <Form.Control type="text" placeholder={editVendor.ven_name} name="ven_name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicItem">
                  <Form.Label>Vendor Email</Form.Label>
                  <Form.Control type="email" placeholder={editVendor.ven_email} name="ven_email" />
                </Form.Group>
                <Button variant="primary" type="submit">Edit Vendor</Button>
            </Form>
                    
                        
            }
            
        </div>
    );
}
