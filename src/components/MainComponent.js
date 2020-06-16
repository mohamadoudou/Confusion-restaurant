import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Switch, Route, Redirect } from 'react-router-dom';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { DISHES } from '../shared/dishes';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        selectedDish: null
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }

  render() {
    const HomePage = () => {
      return(
          <Home 
          />
      );
    }
    return (
      <div>
        <Header/>
        <div className="container">
          <Switch>   
            <Route path="/home" component={HomePage}/>
            <Route path="/menu" component={()=> <Menu dishes={this.state.dishes} /> }/>
            <Redirect to = "/home"/>
          </Switch>  
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Main;