import React, { Component } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavItem,
  NavLink,
  Badge
} from "reactstrap";
import { connect } from "react-redux";



 class CartSummary extends Component {
    renderEmpty(){
        return(
            <NavItem>
            <NavLink>Sepetiniz Bos</NavLink>
          </NavItem>
        )
    }
    renderSummary(){
        return(
            <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret style={{ color: "black" }}>
              Sepetiniz
            </DropdownToggle>
            <DropdownMenu right>
                {
                    this.props.cart.map(cartItem => (
                    <DropdownItem key={cartItem.product.productId}>{cartItem.product.productName} 
                     <Badge style={{marginLeft:5}} color="success">{cartItem.quantity}</Badge></DropdownItem>
                    ))
                }
                   
              <DropdownItem divider />
              <DropdownItem>Sepete Git</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        )
    }
  render() {
    return (
      <div>
          {
              this.props.cart.length>0?this.renderSummary():this.renderEmpty()
          }
        
      </div>
    );
  }
}

function mapStateToProps(state){
    return {
      cart:state.cartReducer
    }
  }

  export default connect(mapStateToProps)(CartSummary);