import React ,{useState,useEffect,useRef} from 'react';
import { Form,Button,Table } from "react-bootstrap";
import axios from "axios";
export default function VendorCredit() {

    const [vendorcredit,setVendorCredit] = useState([]);
    const [purchaseorders,setPurchaseorders] = useState([])
    const [itcost,setItcost] = useState(0)
    const [poqty,setPoQty] = useState(0)
    const [inputValue, setInputValue] = useState("");
    const inputElement = useRef();
    const itid = useRef("");
    


    useEffect(() => {
      inputElement.current = inputValue;
      axios.get('http://localhost:5000/purchaseorders/'+inputElement.current)
      .then(res => {
        let datas = res.data;
        console.log("mm")
        console.log(datas.po_item_id)
        itid.current = datas.po_item_id;
        setPoQty(datas.po_qty);


        axios.get('http://localhost:5000/items/'+itid.current)
        .then(res => {
          let datas = res.data;
          setItcost(datas.item_selling_price);
        })
      })



    }, [inputValue]);


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
                    <select className="custom-select" name="vc_id" style={{width:"90%"}} onChange={(e) => setInputValue(e.target.value)}>
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
                  <Form.Control type="number" placeholder="Enter Amount" value={itcost * poqty}name="vc_amt" />
                </Form.Group>
                <Button variant="primary" type="submit">Add Credit Note</Button>
            </Form>
        </div>
    );
}

