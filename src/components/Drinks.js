import React, { Component } from 'react';
import '../App.css';
import { Menu } from '../data/menu.js';
import { MenuBase } from '../data/menuBase.js';


class Drinks extends Component {
  constructor(props){
    super(props);
    this.state = {
      menu:Object.assign({}, Menu),
      quantityItem:1
    }
    this.selectItem = this.selectItem.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  selectItem(e) {
    console.log(e.target.id);
    const id = e.target.id;
    let menuTemp = this.state.menu;

    menuTemp.drinks.forEach(element => {
      element.isSelected = false;
      if(element.id === id){
        element.isSelected = true;
        // element.quantity = 1;
      }
    });
    this.setState({
      menu: menuTemp
    })
  }

  addProduct(){
    let product={};
    let menuTemp = this.state.menu;
    const quantity = this.state.quantityItem;
    menuTemp.drinks.forEach(element => {
      if(element.isSelected){
        element.quantity = quantity;
        product = element;
      }
    });
    this.setState({
      menu: menuTemp
    })

    console.log('producto a enviar:'+product);
    this.props.addElement(product);

    this.setState({
      quantityItem: 1,
      menu: MenuBase
    })
  }

  increase(){
    this.setState({
      quantityItem: this.state.quantityItem +1
    })
  }

  decrease(){
    if(this.state.quantityItem > 1){
      this.setState({
        quantityItem: this.state.quantityItem -1
      })
    }
  }

  render() {

    const drinksButtons= this.state.menu.drinks.map(
      (product)=>{
        return(
          <button key = {product.id} id={product.id} type='button' className='btn btn-outline-info my-2 size-menu-button' onClick={this.selectItem} > {product.item}</button>
        );
      }
    );
      return (
        <div>
          <div className='row'>
            <div className='col-md-6 d-flex flex-column justify-content-center'>
              <h5 className='text-secondary text-center mt-2'>AGUA</h5>
              {drinksButtons[0]}
              {drinksButtons[1]}

            </div>
            <div className='col-md-6 d-flex flex-column justify-content-center'>
              <h5 className='text-secondary text-center mt-2'>REFRESCO</h5>
              {drinksButtons[2]}
              {drinksButtons[3]}
            </div>
          </div>
          <div className='container fixed-bottom d-flex flex-row'>
            <div className='col-md-4 d-flex justify-content-center'>
              <div className='border border-secondary size-quntity-container d-flex justify-content-center align-items-center'>
                Cantidad
                <button type='button' className='btn btn-light mx-2' onClick={this.increase} ><i className="fas fa-sort-up"></i></button>
                <span>{this.state.quantityItem}</span>
                <button type='button' className='btn btn-light mx-2' onClick={this.decrease}><i className="fas fa-sort-down"></i></button>
              </div>
            </div>
            <div className='col-md-4 d-flex justify-content-center'>
              <button type='button' className='btn button-add mb-5' onClick={this.addProduct}>AGREGAR</button>
            </div>
          </div>
        </div>
      );
  }
}

export default Drinks;
