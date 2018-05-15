import React, { Component } from 'react';
import Item from './Item';


class List extends Component {
    render () {
        return (
            <ul className="listGenerique">
                {
                    this.props.list.map((item,index)  => {
                        return <Item article={item} key={index} buyItem={this.props.buyItem} />
                    })
                    
                }
            </ul>
        )
    }
}

export default List;