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
    stock : 30
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
        cartList : {
          name:'',
          quantity: 0,
          price:0
        }
      }

      this.buyItem = this.buyItem.bind(this);
  }

  buyItem (nom,prix) {
    let available = listArticles.find(elt=> elt.nom === nom);
      console.log('cet article est disponible '+JSON.stringify(available,0,2));
    console.log("Votre sélection: "+nom+" ,pour la modique somme de "+prix);
  }

  render() {
    return (
      <div className="App">
        <List list={listArticles} buyItem={this.buyItem} />
        <br />
        <Panier />
        <br />

      </div>
    );
  }
}

export default App;
