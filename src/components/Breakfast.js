import React, { Component } from 'react';
import '../App.css';
import { menu } from '../data/menu.json';

class Breakfast extends Component {
  constructor(){
    super();
    this.state = {
      menu
    }
  }

  render() {

    const breakfastButtons= this.state.menu.breakfast.map(
      (product)=>{
        return(
          <button key = {product.id} type='button' className='btn btn-outline-info my-2 size-menu-button'>{product.item}</button>
        );
      }
    );

    const breakfastIngredientsButtons= this.state.menu.breakfast[2].ingredients.map(
      (product)=>{
        return(
          <button key = {product.name} type='button' className='btn btn-outline-success my-2 size-menu-button'>{product.name}</button>
        );
      }
    );

    return (
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
    );
  }
}

export default Breakfast;
