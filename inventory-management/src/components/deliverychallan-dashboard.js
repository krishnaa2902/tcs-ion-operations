import React ,{ useState,useEffect}from 'react';
import { Form,Button,Table } from "react-bootstrap";
import axios from 'axios';
import {Link,useParams} from 'react-router-dom';




export default function DeliveryChallanShow(  ) {
    
	const [deliverychallan,setDeliverychallan] = useState([])

	useEffect(() => {
		axios.get('http://localhost:5000/deliverychallan/')
		.then(res => {
			let dcdatas = res.data;
			setDeliverychallan(dcdatas);
		})
		
	},[deliverychallan])


    return ( 
        <>
		<h3>DELIVERY CHALLAN</h3>
		<Table striped bordered hover variant="light" style={{fontSize:18 }}>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Customer Email</th>
                <th>Date</th>
                <th>Status</th>
                {/* <th>Action</th> */}

              </tr>
            </thead>
            <tbody>
			{	
				deliverychallan.map((dc, index)=> {
					return (
						<>

							<tr key={index}>
                    		<td>{index+1}</td>
                            <td>{dc.dc_cust_email}</td>
                            <td>{dc.dc_date}</td>
                            <td>{dc.dc_status}</td>					
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
