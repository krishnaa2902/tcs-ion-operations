import React ,{useState,useEffect} from 'react';
import { Form,Button,Table } from "react-bootstrap";
import axios from "axios";
export default function SalesReturn() {

    const [salesreturn,setSalesReturn] = useState([]);
    const [salesorders,setSalesorders] = useState([])

    useEffect(() => {
      axios.get('http://localhost:5000/salesorders/')
      .then(res => {
        let saledatas = res.data;
        console.log(saledatas)
        setSalesorders(saledatas);
      })

    },["salesorders"])

    const addSalesReturn = (event)=> {
        event.preventDefault();

        const formData = event.target;
        const newSalesReturn = {
            sr_id: formData.sr_id.value,
            sr_reason: formData.sr_reason.value
        }
  
    
        axios.post('http://localhost:5000/salesreturn/add',newSalesReturn)
        .then(res => console.log(res.data));


        setSalesReturn(salesreturn => [...salesreturn,newSalesReturn]);

      }


    return (  
        <div>
            <h1>SALES RETURN</h1>
            <Form onSubmit={addSalesReturn} className="form-container">
                <Form.Group className="mb-3" controlId="formBasicItem">
                  <Form.Label>Sales Order ID</Form.Label>
                  <br/>
                    <select className="custom-select" name="sr_id" style={{width:"90%"}}>
                    <option value="">Select ID</option>
                      {
                        salesorders.map((sale)=> {
                          return (
                            
                            <option value={sale._id} >SALES ID:{sale._id} ITEM ID:{sale.so_item_id} </option>
                            
                          )
                        })
                      }
                    </select>
                    <br/><br/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicItem">
                  <Form.Label>Reason for return</Form.Label>
                  <Form.Control type="text" placeholder="Enter Reason" name="sr_reason" />
                </Form.Group>
                <Button variant="primary" type="submit">Return</Button>
            </Form>
        </div>
    );
}

