import React, { Component } from 'react';


class Item extends Component {
    render () {
        return (
            <li className="listItem" >
                <div className="itemHeader">
                    {this.props.article.nom}
                </div>
                <div className="itemBody">
                    <p className="itemDescription">
                    {this.props.article.description}
                    </p>
                    <p className="itemPrix">
                    {this.props.article.prix}€
                    </p>
                    <button onClick={this.props.buyItem.bind(this,this.props.article.nom,this.props.article.prix)} className="itemSubmit">
                        Ajouter au panier
                    </button>
                    
                    
                </div>
            </li>
        );
    }
}

export default Item;