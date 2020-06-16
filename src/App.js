import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Main from './components/MainComponent';
import { DISHES} from './shared/dishes';
import { render } from '@testing-library/react';
import { BrowserRouter} from 'react-router-dom';
class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
