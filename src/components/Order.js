import React, { Component } from 'react';
import '../App.css';

class Order extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 d-block justify-content-around container-data-order my-2'>
            <p className='mb-0'>Cajero:</p>
            <p className='mb-0'>Cliente:</p>
            <p className='mb-0'>No. de Orden:</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
          </div>
        </div>
      </div>
    )
  }
}

export default Order;
