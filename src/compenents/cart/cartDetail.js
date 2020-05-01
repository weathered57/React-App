import React, { Component } from "react";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartAction";
import { connect } from "react-redux";
import {
  Table,
  Button
} from "reactstrap";
import alertify from 'alertifyjs'


class CartDetail extends Component {

  removeFromCart(product) 
  {
    this.props.actions.removeFromCart(product)
    alertify.error( product.productName+" sepetten çıkarıldı")
  }

  render() {
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map(cartItem => (
              <tr key={cartItem.product.productId}>
                <th scope="row">{cartItem.product.productId}</th>
                <td>{cartItem.product.productName}</td>
                <td>{cartItem.product.unitPrice}</td>
                <td>{cartItem.product.quantity}</td>
                <td>
                  <Button
                    size="sm"
                    color="outline-danger"
                    onClick={() => this.removeFromCart(cartItem.product)}
                  >
                    Sil
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
    },
  };
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDetail);
