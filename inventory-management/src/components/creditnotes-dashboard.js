import React ,{ useState,useEffect}from 'react';
import { Form,Button,Table } from "react-bootstrap";
import axios from 'axios';
import {Link,useParams} from 'react-router-dom';
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';




export default function CreditNotesShow(  ) {
    
	const [creditnotes,setCreditNotes] = useState([])

	


	useEffect(() => {
		axios.get('http://localhost:5000/creditnotes/')
		.then(res => {
			let creditnotesdatas = res.data;
			setCreditNotes(creditnotesdatas);
		})
		
	},[creditnotes])











    return ( 
        <>
		<h3>CREDIT NOTES</h3>
		<Table striped bordered hover variant="light" style={{fontSize:18 }}>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Sales Order Id</th>
                <th>Amount</th>
                {/* <th>Action</th> */}

              </tr>
            </thead>
            <tbody>
			{	
				creditnotes.map((cn, index)=> {
					return (
						<>

							<tr key={index}>
                    		<td>{index+1}</td>
                            <td>{cn.cn_id}</td>
                            <td>{cn.cn_amt}</td>
							
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
