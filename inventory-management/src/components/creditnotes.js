import React ,{useState,useEffect,useRef} from 'react';
import { Form,Button,Table } from "react-bootstrap";
import axios from "axios";
export default function CreditNotes() {

    const [creditnotes,setCreditNotes] = useState([]);
    const [salesorders,setSalesorders] = useState([])
    const [itcost,setItcost] = useState()
    const [soqty,setSoQty] = useState(0)
    const [inputValue, setInputValue] = useState("");
    const inputElement = useRef();
    const itid = useRef("");


    useEffect(() => {
      inputElement.current = inputValue;
      axios.get('http://localhost:5000/salesorders/'+inputElement.current)
      .then(res => {
        let datas = res.data;
        console.log(datas.so_item_id)
        itid.current = datas.so_item_id;
        setSoQty(datas.so_qty);

        axios.get('http://localhost:5000/items/'+itid.current)
        .then(res => {
          let datas = res.data;
          setItcost(datas.item_selling_price);
        })

      })
    }, [inputValue]);



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
                    <select className="custom-select" name="cn_id" style={{width:"90%"}} onChange={(e) => setInputValue(e.target.value)}>
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
                  <Form.Control type="number" placeholder="Enter Amount" value ={itcost * soqty} name="cn_amt" />
                </Form.Group>
                <Button variant="primary" type="submit">Add Credit Note</Button>
            </Form>
        </div>
    );
}

