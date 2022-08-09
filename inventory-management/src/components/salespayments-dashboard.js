import React ,{ useState,useEffect}from 'react';
import { Form,Button,Table } from "react-bootstrap";
import axios from 'axios';
import {Link,useParams} from 'react-router-dom';
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';




export default function SalesPaymentsShow(  ) {
    
	const [salespayments,setSalesPayments] = useState([])

	


	useEffect(() => {
		axios.get('http://localhost:5000/salespayments/')
		.then(res => {
			let salespaymentsdatas = res.data;
			setSalesPayments(salespaymentsdatas);
		})
		
	},[salespayments])











    return ( 
        <>

		<Table striped bordered hover variant="light" style={{fontSize:18 , width:"70%", marginLeft:"15%"}}>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Sales Order Id</th>
                <th>Amount</th>
                <th>Action</th>

              </tr>
            </thead>
            <tbody>
			{	
				salespayments.map((sp, index)=> {
					return (
						<>

							<tr key={index}>
                    		<td>{index+1}</td>
                            <td>{sp.sp_id}</td>
                            <td>{sp.sp_amt}</td>
							
                    		<td><Button variant="success" type="button">
								EDIT
								</Button>
                            </td>
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
