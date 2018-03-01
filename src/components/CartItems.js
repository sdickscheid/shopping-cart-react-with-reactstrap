import React from 'react'
import '../App.css';
import { Container, Row, Col } from 'reactstrap'
import CartItem from './CartItem'

const CartItems = (props) => {
  let cartItemsList = props.items.map(item => {
    return(
      <CartItem key={item.id} item={item} />
    )
  })

  let totalPrice = props.items.reduce((acc, currValue) => {
    return acc + (currValue.quantity * (currValue.product.priceInCents/100))
  }, 0)

  let totalItems = props.items.reduce((acc, currValue) => {
    return acc + Number(currValue.quantity)
  }, 0)


  return (
    <Container>
      <div className="container shopping-cart">
        <h3 className="cart-title">Shopping Cart Items</h3>
        <div className="collection">
          <div className="collection-item row cart-items-header">
            <div className="col s8">Product</div>
            <div className="col s2">Price</div>
            <div className="col s2">Quantity</div>
          </div>
          {cartItemsList}
        </div>
        <div className="collection">
          <div className="collection-item row cart-items-totals">
            <div className="col s8">Shopping Cart Totals</div>
            <div className="col s2">${totalPrice}</div>
            <div className="col s2">Qty: {totalItems}</div>
          </div>
        </div>
      </div>
    </Container>

  )
}
export default CartItems
