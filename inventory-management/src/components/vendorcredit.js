import React ,{useState,useEffect} from 'react';
import { Form,Button,Table } from "react-bootstrap";
import axios from "axios";
export default function VendorCredit() {

    const [vendorcredit,setVendorCredit] = useState([]);
    const [purchaseorders,setPurchaseorders] = useState([])

    useEffect(() => {
      axios.get('http://localhost:5000/purchaseorders/')
      .then(res => {
        let purdatas = res.data;
        console.log(purdatas)
        setPurchaseorders(purdatas);
      })

    },["purchaseorders"])

    const addVendorCredit = (event)=> {
        event.preventDefault();

        const formData = event.target;
        const newVendorCredit = {
            vc_id: formData.vc_id.value,
            vc_amt: Number(formData.vc_amt.value)
        }
  
    
        axios.post('http://localhost:5000/vendorcredit/add',newVendorCredit)
        .then(res => console.log(res.data));


        setVendorCredit(vendorcredit => [...vendorcredit,newVendorCredit]);

      }


    return (  
        <div>
            <h1>VENDOR CREDIT</h1>
            <Form onSubmit={addVendorCredit} className="form-container">
                <Form.Group className="mb-3" controlId="formBasicItem">
                  <Form.Label>Purchase Order ID</Form.Label>
                  <br/>
                    <select className="custom-select" name="vc_id" style={{width:"90%"}}>
                    <option value="">Select ID</option>
                      {
                        purchaseorders.map((pur)=> {
                          return (
                            
                            <option value={pur._id} >PURCHASE ID:{pur._id} ITEM ID:{pur.po_item_id} </option>
                            
                          )
                        })
                      }
                    </select>
                    <br/><br/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicItem">
                  <Form.Label>Amount to be credited</Form.Label>
                  <Form.Control type="number" placeholder="Enter Amount" name="vc_amt" />
                </Form.Group>
                <Button variant="primary" type="submit">Add Credit Note</Button>
            </Form>
        </div>
    );
}

