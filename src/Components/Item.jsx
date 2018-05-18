import React, { Component } from 'react';


class Item extends Component {
    render () {
        let disabled = false;
        (this.props.article.stock===0)?disabled=true:disabled=false;
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
                    <button disabled={disabled} onClick={this.props.buyItem.bind(this,this.props.index)} className="itemSubmit">
                        Ajouter au panier
                    </button>
                    
                    
                </div>
            </li>
        );
    }
}

export default Item;