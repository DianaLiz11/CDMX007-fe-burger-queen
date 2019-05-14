import React, { Component } from 'react';
import '../App.css';

class Submenu extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-md-12 d-flex justify-content-around'>
          <button type='button' className='btn btn-outline-danger mb-5 size-button'>Hamburguesa</button>
          <button type='button' className='btn btn-outline-danger mb-5 size-button'>Guarnición</button>
          <button type='button' className='btn btn-outline-danger mb-5 size-button'>Bebidas</button>
          <button type='button' className='btn btn-outline-danger mb-5 size-button'>Promociones</button>
        </div>
      </div>
    )
  }
}

export default Submenu;
