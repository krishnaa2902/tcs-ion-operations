import React ,{ useState,useEffect}from 'react';
import { Form,Button,Table } from "react-bootstrap";
import axios from 'axios';
import {Link,useParams} from 'react-router-dom';
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';




export default function SalesReturnShow(  ) {
    
	const [salesreturn,setSalesReturn] = useState([])

	


	useEffect(() => {
		axios.get('http://localhost:5000/salesreturn/')
		.then(res => {
			let salesreturndatas = res.data;
			setSalesReturn(salesreturndatas);
		})
		
	},[salesreturn])











    return ( 
        <>

		<Table striped bordered hover variant="light" style={{fontSize:18}}>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Sales Order Id</th>
                <th>Reason</th>
                <th>Action</th>

              </tr>
            </thead>
            <tbody>
			{	
				salesreturn.map((sr, index)=> {
					return (
						<>

							<tr key={index}>
                    		<td>{index+1}</td>
                            <td>{sr.sr_id}</td>
                            <td>{sr.sr_reason}</td>
							
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
