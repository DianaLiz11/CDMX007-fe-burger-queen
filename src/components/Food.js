import React, { Component } from 'react';
import '../App.css';
import { Menu } from '../data/menu.js';
import { MenuBase } from '../data/menuBase.js';


class Food extends Component {
  constructor(props){
    super(props);
    this.state = {
      menu:Object.assign({}, Menu),
      quantityItem:1,
      meatSelected: '',
      ingredientsSelected:''
    }
    this.selectItem = this.selectItem.bind(this);
    this.selectMeat = this.selectMeat.bind(this);
    this.changeIngredients = this.changeIngredients.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  selectItem(e) {
    console.log(e.target.id);
    const id = e.target.id;
    let menuTemp = this.state.menu;

    menuTemp.hamburger.forEach(element => {
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

  selectMeat(e){
    console.log(e.target.id);
    // let menuTemp = this.state.menu;
    // let meat ='';
    //
    // menuTemp.meat.forEach(element => {
    //   element.isRequested = false;
    //   if(element.id === id){
    //     element.isRequested = true;
    //     meat = ele
    //   }
    // });
    // this.setState({
    //   menu: menuTemp
    // })
    this.setState({
      meatSelected: ' /' + e.target.id
    })
  }

  changeIngredients(e){
    console.log(e.target.id);
    // let menuTemp = this.state.menu;
    //
    // menuTemp.ingredients.forEach(element => {
    //   //element.isRequested= true;
    //   if(element.name === e.target.id){
    //   //  element.isRequested=false;
    //   (element.isRequested) ? element.isRequested= false : element.isRequested=true;
    //   }
    // });
    //
    // this.setState({
    //      menu: menuTemp
    //    });

    this.setState({
      ingredientsSelected: this.state.ingredientsSelected + ' /SIN ' + e.target.id
    })
  }

  addProduct(){
    let product={};
    let menuTemp = this.state.menu;
    const quantity = this.state.quantityItem;
    menuTemp.hamburger.forEach(element => {
      console.log('elememnto:'+element);
      if(element.isSelected){
        element.quantity = quantity;

        if(this.state.meatSelected !== ''){
          element.meat = this.state.meatSelected;
        }
        if(this.state.ingredientsSelected !== ''){
          element.ingredients = this.state.ingredientsSelected;
        }
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
      menu: MenuBase,
      meatSelected:'',
      ingredientsSelected:''
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

    const hamburgerSizeButtons= this.state.menu.hamburger.map(
      (product)=>{
        return(
          <button key = {product.id} id={product.id} type='button' className='btn btn-outline-info my-2 size-menu-button' onClick={this.selectItem} > {product.item}</button>
        );
      }
    );

    const hamburgerMeatButtons= this.state.menu.meat.map(
      (product)=>{
        return(
          <button key = {product.name} id={product.name} type='button' className='btn btn-outline-info my-2 size-menu-button' onClick={this.selectMeat}>{product.name}</button>
        );
      }
    );

    const hamburgerIngredientsButtons= this.state.menu.ingredients.map(
      (product)=>{
        return(
          <button key = {product.name} id={product.name} type='button' className='btn btn-outline-success my-2 size-menu-button active' onClick={this.changeIngredients} >{product.name}</button>
        );
      }
    );

      return (
        <div>
          <div className='row'>
            <div className='col-md-12 d-flex justify-content-around flex-wrap'>
              {hamburgerSizeButtons}
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 d-flex justify-content-around flex-wrap'>
              {hamburgerMeatButtons}
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 d-flex justify-content-around flex-wrap' >
              {hamburgerIngredientsButtons}
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

export default Food;
