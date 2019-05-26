import React, { Component } from 'react';
import '../App.css';
import { principalMenu } from '../data/principalMenu.json';
import {Link} from 'react-router-dom';

class PrincipalMenu extends Component {
  render() {

    const principalMenuButtons= principalMenu.map(
      (option)=>{
        return(
          <Link key = {option.id} className='btn btn-outline-danger mb-2 size-button' to={option.link} role='button'>{option.item}</Link>
        );
      }
    );

    return (
      <div className='row'>
        <div className='col-md-12 d-flex justify-content-around'>
          {principalMenuButtons}
        </div>
      </div>
    )
  }
}

export default PrincipalMenu;
