import React, { Component } from 'react';
import './App.css';
import Panier from './Components/Panier.jsx';
import List from './Components/List.jsx';


let listArticles = [
  {
    nom: "Papier", 
    description : "une très jolie feuille blanche",
    prix : 2,
    stock : 250
  },
  {
    nom: "Stylo", 
    description : "de quatre couleurs",
    prix : 3,
    stock : 40
  },
  {
    nom: "Crayon à papier", 
    description : "taillable et facetté, la pointe en graphire HB",
    prix : 1,
    stock : 3
  },
  {
    nom:"Trousse",
    description: "Une super trousse ou on peux mettre des trucs dedans",
    prix: 15,
    stock: 45
  }
]

class App extends Component {
  constructor(props){
      super(props);

      this.state = {
        newSelectItem : false,
        newSelectPrice : false,
        totalPrice:0,
        disabled: false,
        cartList: []
      }

      this.buyItem = this.buyItem.bind(this);
      this.clearCart = this.clearCart.bind(this);
      this.removeToCart = this.removeToCart.bind(this);
  }

  addToCart(item) {
    let newItem = true;
    let newList= this.state.cartList;
    for (let i=0; i<this.state.cartList.length; i++) {
      if (this.state.cartList[i].name ===item) {
        newList[i].quantity++;
        return newItem = false;
      }
    }
    if (newItem) newList.push({name:item, quantity:1});
    this.setState ({cartList:newList})
  }

  removeToCart(item) {
    let id = 0;
    let index= 0;
    let newList = this.state.cartList;
    for (let i=0; i<this.state.cartList.length; i++) {
      if (this.state.cartList[i].name === item) {
        id = i;
      }
    }
    for (let i=0; i<listArticles.length; i++) {
      if (listArticles[i].nom === item) {
        index = i;
      }
    }
    this.updatePrice(-listArticles[index].prix);
    listArticles[index].stock++;
    if (newList[id].quantity>1) {
      newList[id].quantity--;
    } else {
      newList.splice(id,1);
    }
    this.setState({
      cartList:newList
    })
  }

  updatePrice(price) {
    let newValue = this.state.totalPrice;
    newValue+=price;
    this.setState({
      totalPrice: newValue
    })
  }

  reStock(name,quantity) {
    for (let i=0; i<listArticles.length; i++) {
      if (listArticles[i].nom === name) {
        listArticles[i].stock += quantity;
      }
    }
  }

  clearCart() {
    for (let i=0; i<this.state.cartList.length; i++) {
      this.reStock(this.state.cartList[i].name,this.state.cartList[i].quantity)
    }
    this.setState({
      totalPrice: 0,
      cartList : []
    })
  }

  buyItem(id) {
    if (listArticles[id].stock >0) {
      this.setState({
        newSelectItem : listArticles[id].nom,
        newSelectPrice : listArticles[id].prix
      })
      this.addToCart(listArticles[id].nom);
      this.updatePrice(listArticles[id].prix);
      listArticles[id].stock --;
    } else {
      this.setState({
        disabled: true
      })
    }
  }

  render() {
    return (
      <div className="App">
        <List list={listArticles} buyItem={this.buyItem} />
        <br />
        <Panier cartList={this.state.cartList} totalPrice={this.state.totalPrice} removeToCart={this.removeToCart} clearCart={this.clearCart} />
        <br />

      </div>
    );
  }
}

export default App;
