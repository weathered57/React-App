import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions";
import * as cartAction from "../../redux/actions/cartAction";
import { Badge, Table, Button } from "reactstrap";
import alertify from 'alertifyjs'

class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts(this.props.currentCategory.categoryId);
  }
  addToCart=(product)=>{
     this.props.actions.addToCart({quantity:1,product});
     alertify.success( product.productName+" sepete eklendi")
  }

  render() {
    return (
      <div>
        <h4>
          Product <Badge>{this.props.currentCategory.categoryName}</Badge>
        </h4>

        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity Per Unit</th>
              <th>Units In Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.productId}>
                <th scope="row">{product.productId}</th>
                <td>{product.productName}</td>
                <td>{product.unitPrice}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitsInStock}</td>
                <td>
                  <Button size="sm" color="outline-success" onClick={()=>this.addToCart(product)}>
                    Ekle
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

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      addToCart: bindActionCreators(cartAction.addToCart, dispatch)
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
