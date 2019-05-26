import React, { Component } from 'react';
import '../App.css';
import { submenuFood } from '../data/submenu.json';
import { submenuOrdersHistory} from '../data/submenu.json';
import {Link} from 'react-router-dom';


class Submenu extends Component {
  render() {
    let submenuButtons;
    console.log(this.props.location.pathname);
    if(this.props.location.pathname.includes('food')){
      submenuButtons= submenuFood.map(
        (option)=>{
          return(
            <Link key = {option.id} className='btn btn-outline-warning mb-2 size-button' to={option.link} role='button'>{option.item}</Link>
          );
        }
      );

    }
    else if (this.props.location.pathname.includes('ordersHistory')) {
      submenuButtons= submenuOrdersHistory.map(
        (option)=>{
          return(
            <Link key = {option.id} className='btn btn-outline-warning mb-2 size-button' to={option.link} role='button'>{option.item}</Link>
          );
        }
      );
    }

    return (
      <div className='row'>
        <div className='col-md-12 d-flex justify-content-around'>
          {submenuButtons}
        </div>
      </div>
    )
  }
}
//   render() {
//     return (
//       <div className='row'>
//         <div className='col-md-12 d-flex justify-content-around'>
//           <button type='button' className='btn btn-outline-danger mb-5 size-button'>Hamburguesa</button>
//           <button type='button' className='btn btn-outline-danger mb-5 size-button'>Guarnición</button>
//           <button type='button' className='btn btn-outline-danger mb-5 size-button'>Bebidas</button>
//           <button type='button' className='btn btn-outline-danger mb-5 size-button'>Promociones</button>
//         </div>
//       </div>
//     )
//   }
// }

export default Submenu;
