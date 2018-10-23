import React, { Component } from 'react';
import Navbar from './Navbar';
import Products from './Products';
import {connect} from 'react-redux';

class Home extends Component {

  render() {
    return (
        <div className="App">
          <Navbar />
          <Products products={this.props.products}/>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products:state.products
  }
}

export default connect(mapStateToProps)(Home);
