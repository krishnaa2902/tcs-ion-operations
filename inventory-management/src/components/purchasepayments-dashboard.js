import React ,{ useState,useEffect}from 'react';
import { Form,Button,Table } from "react-bootstrap";
import axios from 'axios';
import {Link,useParams} from 'react-router-dom';
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';




export default function PurchasePaymentsShow(  ) {
    
	const [purchasepayments,setPurchasePayments] = useState([])

	


	useEffect(() => {
		axios.get('http://localhost:5000/purchasepayments/')
		.then(res => {
			let purchasepaymentsdatas = res.data;
			setPurchasePayments(purchasepaymentsdatas);
		})
		
	},[purchasepayments])











    return ( 
        <>
		<h3>PURCHASE PAYMENTS</h3>
		<Table striped bordered hover variant="light" style={{fontSize:18 }}>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Purchase Order Id</th>
                <th>Amount</th>
                {/* <th>Action</th> */}

              </tr>
            </thead>
            <tbody>
			{	
				purchasepayments.map((pp, index)=> {
					return (
						<>

							<tr key={index}>
                    		<td>{index+1}</td>
                            <td>{pp.pp_id}</td>
                            <td>{pp.pp_amt}</td>
							
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
