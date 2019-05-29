import React, { Component } from 'react';
import '../App.css';

class Order extends Component {
  constructor(props){
    super(props);
    this.cancelOrder = this.cancelOrder.bind(this);
    this.payOrder = this.payOrder.bind(this);
  }

  delete(product){
    console.log(product.idTicket);
    this.props.deleteElement(product.idTicket);
  }

  cancelOrder(){
    this.props.cancel();
  }

  payOrder(){
    this.props.pay();
  }

  render() {
    console.log(this.props.productsSelected);
    // debugger;

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
              {(product.meat) ? product.meat : ''}
              {(product.ingredients) ? product.ingredients : ''}
            </div>
            <div className='col-md-3' >
              $ {product.price}
            </div>
            <div className='col-md-1' >
              <button type='button' className='bg-transparent' onClick={this.delete.bind(this, product)}><i className='far fa-trash-alt'></i></button>
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
          <div className='container col-md-12 container-order vh-100 border border-secondary mb-1 shadow h-75' >
            {products}
            <div className='row'>
              <div className='col-md-5 offset-md-3'><span className='font-weight-bold'>Total</span></div>
              <div className='col-md-3 '><span className='font-weight-bold'>$ {this.props.totalOrder}</span></div>
            </div>
            <div className='row position-sticky'>
              <div className='col-md-6 '>
                <button type='button' className='btn button-terminar'onClick={this.cancelOrder}>CANCELAR ORDEN</button>
              </div>
              <div className='col-md-6 '>
                <button type='button' className='btn button-terminar'onClick={this.payOrder}>PAGAR </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Order;
