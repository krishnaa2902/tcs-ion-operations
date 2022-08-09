import React ,{ useState,useEffect}from 'react';
import { Form,Button,Table } from "react-bootstrap";
import axios from 'axios';
import {Link,useParams} from 'react-router-dom';




export default function SalesOrdersShow(  ) {
    
	const [sales,setSales] = useState([])

	useEffect(() => {
		axios.get('http://localhost:5000/salesorders/')
		.then(res => {
			let salesdatas = res.data;
			setSales(salesdatas);
		})
		
	},[sales])
    return ( 
        <>

		<Table striped bordered hover variant="light" style={{fontSize:18 }}>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Sales Order Id</th>
                <th>Customer Email</th>
                <th>Customer Address</th>
				<th>Item Group Name</th>
				<th>Item ID</th>
                <th>Quantity</th>
                <th>Action</th>

              </tr>
            </thead>
            <tbody>
			{	
				sales.map((sale, index)=> {
					return (
						<>

							<tr key={index}>
                    		<td>{index+1}</td>
                            <td>{sale._id}</td>
                            <td>{sale.so_cust_email}</td>
                            <td>{sale.so_cust_add}</td>
							<td>{sale.so_grp_name}</td>
							<td>{sale.so_item_id}</td>
                            <td>{sale.so_qty}</td>
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
