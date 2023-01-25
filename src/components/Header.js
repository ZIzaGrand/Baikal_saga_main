import React, { useState } from 'react'
import {FaShoppingCart} from "react-icons/fa";
import Order from './Order';



const showOrders = (props) =>{
  let summa = 0
  props.orders.forEach(el => {
    summa += Number.parseInt(el.price)
  })

  return(
    <>
      {props.orders.map(el =>  (
        
        <Order addCountOrder={props.addCountOrder} useSumm={useSumm} count_orders={props.count_orders} onDel={props.onDel} key={el.id} order={el}/>
      ))}
      <div className='block-sale'>
        <p className='price'>Сумма: {summa}</p>
        <button className='sale-order'>Заказать</button>
      </div>

    </>
  )
}

const showNothing = () =>{
  return(
    <div className='empty'>
      <h3>Тут ничего нет</h3>
    </div>
  )
}


export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false)

  return (
    <header className='header'>
        <div className='container container__header'>
            <div className='block__logo'>
                <h2 className='logo'>Байкальская Сага</h2>
            </div>
            <nav className='nav header__nav'>
              <ul className='list__reset list nav__list'>
                <li className='list__item'>
                <a href='https://vk.com/feed' className='link__reset link'><h3 className='nav-item'>Главная</h3></a>

                </li>
                <li className='list__item'>
                <a href='https://vk.com/feed' className='link__reset link'><h3 className='nav-item'>Магази</h3></a>

                </li>
                <li className='list__item'>
                <a href='https://vk.com/feed' className='link__reset link'><h3 className='nav-item'>Туры</h3></a>

                </li>
                
              </ul>
                
            </nav>
            <div className="hamper">
              <FaShoppingCart onClick={() => setCartOpen(!cartOpen)} className={`shopcart ${cartOpen && "active"} `}/>
              <div className='block-count'>
              <p className='order-count' onClick={() => setCartOpen(!cartOpen)}>{props.orders.length}</p>
              </div>
            </div>
            {cartOpen && (
                
                <div className='good-list'>
                  {props.orders.length > 0 ?
                    showOrders(props): showNothing()}

                </div>
                
              )}

        </div>
    </header>
  )
}
