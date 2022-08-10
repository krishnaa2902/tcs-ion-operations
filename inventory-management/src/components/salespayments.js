import React ,{useState,useEffect,useRef} from 'react';
import { Form,Button,Table } from "react-bootstrap";
import axios from "axios";
export default function SalesPayments() {

    const [salespayments,setSalesPayments] = useState([]);
    const [salesorders,setSalesorders] = useState([]);
    const [items,setItems] = useState([])
    const [it,setIt] = useState("")
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
        setIt(datas.so_item_id);
        setSoQty(datas.so_qty);

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
      axios.get('http://localhost:5000/salesorders/')
      .then(res => {
        let saledatas = res.data;
        console.log("namase")
        console.log(saledatas)
        setSalesorders(saledatas);
      })

    },["salesorders"])
    

    const addSalesPayments = (event)=> {
        event.preventDefault();

        const formData = event.target;
        const newSalesPayments = {
            sp_id: formData.sp_id.value,
            sp_amt: Number(formData.sp_amt.value)
        }
  
        axios.post('http://localhost:5000/salespayments/add',newSalesPayments)
        .then(res => console.log(res.data));


        setSalesPayments(salespayments => [...salespayments,newSalesPayments]);

      }


    return (  
        <div>
            <h1>SALES PAYMENT</h1>
            <Form onSubmit={addSalesPayments} className="form-container">
                <Form.Group className="mb-3" controlId="formBasicItem">
                  <Form.Label>Sales Order ID</Form.Label>
                  <br/>
                    <select className="custom-select" name="sp_id" style={{width:"90%"}} onChange={(e) => setInputValue(e.target.value)}>
                    <option value="">Select ID</option>
                      {
                        salesorders.map((sale)=> {
                          return (
                            <>
                            <option value={sale._id} >
                              SALES ID:{sale._id} ITEM ID:{sale.so_item_id} 
                            </option>
                            
                            </>
                          )
                        })
                      }
                    </select>
                    <br/><br/>
                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicItem">
                  <Form.Label>Amount to be Payed</Form.Label>
                  <Form.Control type="number" placeholder="Enter Amount" value={itcost * soqty} name="sp_amt"  />
                </Form.Group>
                <Button variant="primary" type="submit">Add Payment</Button>
            </Form>
        </div>
    );
}

