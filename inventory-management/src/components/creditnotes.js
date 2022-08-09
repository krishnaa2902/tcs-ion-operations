import React ,{useState,useEffect} from 'react';
import { Form,Button,Table } from "react-bootstrap";
import axios from "axios";
export default function CreditNotes() {

    const [creditnotes,setCreditNotes] = useState([]);
    const [salesorders,setSalesorders] = useState([])

    useEffect(() => {
      axios.get('http://localhost:5000/salesorders/')
      .then(res => {
        let saledatas = res.data;
        console.log(saledatas)
        setSalesorders(saledatas);
      })

    },["salesorders"])

    const addCreditNotes = (event)=> {
        event.preventDefault();

        const formData = event.target;
        const newCreditNotes = {
            cn_id: formData.cn_id.value,
            cn_amt: Number(formData.cn_amt.value)
        }
  
    
        axios.post('http://localhost:5000/creditnotes/add',newCreditNotes)
        .then(res => console.log(res.data));


        setCreditNotes(creditnotes => [...creditnotes,newCreditNotes]);

      }


    return (  
        <div>
            <h1>CREDIT NOTES</h1>
            <Form onSubmit={addCreditNotes} className="form-container">
                <Form.Group className="mb-3" controlId="formBasicItem">
                  <Form.Label>Sales Order ID</Form.Label>
                  <br/>
                    <select className="custom-select" name="cn_id" style={{width:"90%"}}>
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
                  <Form.Label>Amount to be credited</Form.Label>
                  <Form.Control type="number" placeholder="Enter Amount" name="cn_amt" />
                </Form.Group>
                <Button variant="primary" type="submit">Add Credit Note</Button>
            </Form>
        </div>
    );
}

