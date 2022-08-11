import React ,{ useState,useEffect} from 'react';
import { Form,Button,Table } from "react-bootstrap";
import {Link,useParams} from 'react-router-dom';
import EditVendor from "./editvendors"; 
import axios from "axios";



export default function VendorShow(  ) {


	const [vendor,setVendor] = useState([])

	useEffect(() => {
		axios.get('http://localhost:5000/vendors/')
		.then(res => {
			let datas = res.data;
			setVendor(datas);
		})
		
	},[vendor])


    const Deletevendor = (id) => {
    
        axios.delete('http://localhost:5000/vendors/'+id)
        .then(res => res.data)
    

    }










    return ( 
        <>
		<h3>VENDORS</h3>
        <Table striped bordered hover variant="light" style={{fontSize:18 }}>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Vendor Name</th>
                <th>Vendor Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                vendor.map((vendor, index)=> {  //vendors.map((vendors,index)=> {
                  return(
                    <tr key={index}>
                    <td>{index+1}</td>
                    <td>{vendor.ven_name}</td>
                    <td>{vendor.ven_email}</td>
                    <td>
                    <Button variant="success" type="button" >
                    <Link to={"/purchases/editvendors/"+vendor._id} className="link">EDIT</Link>
                    </Button>
                    <Button variant="danger" type="button" onClick={()=>Deletevendor(vendor._id)}>DELETE</Button>
                    </td>
                    </tr>
                  )
                })
              }
            </tbody>
        </Table>

        

        </>
    );
}
