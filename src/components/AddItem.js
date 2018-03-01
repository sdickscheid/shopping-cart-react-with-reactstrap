import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';

export default class AddItem extends React.Component {

  constructor(){
    super()
    this.state = {
      productId: 40,
      quantity: 0,
    }
  }

  handleClick = () => {
    let theProduct = this.props.products.filter(product => product.id === Number(this.state.productId))[0]

    this.props.addItemFunction({
      product: theProduct,
      quantity: this.state.quantity
    })
  }

  render() {

    let availableProducts = this.props.products.map(product => {
      return(
        <option key={product.id} value={product.id}>{product.name}</option>
      )
    })

    return (
      <Container>
        <div className="container add-item-form">
          <h3 className="form-title">Select a Product</h3>
          <Form>
            <FormGroup>
              <Label for="productSelect">Product List</Label>
              <Input
                type="select"
                value={this.state.productId}
                onChange={(e) => this.setState({productId: e.target.value})}
              >
                {availableProducts}
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="quantity">Quantity</Label>
              <Input
                type="text"
                value={this.state.quantity}
                onChange={(e) => this.setState({quantity: e.target.value})}
              />
            </FormGroup>
            <Button onClick={this.handleClick}>Add to Cart</Button>
          </Form>
        </div>
      </Container>

    );
  }
}
