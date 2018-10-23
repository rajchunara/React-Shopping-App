import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Finalorder from './components/Finalorder';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Route exact path='/' component={Home}/>
          <Route path='/Finalorder' component={Finalorder}/>
          <Route component={() => (<div>404 Not found </div>)} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
