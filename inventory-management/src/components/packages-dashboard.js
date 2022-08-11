import React ,{ useState,useEffect}from 'react';
import { Form,Button,Table } from "react-bootstrap";
import axios from 'axios';
import {Link,useParams} from 'react-router-dom';




export default function PackagesShow(  ) {
    
	const [packages,setPackages] = useState([])

	useEffect(() => {
		axios.get('http://localhost:5000/packages/')
		.then(res => {
			let packagedatas = res.data;
			setPackages(packagedatas);
		})
		
	},[packages])
    return ( 
        <>
		<h3>PACKAGES</h3>
		<Table striped bordered hover variant="light" style={{fontSize:18}}>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Sales Order Id</th>
                <th>Package Delivery Address</th>
                {/* <th>Action</th> */}

              </tr>
            </thead>
            <tbody>
			{	
				packages.map((pac, index)=> {
					return (
						<>

							<tr key={index}>
                    		<td>{index+1}</td>
                            <td>{pac.pac_id}</td>
                            <td>{pac.pac_add}</td>
							
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
