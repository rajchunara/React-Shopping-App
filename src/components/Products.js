import React, { Component } from 'react';
import Shoppingcart from './Shoppingcart';
import {connect} from 'react-redux';
import uniqid from 'uniqid';

class Products extends Component {
  handleChange = (id,name, source, price) => {
    let uniqID = uniqid();
    this.props.addProduct( id ,name, source,price,uniqID);
  }

  render() {
    const {products} = this.props;
    const productList = products.map(product => {
      return (
        <div className="products" key={product.id}>
          <div className="col s3 ">
            <div className="card small">
              <div className="card-image">
                <img className="product-img" src={product.source}></img>
              </div>
              <div className="card-content">
                <div className="product-info"><strong>{product.name}</strong><div className="right"><strong>${product.price}</strong></div></div>
                <div className="center"><a className="waves-effect waves-light hoverable btn " onClick ={()=>{this.handleChange(product.id,product.name, product.source,product.price)}} >Add to cart</a></div>
              </div>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div className="product-list">
        <div className="row">
          <div className="col s9">
            {productList}
          </div>
          <Shoppingcart />
        </div>

      </div>

    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      addProduct : (id, name, source, price, uniqID) => { dispatch({type:'ADD_PRODUCT', myCart:{id: id, name: name, source:source, price:price, uniqid: uniqID}})}
  }
}

export default connect(null,mapDispatchToProps)(Products);
