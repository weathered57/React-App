import React, { Component } from 'react'
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartAction";
import { connect } from "react-redux";
import alertify from 'alertifyjs'

class cartDetail extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(cartDetail);