import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

class Finalorder extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      modal: false,
      confirmMessage:"sdadas"
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }


  handleClick = (id) => {
    this.props.deleteProduct(id);
  }

  placeOrder = () => {
    this.props.deleteAll();
    this.toggle();
  }

  ToHome=() => {
    this.props.history.push('/');
  }

  render() {
    const {myCart} = this.props;
    const myCartList = myCart.map(item =>{
      return (
        <tr key={item.uniqid}>
          <td>{item.name}</td>
          <td><a onClick={() => this.handleClick(item.uniqid)} className="waves-effect waves-light btn blue-grey darken-4 center">
          Remove</a></td>
          <td>${item.price}</td>
        </tr>
      )
    })

    const totalPriceArray = myCart.map(item =>{
        return(
          item.price
        )
    })

    const totalPrice =  totalPriceArray.reduce((a, b) => a + b, 0)

    return (
      <div>
        <nav>
          <div className="nav-wrapper blue lighten-1">
            <a href="#!" className="brand-logo center">React <span className="">Shopping App</span></a>
            <ul className="right hide-on-med-and-down">
              <li><Link to="/" className="waves-effect cyan accent-4 waves-light btn hoverable"><i className="large material-icons">home</i></Link></li>
            </ul>
          </div>
        </nav>

        <div className="container">
          <div className="col s3 ">
            <div className="center"><h4><p className="shopping-cart-text"><strong>Shopping Cart</strong></p></h4></div>

            <table className="striped  teal lighten-4">
              <tbody>
              {myCartList}
              <tr >
                <td><strong>Total</strong></td>
                <td></td>
                <td><strong>${totalPrice}</strong></td>
              </tr>
              </tbody>
            </table>

            <div className="wrapper"><a onClick={this.placeOrder} className="hoverable waves-effect waves-light btn check-out pink lighten-2 center">
            <strong >Place The Order</strong></a>
            </div>
             <Modal isOpen={this.state.modal} toggle={this.toggle} className="green lighten-2" >
               <ModalHeader onClick={this.toggle}></ModalHeader>
               <ModalBody>
               <p className="success">
                 <strong>Congratulations! Your order has been placed.</strong>
                 <Button color="secondary" className="right" onClick={this.ToHome}>Continue Shopping</Button>
               </p>
               </ModalBody>
             </Modal>
          </div>
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

const mapDispatchToProps = (dispatch) => {
  return{
    deleteProduct: (id) => {dispatch({type:'DELETE_PRODUCT', id:id})},

    deleteAll:() => {dispatch({type:'DELETE_ALL'})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Finalorder);
