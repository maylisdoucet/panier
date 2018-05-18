import React, { Component } from 'react';
import CartItem from './CartItem';

class Panier extends Component {
    render () {
        return (
            <div className="panier" >
                <div className = "panierHeader" >
                    Votre panier:
                </div>
                <ul>
                    {
                        this.props.cartList.map((item,index)  => {
                        return <CartItem article={item} index={index} key={index} removeToCart={this.props.removeToCart} />
                        })
                    }
                </ul>
                <div className = "panierFooter" >
                    Montant total: {this.props.totalPrice}€
                        <br/>
                    <button onClick={this.props.clearCart} >
                        Vider votre panier
                    </button>
                </div>
            </div>
        )
    }
}

export default Panier;