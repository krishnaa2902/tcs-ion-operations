import React ,{ useState,useEffect} from 'react';
import { Form,Button,Table } from "react-bootstrap";
import {Link,useParams} from 'react-router-dom';
import EditCustomer from "./editCustomer"; 
import axios from "axios";



export default function CustomerShow(  ) {


	const [customer,setCustomer] = useState([])

	useEffect(() => {
		axios.get('http://localhost:5000/customers/')
		.then(res => {
			let datas = res.data;
			setCustomer(datas);
		})
		
	},[customer])


  const Deletecustomer= (id) => {
    
    axios.delete('http://localhost:5000/customers/'+id)
    .then(res => res.data)


}










    return ( 
        <>

        <Table striped bordered hover variant="light" style={{fontSize:18 }}>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Customer Name</th>
                <th>Customer Email</th>
                <th>Customer Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                customer.map((customer, index)=> {  //customers.map((customers,index)=> {
                  return(
                    <tr key={index}>
                    <td>{index+1}</td>
                    <td>{customer.cust_name}</td>
                    <td>{customer.cust_email}</td>
                    <td>{customer.cust_add}</td>
                    <td>
                    <Button variant="success" type="button" >
                    <Link to={"/sales/editCustomer/"+customer._id} className="link">EDIT</Link>
                    </Button>
                    <Button variant="danger" type="button" onClick={()=>Deletecustomer(customer._id)}>DELETE</Button>
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
