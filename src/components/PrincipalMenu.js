import React, { Component } from 'react';
import '../App.css';

class PrincipalMenu extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-md-12 d-flex justify-content-around'>
          <button type='button' className='btn btn-outline-danger mb-5 size-button'>Desayuno</button>
          <button type='button' className='btn btn-outline-danger mb-5 size-button'>Comida</button>
          <button type='button' className='btn btn-outline-danger mb-5 size-button'>Nuevo pedido</button>
          <button type='button' className='btn btn-outline-danger mb-5 size-button'>Historial de pedidos</button>
        </div>
      </div>
    )
  }
}

export default PrincipalMenu;
