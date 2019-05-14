import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import PrincipalMenu from './components/PrincipalMenu';
import Breakfast from './components/Breakfast';
import Order from './components/Order';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-8'>
            <PrincipalMenu />
            <div className='row'>
              <div className='col-md-12'>
                <div className='container d-flex justify-content-around container-options'>
                  <Breakfast />
                </div>
              </div>
            </div>
          </div>

          <div className='col-md-4'>
            <Order />

          </div>
        </div>
      </div>
    );
  }
}

//
// <div class="container">
// <div class="row">
//         <div class="col-md-8">
//           .col-md-8
//           <div class="row">
//             <div class="col-md-6">.col-md-6</div>
//             <div class="col-md-6">.col-md-6</div>
//           </div>
//         </div>
//         <div class="col-md-4">.col-md-4</div>
//       </div>
// </div>

export default App;
