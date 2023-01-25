import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';
import Catigories from './components/Catigories';
import ShowItem from './components/ShowItem';
import Page from './components/Page';



class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      count_orders: 1,
      count: 0,
      orders: [],
      currentItems: [],
      showedItems: [],
      items: [
        {
          id: 1,
          title: "Кружка с шаманом",
          img: "baikal cup.jpg",
          desc: "Очень красивая и стильная вещь урашение для любого человека на байкале",
          category: "cup",
          price: "500"
        },
        {
          id: 2,
          title: `Кружка "Я люблю байкал"`,
          img: "baikal cup2.jpg",
          desc: "Очень красивая и стильная вещь урашение для любого человека на байкале",
          category: "cup",
          price: "400"
        },
        {
          id: 3,
          title: "Брелки",
          img: "trinket.jpg",
          desc: "Очень красивая и стильная вещь урашение для любого человека на байкале",
          category: "trinket",
          price: "200"
        },
        {
          id: 4,
          title: "Термос",
          img: "thermos.jpg",
          desc: "Очень красивая и стильная вещь урашение для любого человека на байкале",
          category: "thermos",
          price: "1500"
        },
        {
          id: 5,
          title: "Тарелка с рисунком",
          img: "dish.jpg",
          desc: "Очень красивая и стильная вещь урашение для любого человека на байкале",
          category: "dish",
          price: "1000"
        },
        {
          id: 6,
          title: "Банная шапка",
          img: "hetters of bath.jpg",
          desc: "Очень красивая и стильная вещь урашение для любого человека на байкале",
          category: "hetters",
          price: "800"
        },
        {
          id: 7,
          title: "Кружка с шаманом",
          img: "baikal cup.jpg",
          desc: "Очень красивая и стильная вещь урашение для любого человека на байкале",
          category: "cup",
          price: "500"
        },
        {
          id: 8,
          title: `Кружка "Я люблю байкал"`,
          img: "baikal cup2.jpg",
          desc: "Очень красивая и стильная вещь урашение для любого человека на байкале",
          category: "cup",
          price: "400"
        },
        {
          id: 9,
          title: "Брелки",
          img: "trinket.jpg",
          desc: "Очень красивая и стильная вещь урашение для любого человека на байкале",
          category: "trinket",
          price: "200"
        },
        {
          id: 10,
          title: "Термос",
          img: "thermos.jpg",
          desc: "Очень красивая и стильная вещь урашение для любого человека на байкале",
          category: "thermos",
          price: "1500"
        },
        {
          id: 11,
          title: "Тарелка с рисунком",
          img: "dish.jpg",
          desc: "Очень красивая и стильная вещь урашение для любого человека на байкале",
          category: "dish",
          price: "1000"
        },

      ],
      showItem: false,
      fullItem: [],
      pageCount: 0
    }

    this.AddCountOrder = this.AddCountOrder.bind(this)
    this.ShowedItems = this.ShowedItems.bind(this)
    this.OnShowItem = this.OnShowItem.bind(this)
    this.state.currentItems = this.state.items
    this.state.showedItems = this.state.currentItems.slice(0, 6)
    this.state.pageCount = Math.ceil(this.state.currentItems.length/6)
    this.chooseCatigory = this.chooseCatigory.bind(this)
    this.dellOrder = this.dellOrder.bind(this)
    this.addToOrder = this.addToOrder.bind(this)

  }

  render(){
    return (
      <>
      <Header addCountOrder={this.AddCountOrder} onDel={this.dellOrder} count_orders={this.state.count_orders} count={this.state.count} orders={this.state.orders}/>
      <main className='main' >
        <section className='hero'>
          <div className='container cointainer__hero'>
          </div>
        </section>
        <section className='filters'>
          <div className='container container__filters'>
            <Catigories onFilter={this.chooseCatigory}/>
          </div>
        </section>
        <section className='shop'>
          <div className='container container__shop'>
              <Items onShowItem={this.OnShowItem} items={this.state.showedItems} onAdd={this.addToOrder}/>

            </div>
        </section>
        <section className='page'>
          <div className='container container__page'>
            <Page pageCount={this.state.pageCount} showedItems={this.ShowedItems} items={this.state.items}/>
          </div>
        </section>
        {this.state.showItem && <ShowItem onShowItem={this.OnShowItem} item={this.state.fullItem} onAdd={this.addToOrder}/>}
      </main>
      <Footer />
      
      </>
    );
  }

  ShowedItems(page, list){
    console.log(list)
      this.setState({showedItems: list.slice(6*(page-1), 6*page)})    
  }

  AddCountOrder(id, count){
    this.state.orders.forEach(el =>{
      if(el.id === id){
        el.count = count
        this.setState({orders: this.state.orders.filter((el) => el.id !== id)})
        this.setState({orders: [...this.state.orders, el]})
      }
    })
    
  }

  OnShowItem(item){
    this.setState({fullItem: item})
    this.setState({showItem: !this.state.showItem})
  }

  chooseCatigory(id){
    if(id === "all"){      
      this.setState({pageCount: Math.ceil(this.state.items.length/6)})
      this.ShowedItems(1, this.state.items)
      return
    }
    
    let filtrItems = this.state.items.filter((el) => el.category === id)
    this.setState({currentItems: filtrItems})
    this.setState({pageCount: Math.ceil(filtrItems.length/6)})
    this.ShowedItems(1, filtrItems)
  }

  dellOrder(id){
    this.setState({orders: this.state.orders.filter((el) => el.id !== id)})
  }

  addToOrder(item, countItem){
    let isInArray = false
    this.state.orders.forEach(el =>{
      if(el.id === item.id){
        isInArray = true
      }
    })

    if(!isInArray){
      item.count = countItem
      this.setState({orders: [...this.state.orders, item]})
      console.log(this.state.orders)
    }
  }

}

export default App;
