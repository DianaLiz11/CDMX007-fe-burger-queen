import React, { Component } from 'react';
import '../App.css';

class NewOrder extends Component {
  render() {
    return(
      <div className='container d-flex justify-content-center'>
        <form className='my-5'>
          <div className='form-group'>
            <label for='txtName'>Nombre del cliente</label>
            <input type='text' className='form-control' id='txtName' placeholder='Ingrese nombre' />
          </div>
          <button type='button' className="btn btn-info btn-sm">Iniciar pedido</button>
        </form>
      </div>
    );
  }
}

export default NewOrder;
