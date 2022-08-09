import React ,{ useState,useEffect}from 'react';
import { Form,Button,Table } from "react-bootstrap";
import axios from 'axios';
import {Link,useParams} from 'react-router-dom';




export default function PurchaseOrdersShow(  ) {
    
	const [purchase,setPurchase] = useState([])

	useEffect(() => {
		axios.get('http://localhost:5000/purchaseorders/')
		.then(res => {
			let purchasedatas = res.data;
			setPurchase(purchasedatas);
		})
		
	},[purchase])
    return ( 
        <>

		<Table striped bordered hover variant="light" style={{fontSize:18 , width:"70%", marginLeft:"15%"}}>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Purchase Order Id</th>
                <th>Customer Email</th>
				<th>Item Group Name</th>
				<th>Item ID</th>
                <th>Quantity</th>
                <th>Action</th>

              </tr>
            </thead>
            <tbody>
			{	
				purchase.map((pur, index)=> {
					return (
						<>

							<tr key={index}>
                    		<td>{index+1}</td>
                            <td>{pur._id}</td>
                            <td>{pur.po_cust_email}</td>
							<td>{pur.po_grp_name}</td>
							<td>{pur.po_item_id}</td>
                            <td>{pur.po_qty}</td>
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
