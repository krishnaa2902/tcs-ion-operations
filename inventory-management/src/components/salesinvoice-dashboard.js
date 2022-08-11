import React ,{ useState,useEffect,useRef}from 'react';
import { Form,Button,Table } from "react-bootstrap";
import axios from 'axios';
import {Link,useParams} from 'react-router-dom';
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';




export default function SalesInvoiceShow(  ) {
    
	const [salesinvoice,setSalesInvoice] = useState([])
	const [sales,setSales] = useState([])
	const [items,setItems] = useState([])

	const finditemid = useRef("")

	useEffect(() => {
		console.log("finditemid")
		console.log(finditemid.current)
	},[""])


	useEffect(() => {
		axios.get('http://localhost:5000/salesinvoice/')
		.then(res => {
			let salesinvoicedatas = res.data;
			setSalesInvoice(salesinvoicedatas);
		})
		
	},[salesinvoice])




	useEffect(() => {
		axios.get('http://localhost:5000/salesorders/')
		.then(res => {
			let salesdatas = res.data;
			setSales(salesdatas);
		})
		
	},[sales])






    return ( 
        <>
		<h3>SALES INVOICE</h3>
		<Table striped bordered hover variant="light" style={{fontSize:18 }}>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Sales Order Id</th>
                <th>Amount</th>
                <th>Email</th>
                <th>Address</th>
                {/* <th>Action</th> */}

              </tr>
            </thead>
            <tbody>
			{	
				salesinvoice.map((inv, index)=> {
					return (
						<>

							<tr key={index}>
                    		<td>{index+1}</td>
                            <td>{inv.inv_id}</td>
                            <td>{inv.inv_amt}</td>
                            <td>{inv.inv_email}</td>
                            <td>{inv.inv_add}</td>
							
                    		{/* <td><Button variant="success" type="button">
								EDIT
								</Button>
                            </td> */}
                    		</tr>

						</>
					)
				})

			}
       
	   		</tbody>
			   </Table>




		
        </>
    );
}
