import React ,{useState,useEffect,useRef} from 'react';
import { Form,Button,Table } from "react-bootstrap";
import axios from "axios";


export default function AddSalesOrders() {

        const [updateditem,setUpdateditem] = useState([]);
        const [upitem,setUpitem] = useState([]);
        const [salesorders,setSalesOrders] = useState([]);
        const [groups,setGroups] = useState([])
        const [items,setItems] = useState([])
        const [customers,setCustomers] = useState([])
        const custlist = useRef([])
        const [inputValue, setInputValue] = useState("");
        const [filcust,SetFilCust] = useState([]);
        

        const inputElement = useRef();
        const [custadd,setCustAdd] = useState("")


        useEffect(() => {
          axios.get('http://localhost:5000/customers/')
          .then(res => {
            let custdatas = res.data;
            setCustomers(custdatas);
          })

        },["customers"])

        useEffect(() => {
          inputElement.current = inputValue;
          axios.get('http://localhost:5000/customers/')
          .then(res => {
            let custdatas = res.data;
            // setCustomers(custdatas);
            
            const data = custdatas.filter(function(cust) {
              return cust.cust_email === inputElement.current;
            })
            console.log("qa")
            console.log(data)
            SetFilCust(data)

          })

        },[inputValue])



        // axios.get("api/blogs/" + this.state.pageIndex + "/10").then(res => {
        //   res.filter(function(author) {
        //     return author.firstName === this.state.query;
        //   });
        // });

        // useEffect(() => {
        //   inputElement.current = inputValue;
        //   const filtered = customers.filter(cust => {
        //     return cust.cust_email === inputElement.current;
        //   });

        //   console.log("cur")
        //   console.log(inputElement.current)
        //   console.log("fil")
        //   console.log(filtered)
        //   SetFilCust(filtered)
        

        // },[inputValue])
        

        useEffect(() => {
          axios.get('http://localhost:5000/items/')
          .then(res => {
            let itemdatas = res.data;
            // console.log(itemdatas)
            setItems(itemdatas);
          })
    
        },["items"])


        useEffect(() => {
          axios.get('http://localhost:5000/itemgroups/')
          .then(res => {
            let grpdatas = res.data;
            // console.log(grpdatas)
            setGroups(grpdatas);

          })
    
        },["groups"])

        useEffect(() => {
          axios.get('http://localhost:5000/itemgroups/')
          .then(res => {
            custlist.current = res.data
            console.log(custlist.current)
          })
    
        })
    
        const addsalesorderdetails = (event)=> {
            event.preventDefault();

            const formData = event.target;
            const newSalesOrders = {
                so_cust_email: formData.so_cust_email.value,
                so_grp_name: formData.so_grp_name.value,
                so_item_id: formData.so_item_id.value,
                so_cust_add: formData.so_cust_add.value,
                so_qty: Number(formData.so_qty.value)
            }

            axios.post('http://localhost:5000/salesorders/add',newSalesOrders)
            .then(res => console.log(res.data));

            setSalesOrders(salesorders => [...salesorders,newSalesOrders]);

          }


    return (  
        <div>
            <h1>SALES ORDERS</h1>
            <Form onSubmit={addsalesorderdetails} className="form-container">
                <Form.Group className="mb-3" controlId="formBasicItem">
                    <Form.Label>Customer Email</Form.Label>
                    <br/>
                    <select className="custom-select" name="so_cust_email" onChange={(e) => setInputValue(e.target.value)} >
                    <option value="">Select Group</option>
                      {
                        customers.map((cust,index)=> {
                          return (
                            <option value={cust.cust_email} key={index}> {cust.cust_email} </option>
                          )
                        })
                      }
                    </select>
                    <br/><br/>
          
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicItem">
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="text" placeholder="Enter Address" value={filcust.map((cus)=> {return cus.cust_add})} name="so_cust_add" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicItem">
                  <Form.Label>Item Group</Form.Label>
                  <br/>
                  <select className="custom-select" name="so_grp_name">
                <option value="">Select Group</option>
                    {
                      groups.map((group)=> {
                        return (
                          
                          <option value={group.grp_name}> {group.grp_name} </option>
                          
                        )
                      })
                    }
                  </select>
                  <br/><br/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicItem">
                  <Form.Label>Item Name</Form.Label>
                  <br/>
                  <select className="custom-select" name="so_item_id">
                  <option value="">Select Item</option>
                    {
                      items.map((item, index)=> {
                        return ( 
                          
                          <option value={item._id} key={index}>Item Name :{item.item_name} Item Id :{item._id}</option>
                          
                        )
                      })
                    }
                  </select>
                  <br/><br/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicItem">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control type="number" placeholder="Enter Item Quantity" name="so_qty" />
                </Form.Group>
                <Button variant="primary" type="submit">Add Sales Order</Button>
            </Form>
        </div>
    );
}

