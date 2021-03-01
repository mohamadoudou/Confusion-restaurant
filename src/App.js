import React from 'react';
import './App.css';
import Main from './components/MainComponent';
import { BrowserRouter, HashRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/ConfigureStore';

const store = ConfigureStore();
class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div className="App">
            <Main />
          </div>
        </HashRouter>
      </Provider>
    );
  }
}
export default App;
