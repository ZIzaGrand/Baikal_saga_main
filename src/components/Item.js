import React, { Component } from 'react'
import { BiPlus } from "react-icons/bi";


export class Item extends Component {
  render() {
    return (

        <div className='item' >
            <div className='block-img' onClick={() => this.props.onShowItem(this.props.item)}>
                <img className='img item-img' src={'./img/' + this.props.item.img} alt=''/>
            </div>
            <div className='block-info'>
                <h3 className='item-title'>{this.props.item.title}</h3>
                <p className='desc'>{this.props.item.desc}</p>
                <h3 className='price'>{this.props.item.price}</h3>
                <BiPlus className="add-item" onClick={() => this.props.onAdd(this.props.item, 1)}/>
            </div>
        </div>
        
      
    )
  }
}

export default Item