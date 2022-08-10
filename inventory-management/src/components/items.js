import { Form,Button,Table } from "react-bootstrap";
import { useState ,useEffect,useRef,useCallback} from "react";
import ItemShow from "./item-dashboard";
import ItemGroup from "./itemGroupComponent";
import axios from 'axios';

//add item handler method


export default function AddItem() {
    
    //type of data [stateData, StateUpdateFunction] = useState[initialData]
    //let initialValue = [];
    const [items,setItem] = useState([]);
    const [groups,setGroups] = useState([])
    const groupref = useRef({})
    
  
    useEffect(() => {
      axios.get('http://localhost:5000/itemgroups/')
      .then(res => {
        let grpdatas = res.data;
        console.log(grpdatas)
        setGroups(grpdatas);
      })

    },["groups"])
   



  
      
//----------------------------------------------------------------

//----------------------------------------------------------------

    
    //add item handler method
    const add = (event)=> {
      event.preventDefault();
      // console.log(event.target.item_name.value);
      const formData = event.target;
      const newItem = {
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

      axios.post('http://localhost:5000/items/add',newItem)
        .then(res => console.log(res.data));

      //console.log(newItem);
      // add a new item inside item array
      setItem(items => [...items,newItem]);
      //console.log(items);
    }
    // increment qty by 1

    //<div className="row">
    //<div className="column">
    //</div>
    
    return (
        <div>
              {/* <ItemGroup/> */}
            
              <Form onSubmit={add} className="form-container">
              <div className="row"> 
                <div className="column"> 
                <Form.Group className="mb-3" controlId="formBasicItem">
                  <Form.Label>Item Group Name</Form.Label>
                  <br/>
                  <select className="custom-select" name="item_group_name">
                  <option value="">Select Group</option>
                    {
                      groups.map((group)=> {
                        return (
                          
                          <option value={group.grp_name} > {group.grp_name} </option>
                          
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
                  <Form.Control type="text" placeholder="Enter Item" name="item_name" />
                </Form.Group>
                </div>  
                <div className="column">
                <Form.Group className="mb-3" controlId="formBasicPrice">
                  <Form.Label>Units</Form.Label>
                  <Form.Control type="number" placeholder="Enter Units" name="item_quantity" />
                </Form.Group>
                </div>
              </div>

              <div className="row"> 
                <div className="column">   
                <Form.Group className="mb-3" controlId="formBasicQuantity" >
                  <Form.Label>Dimension</Form.Label>
                  <Form.Control type="text" placeholder="Enter Dimension" name="item_dimensions"/>
                </Form.Group>
                </div>  
                <div className="column">
                <Form.Group className="mb-3" controlId="formBasicPrice">
                  <Form.Label>Weight</Form.Label>
                  <Form.Control type="number" placeholder="Enter Weight" name="item_weight" />
                </Form.Group>
                </div>
              </div>  

              <div className="row"> 
                <div className="column">             
                <Form.Group className="mb-3" controlId="formBasicPrice">
                  <Form.Label>Manufacturer</Form.Label>
                  <Form.Control type="text" placeholder="Enter Manufacturer Name" name="item_manufacturer" />
                </Form.Group>
                </div>  
                <div className="column">
                <Form.Group className="mb-3" controlId="formBasicPrice">
                  <Form.Label>Brand</Form.Label>
                  <Form.Control type="text" placeholder="Enter Brand Name" name="item_brand" />
                </Form.Group>
                </div>
              </div>                
              <div className="row"> 
                <div className="column">                   
                <Form.Group className="mb-3" controlId="formBasicPrice">
                  <Form.Label>Selling Price</Form.Label>
                  <Form.Control type="number" placeholder="Enter Selling Price" name="item_selling_price" />
                </Form.Group>
                </div>  
                <div className="column">
                <Form.Group className="mb-3" controlId="formBasicPrice">
                  <Form.Label>Cost Price</Form.Label>
                  <Form.Control type="number" placeholder="Enter Cost Price" name="item_cost_price" />
                </Form.Group>
                </div>
              </div> 

              <div className="row"> 
                <div className="column"> 
                <Form.Group className="mb-3" controlId="formBasicPrice">
                  <Form.Label>Opening Stock</Form.Label>
                  <Form.Control type="number" placeholder="Enter Opening Stock" name="item_opening_stock" />
                </Form.Group>
                </div>  
                <div className="column">
                <Form.Group className="mb-3" controlId="formBasicPrice">
                  <Form.Label>Reorder Point</Form.Label>
                  <Form.Control type="number" placeholder="Enter Reorder Point" name="item_reorder_point" />
                </Form.Group>
                </div>
              </div> 
              <div className="row"> 
                <div className="column"> 
                <Form.Group className="mb-3" controlId="formBasicPrice">
                  <Form.Label>Vendor</Form.Label>
                  <Form.Control type="text" placeholder="Enter preferred Vendor" name="item_vendor" />
                </Form.Group>
                </div>  
                <div className="column">
                <Form.Group className="mb-3" controlId="formBasicPrice">
                  <Form.Label>Image</Form.Label>
                  <Form.Control type="file" accept="image/*" placeholder="Upload Image" name="item_image" />
                </Form.Group>
                </div>
              </div>             
              <Button variant="primary" type="submit">
                Add to Invetory
              </Button>
            </Form>
           




        </div>
    )
}