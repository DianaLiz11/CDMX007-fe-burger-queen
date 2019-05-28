import React, { Component } from 'react';
import '../App.css';

class Order extends Component {
  constructor(props){
    super(props);
    // this.delete = this.delete.bind(this);
  }

  delete(product){
    console.log(product.idTicket);

    this.props.deleteElement(product.idTicket);

    // this.setState({
    //
    //   //menu: Object.assign({}, Menu)
    // })
  }

  render() {
    // let ingredientsOmitted = '';
    console.log(this.props.productsSelected);
    // debugger;
    this.props.productsSelected.forEach(item => {
      if(item.ingredients){
        item.ingredientsOmitted = '';
        item.ingredients.forEach(ingredient =>{
          if(ingredient.isRequested === false){
            item.ingredientsOmitted += ' /SIN '+ingredient.name;
          }
        })
        console.log(item.ingredientsOmitted);
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
              {(product.ingredientsOmitted) ? product.ingredientsOmitted : ''}
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
