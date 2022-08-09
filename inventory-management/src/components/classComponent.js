import { Form,Button,Table } from "react-bootstrap";
import React ,{ Component } from "react";

export default class AddInventory extends Component {
    constructor(props) {
        super(props);

        this.onChangeItemName = this.onChangeItemName.bind(this);
        this.onChangeItemPrice = this.onChangeItemPrice.bind(this);
        this.onChangeItemQuantity= this.onChangeItemQuantity.bind(this);

        this.state = {
            item_name: '',
            item_price: '',
            item_quantity: ''
        };


    }



    onChangeItemName(e) {
        this.setState({ 
            item_name: e.target.value
        });
    }

    onChangeItemPrice(e) {
        this.setState({ 
            item_price: e.target.value
        });
    }

    onChangeItemQuantity(e) {
        this.setState({ 
            item_quantity: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`form submitted`);
        console.log(`item_name:${this.state.item_name}`);
        console.log(`item_price:${this.state.item_price}`);
        console.log(`item_quantity:${this.state.item_quantity}`);
        
        this.setState = ({
            item_name: '',
            item_price: '',
            item_quantity: ''
        })

    }

    render() {
        return(
            <div style={{marginTop: 20}}>
                <Form onSubmit={this.onSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicItem">
                    <Form.Label>Item Name</Form.Label>
                    <input type="text" className="form-control" placeholder="Enter Item"  value={this.state.item_name} onChange={this.onChangeItemName}/>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" placeholder="Enter Price"  value={this.state.item_price} onChange={this.onChangeItemPrice}/>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicQuantity" >
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control type="number" placeholder="Enter Quantity"  value={this.state.item_quantity} onChange={this.onChangeItemQuantity}/>
                  </Form.Group>
                  <Button variant="primary" type="submit" value="AddItem">
                    Add to Invetory
                  </Button>
                </Form>

            </div>
        )
    } 
}