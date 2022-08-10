import React ,{useState,useEffect,useRef} from 'react';
import { Form,Button,Table } from "react-bootstrap";
import CustomerShow from "./customerList";
import axios from "axios";
function AddCustomers() {

    
    const [deliverychallan,setDeliverychallan] = useState([]);
    const [salesorders,setSalesorders] = useState([]);
    const inputElement = useRef();
    const itid = useRef();
    const [socustemail,setSoCustEmail] = useState("")
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
      axios.get('http://localhost:5000/salesorders/')
      .then(res => {
        let saledatas = res.data;
        console.log(saledatas)
        setSalesorders(saledatas);
      })

    },["salesorders"])



    useEffect(() => {
      inputElement.current = inputValue;
      axios.get('http://localhost:5000/salesorders/'+inputElement.current)
      .then(res => {
        let datas = res.data;
        console.log(datas.so_item_id)
        itid.current = datas.so_item_id;
        setSoCustEmail(datas.so_cust_email);

        

      })
    }, [inputValue]);


    const addChallan = (event)=> {
        event.preventDefault();
        // console.log(event.target.item_name.value);
        const formData = event.target;
        const newDeliverychallan = {
            dc_cust_email:formData.dc_cust_email.value,
            dc_date:Date(formData.dc_date.value),
            dc_status: formData.dc_status.value
        }
  
    
        axios.post('http://localhost:5000/deliverychallan/add',deliverychallan)
        .then(res => console.log(res.data));
        

        setDeliverychallan(deliverychallan => [...deliverychallan,newDeliverychallan]);
        
      }

    return (  
        <div>
            <h1>DELIVERY CHALLAN</h1>
            <Form onSubmit={addChallan} className="form-container">
                <Form.Group className="mb-3" controlId="formBasicItem">
                  <Form.Label>Sales Order ID</Form.Label>
                    <br/>
                      <select className="custom-select" name="pac_id" style={{width:"90%"}} onChange={(e) => setInputValue(e.target.value)}>
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
                  <Form.Label>Customer Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Customer Email" value={socustemail} name="dc_cust_email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicItem">
                  <Form.Label>Delivery Challan Date</Form.Label>
                  <Form.Control type="date" placeholder="Enter Delivery Challan Date" name="dc_date" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicItem">
                  <Form.Label>Delivery Status</Form.Label>
                  <br/>
                  <select className="custom-select" name="dc_status">
                    <option value="">Select Status</option>
                    <option value="Challan Generated">Challan Generated</option>
                    <option value="Item Dispatched">Item Dispatched</option>
                    <option value="Delevered">Delevered</option>
                  </select>
                </Form.Group>
                <br/>

                <Button variant="primary" type="submit">Add Delivery Challan</Button>
            </Form>
            
        </div>
    );
}

export default AddCustomers;