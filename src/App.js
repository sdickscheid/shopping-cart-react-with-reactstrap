import React, { Component } from 'react';
// import './App.css';
import ShoppingCart from './components/ShoppingCart'


class App extends Component {
  constructor(){
    super()
    this.state = {
      items: [
        { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
        { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
        { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
        { id: 4, product: { id: 75, name: 'Scooby-Doo Compass', priceInCents: 2525 }, quantity: 4 },
      ],
      products: [
        { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
        { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
        { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
        { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
        { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
        { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
        { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
        { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
        { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
      ]
    }
  }

  addItemFunction = (newItem) => {
    this.setState({items: this.state.items.concat(newItem)})
  }

  render() {
    return (
      <div className="App">
        <ShoppingCart items={this.state.items} products={this.state.products} addItemFunction={this.addItemFunction}/>
      </div>
    );
  }
}

export default App;
