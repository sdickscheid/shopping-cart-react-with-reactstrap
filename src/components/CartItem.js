import React from 'react'

const CartItem = (props) => {

  function centsToDollars(amt){
    let total = parseFloat(Math.round(amt) / 100).toFixed(2)
    return '$' + total
  }

  return (
    <div className="collection-item">
      <div className="row">
        <div className="col s8">{props.item.product.name}</div>
        <div className="col s2">{centsToDollars(props.item.product.priceInCents)}</div>
        <div className="col s2">{props.item.quantity}</div>
      </div>
    </div>
  )
}
export default CartItem
