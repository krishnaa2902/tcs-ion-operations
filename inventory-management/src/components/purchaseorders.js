import React ,{useState,useEffect,useRef} from 'react';
import { Form,Button,Table } from "react-bootstrap";
import axios from "axios";


export default function AddPurchaseOrders() {

        const [updateditem,setUpdateditem] = useState([]);
        const [upitem,setUpitem] = useState([]);
        const [purchaseorders,setPurchaseOrders] = useState([]);
        const [groups,setGroups] = useState([])
        const [items,setItems] = useState([])
        const [vendors,setVendors] = useState([])
        const custlist = useRef([])

        useEffect(() => {
          axios.get('http://localhost:5000/vendors/')
          .then(res => {
            let vendatas = res.data;
            // console.log(custdatas)
            setVendors(vendatas);
          })
    
        },["vendors"])

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
    
        const addpurchaseorderdetails = (event)=> {
            event.preventDefault();

            const formData = event.target;
            const newPurchaseOrders = {
                po_cust_email: formData.po_cust_email.value,
                po_grp_name: formData.po_grp_name.value,
                po_item_id: formData.po_item_id.value,
                po_qty: Number(formData.po_qty.value)
            }



      
        
            axios.post('http://localhost:5000/purchaseorders/add',newPurchaseOrders)
            .then(res => console.log(res.data));


            setPurchaseOrders(purchaseorders => [...purchaseorders,newPurchaseOrders]);



            axios.get('http://localhost:5000/items/'+formData.po_item_id.value)
            .then(res => {
              const upitqty = {
                item_group_name :res.data.item_group_name,
                item_name : res.data.item_name,
                item_quantity : Number(res.data.item_quantity) + Number(formData.po_qty.value),
                item_dimensions : res.data.item_dimensions,
                item_weight : Number(res.data.item_weight),
                item_manufacturer : res.data.item_manufacturer,
                item_brand : res.data.item_brand,
                item_selling_price : Number(res.data.item_selling_price),
                item_cost_price : Number(res.data.item_cost_price),
                item_opening_stock : Number(res.data.item_opening_stock),
                item_reorder_point : Number(res.data.item_reorder_point),
                item_vendor : res.data.item_vendor
              }
              console.log("upitqty")
              console.log(upitqty)

              axios.post('http://localhost:5000/items/update/'+formData.po_item_id.value,upitqty)
              .then(res => console.log(res.data));

            });


            

          }


    return (  
        <div>
            <h1>PURCHASES ORDERS</h1>
            <Form onSubmit={addpurchaseorderdetails} className="form-container">
                <Form.Group className="mb-3" controlId="formBasicItem">
                    <Form.Label>Vendor Email</Form.Label>
                    <br/>
                    <select className="custom-select" name="po_cust_email">
                    <option value="">Select Group</option>
                      {
                        vendors.map((ven,index)=> {
                          return (
                            
                            <option value={ven.ven_email} key={index}> {ven.ven_email} </option>
                            
                          )
                        })
                      }
                    </select>
                    <br/><br/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicItem">
                  <Form.Label>Item Group</Form.Label>
                  <br/>
                  <select className="custom-select" name="po_grp_name">
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
                  <select className="custom-select" name="po_item_id">
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
                  <Form.Control type="number" placeholder="Enter Item Quantity" name="po_qty" />
                </Form.Group>
                <Button variant="primary" type="submit">Add Purchase Order</Button>
            </Form>
        </div>
    );
}

