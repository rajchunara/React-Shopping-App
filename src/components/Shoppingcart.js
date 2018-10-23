import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Shoppingcart extends Component {
  render(){
    const {myCart} = this.props;
    
    const totalPriceArray = myCart.map(item =>{
        return(
          item.price
        )
    })

    const totalPrice =  totalPriceArray.reduce((a, b) => a + b, 0)

    return(
      <div className="fixed">
        <div className="col s3 shopping-cart">
          <div className="center"><h4><p className="shopping-cart-text"><strong>Shopping Cart</strong></p></h4></div>

          <table className="striped  teal lighten-4">
            <tbody>
              <tr>
                <td>Items</td>
                <td>{this.props.myCart.length}</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>${totalPrice}</td>
              </tr>
            </tbody>
          </table>
          <div className="wrapper"><Link to='/Finalorder' className="modal-trigger hoverable waves-effect waves-light btn check-out blue-grey darken-4 center">
          Proceed to Check Out</Link></div>
        </div>

      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    myCart:state.myCart
  }
}

export default connect(mapStateToProps)(Shoppingcart);
