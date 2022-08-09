import React ,{ useState,useEffect}from 'react';
import { Form,Button,Table } from "react-bootstrap";
import axios from 'axios';
import {Link,useParams} from 'react-router-dom';
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';




export default function VendorCreditShow(  ) {
    
	const [vendorcredit,setVendorCredit] = useState([])

	


	useEffect(() => {
		axios.get('http://localhost:5000/vendorcredit/')
		.then(res => {
			let vendorcreditdatas = res.data;
			setVendorCredit(vendorcreditdatas);
		})
		
	},[vendorcredit])











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
				vendorcredit.map((vc, index)=> {
					return (
						<>

							<tr key={index}>
                    		<td>{index+1}</td>
                            <td>{vc.vc_id}</td>
                            <td>{vc.vc_amt}</td>
							
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
