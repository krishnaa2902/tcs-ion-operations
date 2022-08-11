import React ,{ useState ,useEffect}from 'react';
import { Form,Button,Table } from "react-bootstrap";
import {Link,useParams} from 'react-router-dom';
import axios from "axios";
export default function EditItems(  ) {

    const [groups,setGroups] = useState([])

    useEffect(() => {
      axios.get('http://localhost:5000/itemgroups/')
      .then(res => {
        let grpdatas = res.data;
        console.log(grpdatas)
        setGroups(grpdatas);
      })

    },["groups"])

    const [editItems,setEditItems] = useState([])
    let id = useParams().id;
	useEffect(() => {
		axios.get('http://localhost:5000/items/'+id)
		.then(res => {
			let itemdata = res.data;
			setEditItems(itemdata);
		})
		
	},[editItems])

    const edititemsdetails = (event)=> {
        event.preventDefault();
        const formData = event.target;

        const newEditItems = {
            item_group_name: formData.item_group_name.value,
            item_name: formData.item_name.value,
            item_quantity: Number(formData.item_quantity.value),
            item_dimensions: formData.item_dimensions.value,
            item_weight: formData.item_weight.value,
            item_manufacturer: formData.item_manufacturer.value,
            item_brand: formData.item_brand.value,
            item_selling_price: formData.item_selling_price.value,
            item_cost_price: formData.item_cost_price.value,
            item_opening_stock: formData.item_opening_stock.value,
            item_reorder_point: formData.item_reorder_point.value,
            item_vendor: formData.item_vendor.value,
            item_image: formData.item_image.value
          }

        
        axios.post('http://localhost:5000/items/update/'+id,newEditItems)
        .then(res => {
            console.log("hellos")
            console.log(res.data);
        })
        setEditItems(newEditItems);
    }




    return ( 
        <div>
            <h1>Edit Customer {editItems.item_name} </h1>
            {
                    

            


                    <Form onSubmit={edititemsdetails} className="form-container">
                    <div className="row"> 
                      <div className="column"> 
                      <Form.Group className="mb-3" controlId="formBasicItem">
                        <Form.Label>Item Group Name</Form.Label>
                        <br/>
                        <select className="custom-select" name="item_group_name" >
                        <option value="">Select Group</option>
                          {
                            groups.map((group)=> {
                              return (
                                
                                <option value={group.grp_name}> {group.grp_name} </option>
                                
                              )
                            })
                          }
                        </select>
                      </Form.Group>
                      <br/><br/>
                      </div>  
                    </div>
      
      
                    <div className="row"> 
                      <div className="column"> 
                      <Form.Group className="mb-3" controlId="formBasicItem">
                        <Form.Label>Item Name</Form.Label>
                        <Form.Control type="text" placeholder={editItems.item_name} name="item_name" />  
                      </Form.Group>
                      </div>  
                      <div className="column">
                      <Form.Group className="mb-3" controlId="formBasicPrice">
                        <Form.Label>Units</Form.Label>
                        <Form.Control type="number" placeholder={editItems.item_quantity} name="item_quantity" />
                      </Form.Group>
                      </div>
                    </div>
      
                    <div className="row"> 
                      <div className="column">   
                      <Form.Group className="mb-3" controlId="formBasicQuantity" >
                        <Form.Label>Dimension</Form.Label>
                        <Form.Control type="text" placeholder={editItems.item_dimensions} name="item_dimensions"/>
                      </Form.Group>
                      </div>  
                      <div className="column">
                      <Form.Group className="mb-3" controlId="formBasicPrice">
                        <Form.Label>Weight</Form.Label>
                        <Form.Control type="number" placeholder={editItems.item_weight} name="item_weight" />
                      </Form.Group>
                      </div>
                    </div>
      
                    <div className="row"> 
                      <div className="column">             
                      <Form.Group className="mb-3" controlId="formBasicPrice">
                        <Form.Label>Manufacturer</Form.Label>
                        <Form.Control type="text" placeholder={editItems.item_manufacturer} name="item_manufacturer" />
                      </Form.Group>
                      </div>  
                      <div className="column">
                      <Form.Group className="mb-3" controlId="formBasicPrice">
                        <Form.Label>Brand</Form.Label>
                        <Form.Control type="text" placeholder={editItems.item_brand} name="item_brand" />
                      </Form.Group>
                      </div>
                    </div>                
                    <div className="row"> 
                      <div className="column">                   
                      <Form.Group className="mb-3" controlId="formBasicPrice">
                        <Form.Label>Selling Price</Form.Label>
                        <Form.Control type="number" placeholder={editItems.item_selling_price} name="item_selling_price" />
                      </Form.Group>
                      </div>  
                      <div className="column">
                      <Form.Group className="mb-3" controlId="formBasicPrice">
                        <Form.Label>Cost Price</Form.Label>
                        <Form.Control type="number" placeholder={editItems.item_cost_price} name="item_cost_price" />
                      </Form.Group>
                      </div>
                    </div> 
      
                    <div className="row"> 
                      <div className="column"> 
                      <Form.Group className="mb-3" controlId="formBasicPrice">
                        <Form.Label>Opening Stock</Form.Label>
                        <Form.Control type="number" placeholder={editItems.item_opening_stock} name="item_opening_stock" />
                      </Form.Group>
                      </div>  
                      <div className="column">
                      <Form.Group className="mb-3" controlId="formBasicPrice">
                        <Form.Label>Reorder Point</Form.Label>
                        <Form.Control type="number" placeholder={editItems.item_reorder_point} name="item_reorder_point" />
                      </Form.Group>
                      </div>
                    </div> 
                    <div className="row"> 
                      <div className="column"> 
                      <Form.Group className="mb-3" controlId="formBasicPrice">
                        <Form.Label>Vendor</Form.Label>
                        <Form.Control type="text" placeholder={editItems.item_vendor} name="item_vendor" />
                      </Form.Group>
                      </div>  
                      {/* <div className="column">
                      <Form.Group className="mb-3" controlId="formBasicPrice">
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="file" accept="image/*" placeholder={editItems.item_image} name="item_image" />
                      </Form.Group>
                      </div> */}
                    </div>             
                    <Button variant="primary" type="submit">
                      Add to Invetory
                    </Button>
                  </Form>
                    
                        
            }
            
        </div>
    );
}
