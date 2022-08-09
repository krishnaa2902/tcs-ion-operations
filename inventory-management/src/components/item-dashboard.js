import React ,{ useState,useEffect}from 'react';
import { Form,Button,Table } from "react-bootstrap";
import axios from 'axios';
import {Link,useParams} from 'react-router-dom';




export default function ItemShow(  ) {
    
	const [state,setState] = useState([])

	useEffect(() => {
		axios.get('http://localhost:5000/items/')
		.then(res => {
			let datas = res.data;
			setState(datas);
		})
		
	},[state])
    return ( 
        <>

		<Table striped bordered hover variant="light" style={{fontSize:18}}>
            <thead>
              <tr>
                <th>S.No</th>
				<th>Item Group</th>
                <th>Item Name</th>
                <th>Units</th>
                <th>Dimensions</th>
                <th>Weight</th>
                <th>Manufacturer</th>
                <th>Brand</th>
                <th>Selling Price</th>
                <th>Cost Price</th>
                <th>Opening Stock</th>
                <th>Reorder Point</th>
                <th>Vendor</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
			{	
				state.map((item, index)=> {
					return (
						<>

							<tr key={index}>
                    		<td>{index+1}</td>
							<td>{item.item_group_name}</td>
                    		<td>{item.item_name}</td>
                    		<td>{item.item_quantity}</td>
                    		<td>{item.item_dimensions}</td>
                    		<td>{item.item_weight}</td>
                    		<td>{item.item_manufacturer}</td>
                    		<td>{item.item_brand}</td>
                    		<td>{item.item_selling_price}</td>
                    		<td>{item.item_cost_price}</td>
                    		<td>{item.item_opening_stock}</td>
                    		<td>{item.item_reorder_point}</td>
                    		<td>{item.item_vendor}</td>
                    		<td>image</td>
                    		<td><Button variant="success" type="button">
								<Link to={"/inventory/editItems/"+item._id} className="link">EDIT</Link>
								</Button></td>
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
