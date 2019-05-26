import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import PrincipalMenu from './components/PrincipalMenu';
import Breakfast from './components/Breakfast';
import Order from './components/Order';
import NewOrder from './components/NewOrder';
import Submenu from './components/Submenu';
import { menu } from './data/menu.json';

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      menu,
      custumerName: ''
    }
    this.saveNameCustomer = this.saveNameCustomer.bind(this);
  }

  saveNameCustomer(name) {
    this.setState({custumerName: name});
  }

  render() {
    return (
      <BrowserRouter>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8'>
              <PrincipalMenu />
              <div className='row'>
                <div className='col-md-12'>
                  <Route path="/food" component={Submenu}/>
                  <Route path="/ordersHistory" component={Submenu}/>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='container d-flex justify-content-around container-options vh-100'>
                    <Route path="/breakfast"  render={(props) => <Breakfast {...props} />} />
                    <Route path="/newOrder" render={() => <NewOrder saveName = {this.saveNameCustomer} />} />
                  </div>
                </div>
              </div>
            </div>

            <div className='col-md-4'>
              <Order name = {this.state.custumerName} />

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
