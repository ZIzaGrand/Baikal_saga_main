import React, { useState } from 'react'
import { AiFillDelete } from "react-icons/ai";
import { BiPlus, BiMinus } from "react-icons/bi";



export default function Order(props){
  const [count, setCount] = useState(1)

  return (
      <div className='order'>
          <div className='order-block-img'>
              <img className='img order-img' src={'./img/' + props.order.img} alt=''/>
          </div>
          <div className='order-block-info'>
              <h3 className='order-title'>{props.order.title}</h3>
              <h3 className='price'>{props.order.price}</h3>
              <AiFillDelete className="delete" onClick={() => props.onDel(props.order.id)}/>
              <div className='count-order'>
                <button onClick={() => {count > 1 && setCount(count - 1); props.addCountOrder(props.order.id, count)}}><BiMinus /></button>
                <p>{count}</p>
                <button onClick={() => {setCount(count + 1); props.addCountOrder(props.order.id, count)}}><BiPlus /></button>
              </div>
          </div>
      </div>
    )
  }

