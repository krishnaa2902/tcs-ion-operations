import React, { useState } from 'react';
import { Form,Button,Table } from "react-bootstrap";
import Select from 'react-select';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function ItemGroup() {

    
    const [groups,setGroups] = useState([]);

    //----------------------------------------------------------------
    const addGrp = (event)=> {
      event.preventDefault();
      // console.log(event.target.item_name.value);
      const formData = event.target;
      const newItemgroup = {
        grp_name: formData.grp_name.value
      }
    
      axios.post('http://localhost:5000/itemgroups/add',newItemgroup)
        .then(res => console.log(res.data));
    
      //console.log(newItem);
      // add a new item inside item array
      setGroups(groups => [...groups,newItemgroup]);
      //console.log(items);
    }
    //----------------------------------------------------------------






    return (  
    <div>

            <Form onSubmit={addGrp} className="form-container">
                <Form.Group className="mb-3" controlId="formBasicItem">
                  
                  <Form.Label>Item Group</Form.Label>
                  <Form.Control type="text" placeholder="Enter Item Group" name="grp_name" />
                </Form.Group>
                <Button variant="primary" type="submit">Add Group</Button>
            </Form>

            

      

    </div>
    );
}
