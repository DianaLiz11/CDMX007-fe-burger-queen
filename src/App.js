import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import PrincipalMenu from './components/PrincipalMenu';
import Breakfast from './components/Breakfast';
import Order from './components/Order';
import NewOrder from './components/NewOrder';
import Submenu from './components/Submenu';
import Food from './components/Food';
import Accompaniments from './components/Accompaniments';
import Drinks from './components/Drinks';
// import { menu } from './data/menu.json';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      custumerName: '',
      total:0,
      ticket:[]
    };
    // this.ticket=[];+++++++
    this.saveNameCustomer = this.saveNameCustomer.bind(this);
    this.addTicket = this.addTicket.bind(this);
    this.deleteTicket = this.deleteTicket.bind(this);
    this.cancel = this.cancel.bind(this);
    this.pay = this.pay.bind(this);
  }

  saveNameCustomer(name) {
    this.setState({custumerName: name});
  }

  addTicket(order){
    console.log('order' + order);
    //debugger;
    order.idTicket = 'T'+(this.state.ticket.length + 1);
    // this.ticket.push(order);++++++++++++
    this.setState(
      {
        ticket: [...this.state.ticket, order],
        total: this.state.total + (order.price * order.quantity)
      }
    )

    console.log(this.state.ticket);
    console.log(order);
  }

  deleteTicket(indexTicket){
    let cost =0;
    this.state.ticket.forEach(element => {
      if(indexTicket === element.idTicket){
        cost = element.price * element.quantity;
      }
    })

    this.setState({
      ticket: this.state.ticket.filter((product, index) => {
        return indexTicket !== product.idTicket
      }),
      total: (this.state.total - cost)

    })
  }

  cancel(){
    console.log('cancelando');
    this.setState( {
      custumerName: '',
      total:0,
      ticket:[]
    });
  }

  pay(){
    console.log('pagar');
    this.setState ({
      custumerName: '',
      total:0,
      ticket:[]
    });

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
                    <Route path="/breakfast"  render={(props) => <Breakfast addElement = {this.addTicket} />} />
                    <Route path="/newOrder" render={() => <NewOrder saveName = {this.saveNameCustomer} />} />
                    <Route path="/food/hamburger" render={(props) => <Food addElement = {this.addTicket} />} />
                    <Route path="/food/accompaniments" render={() => <Accompaniments addElement = {this.addTicket} />} />
                    <Route path="/food/drinks" render={() => <Drinks addElement = {this.addTicket} />} />
                  </div>
                </div>
              </div>
            </div>

            <div className='col-md-4'>
              <Order name = {this.state.custumerName} productsSelected = {this.state.ticket} totalOrder= {this.state.total} deleteElement = {this.deleteTicket} cancel={this.cancel} pay={this.pay} />
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
