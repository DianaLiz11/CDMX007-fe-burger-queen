import React, { Component } from 'react';
import '../App.css';
// import { menu } from '../data/menu.json';
// import { breakfast } from '../data/breakfast.json';
import { Menu } from '../data/menu.js';


class Breakfast extends Component {
  constructor(props){
    super(props);
    this.state = {
      menu:Menu,
      quantityItem:1
    }
    this.selectItem = this.selectItem.bind(this);
    this.changeIngredients = this.changeIngredients.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  selectItem(e) {
    // console.log(e.target.id);
    const id = e.target.id;

    console.log(id);

    let menuTemp = this.state.menu;

    menuTemp.breakfast.forEach(element => {
      if(element.id === id){
        element.isSelected = true;
        element.quantity = 1;
      }
    });
    this.setState({
      menu: menuTemp
    })
  }

  changeIngredients(e){
    console.log(e.target.id);
    console.log(e.target.id.substr(4));
    let menuTemp = this.state.menu;

    menuTemp.breakfast[2].ingredients.forEach(element => {
      if(element.name === e.target.id.substr(4)){
        (element.isRequested) ? element.isRequested= false : element.isRequested=true;
      }
    });

    this.setState({
         menu: menuTemp
       });
  }

  addProduct(){
    let product=[];
    const quantity = this.state.quantityItem;
    //let idSelected;
    this.state.menu.breakfast.forEach(element =>{
        if(element.isSelected){
          element.quantity = quantity;
          product = element;
          //idSelected = element.id;
        }
      })

    this.props.addElement(product);

    this.setState({
      quantityItem: 1,
      menu: Menu
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

    const idSandwich = this.state.menu.breakfast[2].id;

    const breakfastButtons= this.state.menu.breakfast.map(
      (product)=>{
        return(
          <button key = {product.id} id={product.id} type='button' className='btn btn-outline-info my-2 size-menu-button' onClick={this.selectItem}>{product.item}</button>
        );
      }
    );

    const breakfastIngredientsButtons= this.state.menu.breakfast[2].ingredients.map(
      (product)=>{
        return(
          <button key = {idSandwich+product.name} id={idSandwich+product.name} type='button' className='btn btn-outline-success my-2 size-menu-button active' onClick={this.changeIngredients} >{product.name}</button>
        );
      }
    );

console.log(breakfastButtons);
    return (
      <div>
        <div className='row'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='col-md-12 d-flex justify-content-around flex-wrap'>
                {breakfastButtons[2]}
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12 d-flex justify-content-around flex-wrap'>
                {breakfastIngredientsButtons}
              </div>
            </div>
          </div>
          <div className='col-md-4 d-block justify-content-around'>
            <h5 className='text-secondary text-center mt-2'>BEBIDAS</h5>
            {breakfastButtons[0]}
            {breakfastButtons[1]}
            {breakfastButtons[3]}
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
            <button type='button' className='btn button-add mb-5' onClick={this.addProduct}>PEDIR</button>
          </div>
        </div>
      </div>

    );
  }
}

export default Breakfast;
