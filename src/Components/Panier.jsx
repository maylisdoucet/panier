import React, { Component } from 'react';

   
class Panier extends Component {

    constructor(props){
        super(props);
        this.state = {
            nomArticle: "",
            quantiteArticle: "",
            prixArticle: "",
            prixTotal: ""
        }
    }


    render () {
        return (
            <div className="panier" >
                <p className="panierHeader">
                    {}
                </p>

                <div className="panierBody">
                    <p className="choix">
                    {
                    }
                    </p>
                    <div className="prixtotal">
                    {}
                    </div>
                </div>
            </div>
        )
    }
}

export default Panier;