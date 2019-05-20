import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import PrincipalMenu from './components/PrincipalMenu';
import Breakfast from './components/Breakfast';
import Order from './components/Order';
import NewOrder from './components/NewOrder';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8'>
              <PrincipalMenu />
              <div className='row'>
                <div className='col-md-12'>
                  <div className='container d-flex justify-content-around container-options vh-100'>
                    <Route path="/breakfast" component={Breakfast}/>
                    <Route path="/newOrder" component={NewOrder}/>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-md-4'>
              <Order />

            </div>
          </div>
        </div>
      </BrowserRouter>
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
