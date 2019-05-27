import React, { Component } from 'react';
import '../App.css';

class Order extends Component {
  constructor(props){
    super(props);
  }

  render() {
    let ingredientsOmitted = '';
    this.props.productsSelected.forEach(item => {
      if(item.id === 'MB03'){
        item.ingredients.forEach(ingredient =>{
          if(ingredient.isRequested === false){
            ingredientsOmitted += ' /SIN '+ingredient.name;
          }
        })
        console.log(ingredientsOmitted);
      }
      console.log(item);
    })

    const products = this.props.productsSelected.map(
      (product, index)=>{
        return(
          <div className='row border-product mt-1' key={index+'-'+product.id}>
            <div className='col-md-1' >
              <i className='far fa-edit'></i>
            </div>
            <div className='col-md-1' >
              {product.quantity}
            </div>
            <div className='col-md-5' >
              {product.item}
              {(product.id==='MB03') ? ingredientsOmitted : ''}
            </div>
            <div className='col-md-3' >
              $ {product.price}
            </div>
            <div className='col-md-1' >
              <i className='far fa-trash-alt'></i>
            </div>
          </div>
        );
      }
    )

    return (
      <div>
        <div className='row'>
          <div className='container col-md-12 d-block justify-content-around container-data-order my-2'>
            <p className='mb-0'>Cajero: </p>
            <p className='mb-0'>Cliente: {this.props.name} </p>
            <p className='mb-0'>No. de Orden:</p>
          </div>
        </div>
        <div className='row'>
          <div className='container col-md-12 container-order vh-100 border border-secondary mb-1 shadow'>
              {products}
              <div className='row'>
                <div className='col-md-5 offset-md-3'><span className='font-weight-bold'>Total</span></div>
                <div className='col-md-3 '><span className='font-weight-bold'>$ {this.props.totalOrder}</span></div>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Order;
