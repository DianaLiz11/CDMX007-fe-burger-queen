import React, { Component } from 'react';
import '../App.css';

class Order extends Component {
  render() {
    return (
      <div>
        <div className='row'>
          <div className='container col-md-12 d-block justify-content-around container-data-order my-2'>
            <p className='mb-0'>Cajero:</p>
            <p className='mb-0'>Cliente:</p>
            <p className='mb-0'>No. de Orden:</p>
          </div>
        </div>
        <div className='row'>
          <div className='container col-md-12 container-order vh-100 border border-secondary mb-1 shadow'>
            
          </div>
        </div>
      </div>
    )
  }
}

export default Order;
