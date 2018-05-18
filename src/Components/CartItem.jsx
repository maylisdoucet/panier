import React, { Component } from 'react';


class CartItem extends Component {
    render () {
        return (
            <li className="cartItem" >
                <div className = "cartBody" >
                    Article: {this.props.article.name}
                    <br/>
                    Quantité :{this.props.article.quantity}
                    <br/>
                    <button onClick={this.props.removeToCart.bind(this,this.props.article.name)}>
                        Retirer du panier
                    </button>
                </div>
            </li>
        )
    }
}

export default CartItem;