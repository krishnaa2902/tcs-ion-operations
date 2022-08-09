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

		<Table striped bordered hover variant="light" style={{fontSize:18 , width:"70%", marginLeft:"15%"}}>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Customer Name</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>

              </tr>
            </thead>
            <tbody>
			{	
				deliverychallan.map((dc, index)=> {
					return (
						<>

							<tr key={index}>
                    		<td>{index+1}</td>
                            <td>{dc.dc_cust_name}</td>
                            <td>{dc.dc_date}</td>
                            <td>{dc.dc_status}</td>					
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
