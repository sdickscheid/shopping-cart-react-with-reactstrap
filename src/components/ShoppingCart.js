import React from 'react'
import CartItems from './CartItems'
import CartItem from './CartItem'
import Header from './Header'
import Footer from './Footer'
import AddItem from './AddItem'

const ShoppingCart = ({items, products, addItemFunction}) => {
  let legalLine = "2018 | All Rights Reserved"
  return (
    <div>
      <Header />
      <AddItem products={products} addItemFunction={addItemFunction}/>
      <CartItems items={items} />
      <Footer copyright={legalLine}/>
    </div>
  )
}
export default ShoppingCart
