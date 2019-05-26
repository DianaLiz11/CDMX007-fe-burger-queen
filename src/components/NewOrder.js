import React, { Component } from 'react';
import '../App.css';

class NewOrder extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.saveName(e.target.value);
  }


  render() {
    return(
      <div className='container d-flex justify-content-center'>
        <form className='my-5'>
          <div className='form-group'>
            <label>Nombre del cliente</label>
            <input type='text' className='form-control' id='txtName' placeholder='Ingrese nombre' onChange={this.handleChange} />
          </div>
        </form>
      </div>
    );
  }
}

export default NewOrder;
