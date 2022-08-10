import React ,{useState,useEffect,useRef} from 'react';
import { Form,Button,Table } from "react-bootstrap";
import axios from "axios";
export default function SalesInvoice() {

    const [packages,setPackages] = useState([]);
    const [salesorders,setSalesorders] = useState([]);
    const [customers,setCustomers] = useState([]);
    const [items,setItems] = useState([]);
    const [salesinvoice,setSalesInvoice] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const inputElement = useRef();
    const itid = useRef("");
    const [it,setIt] = useState("")
    const [itcost,setItcost] = useState(0)
    const [soqty,setSoQty] = useState(0)
    const [socustemail,setSoCustEmail] = useState("")
    const [socustadd,setSoCustAdd] = useState("")

    useEffect(() => {
      inputElement.current = inputValue;
      axios.get('http://localhost:5000/salesorders/'+inputElement.current)
      .then(res => {
        let datas = res.data;
        console.log(datas.so_item_id)
        itid.current = datas.so_item_id;
        setIt(datas.so_item_id);
        setSoQty(datas.so_qty);
        setSoCustEmail(datas.so_cust_email);
        setSoCustAdd(datas.so_cust_add);

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

    useEffect(() => {
        axios.get('http://localhost:5000/items/')
        .then(res => {
          let itemdatas = res.data;
          // console.log(itemdatas)
          setItems(itemdatas);
        })
  
      },["items"])

    // useEffect(() => {
    //     axios.get('http://localhost:5000/customer/')
    //     .then(res => {
    //       let custdatas = res.data;
    //       //console.log(custdatas)
    //       setCustomers(custdatas);
    //     })
  
    //   },["customers"])

    const addInvoice = (event)=> {
        event.preventDefault();

        const formData = event.target;
        const newSalesInvoice = {
            inv_id: formData.inv_id.value,
            inv_amt: formData.inv_amt.value,
            inv_email: formData.inv_email.value,
            inv_add: formData.inv_add.value
        }
  
    
        axios.post('http://localhost:5000/salesinvoice/add',newSalesInvoice)
        .then(res => console.log(res.data));


        setPackages(salesinvoice => [...salesinvoice,newSalesInvoice]);

      }


    return (  
        <div>
            <h1>SALES INVOICE</h1>
            <Form onSubmit={addInvoice} className="form-container">
                <Form.Group className="mb-3" controlId="formBasicItem">
                  <Form.Label>Sales Order ID</Form.Label>
                  <br/>
                    <select className="custom-select" name="inv_id" style={{width:"90%"}} onChange={(e) => setInputValue(e.target.value)}>
                    <option value="">SELECT ORDER ID</option>
                      {
                        salesorders.map((sale)=> {
                          return (
                            
                            <option value={sale._id} >sales Id:{sale._id} item Id:{sale.so_item_id} </option>
                            
                          )
                        })
                      }
                    </select>
                    <br/><br/>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicItem">
                 <Form.Label>Amount to be Payed    </Form.Label>   {/*  *QTY:{soqty} PRICE:{itcost} */}
                  <Form.Control type="number" placeholder="Enter Amount" value={itcost*soqty} name="inv_amt"  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicItem">
                  <Form.Label>Customer Email</Form.Label>
                  <Form.Control type="text" placeholder="Enter Address" value={socustemail} name="inv_email" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicItem">
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="text" placeholder="Enter Address" value={socustadd} name="inv_add" />
                </Form.Group>

                <Button variant="primary" type="submit">Add Invoice</Button>
            </Form>
        </div>
    );
}

