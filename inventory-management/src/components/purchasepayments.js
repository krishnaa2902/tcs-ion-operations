import React ,{useState,useEffect,useRef} from 'react';
import { Form,Button,Table } from "react-bootstrap";
import axios from "axios";
export default function PurchasePayments() {

    const [purchasepayments,setPurchasePayments] = useState([]);
    const [purchaseorders,setPurchaseorders] = useState([]);
    const [items,setItems] = useState([])
    const [it,setIt] = useState("")
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
        setIt(datas.po_item_id);
        setPoQty(datas.po_qty);


        axios.get('http://localhost:5000/items/'+itid.current)
        .then(res => {
          let datas = res.data;
          setItcost(datas.item_selling_price);
        })
      })



    }, [inputValue]);




    // useEffect(() => {
    //   console.log("onion")
    //   console.log(it)
    //   axios.get('http://localhost:5000/items/'+itid.current)
    //   .then(res => {
    //     let datas = res.data;
    //     console.log("hh")
    //     console.log(datas)
    //     setItcost(datas.item_selling_price);
    //   })

    // }, [inputValue]);

    // useEffect(() => {
    //   console.log("onion")
    //   console.log(it)
    //   axios.get('http://localhost:5000/items/'+it)
    //   .then(res => {
    //     let datas = res.data;
    //     console.log("hh")
    //     console.log(datas)
    //     setItcost(datas.item_selling_price);
    //   })

    // }, [inputValue]);



    useEffect(() => {
      axios.get('http://localhost:5000/items/')
      .then(res => {
        let itemdatas = res.data;
        console.log("omitem")
        console.log(itemdatas)
        setItems(itemdatas);
      })

    },["items"])

    useEffect(() => {
      axios.get('http://localhost:5000/purchaseorders/')
      .then(res => {
        let purdatas = res.data;
        console.log("namase")
        console.log(purdatas)
        setPurchaseorders(purdatas);
      })

    },["purchaseorders"])
    

    const addPurchasePayments = (event)=> {
        event.preventDefault();

        const formData = event.target;
        const newPurchasePayments = {
            pp_id: formData.pp_id.value,
            pp_amt: formData.pp_amt.value
        }
  
        axios.post('http://localhost:5000/purchasepayments/add',newPurchasePayments)
        .then(res => console.log(res.data));


        setPurchasePayments(purchasepayments => [...purchasepayments,newPurchasePayments]);

      }


    return (  
        <div>
            <h1>PURCHASES PAYMENT</h1>
            <Form onSubmit={addPurchasePayments} className="form-container">
                <Form.Group className="mb-3" controlId="formBasicItem">
                  <Form.Label>Purchase Order ID</Form.Label>
                  <br/>
                    <select className="custom-select" name="pp_id" style={{width:"90%"}} onChange={(e) => setInputValue(e.target.value)}>
                    <option value="">Select ID</option>
                      {
                        purchaseorders.map((pur)=> {
                          return (
                            <>
                            <option value={pur._id} >
                              PURCHASES ID:{pur._id} ITEM ID:{pur.po_item_id} 
                            </option>
                            
                            </>
                          )
                        })
                      }
                    </select>
                    <br/><br/>
                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicItem">
                  <Form.Label>Amount to be Payed{/*{inputValue}:{it}-{itcost}={itid.current}*/}</Form.Label>
                  <Form.Control type="number" placeholder="Enter Amount" value={itcost * poqty} name="pp_amt"  />
                </Form.Group>
                <Button variant="primary" type="submit">Add Payment</Button>
            </Form>
        </div>
    );
}

