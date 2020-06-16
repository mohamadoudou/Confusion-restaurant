import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Switch, Route, Redirect } from 'react-router-dom';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';


class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        selectedDish: null,
        comments:COMMENTS,
        promotions:PROMOTIONS,
        leaders:LEADERS
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }

  render() {
    const HomePage = () => {
      return(
          <Home dish={this.state.dishes.filter((dish)=>dish.featured)[0]}
          promotion={this.state.promotions.filter((promotion)=>promotion.featured)[0]}
          leader={this.state.leaders.filter((leader)=>leader.featured)[0]}
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
            <Route path="/contactus" component={Contact} />
            <Redirect to = "/home"/>
          </Switch>  
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Main;