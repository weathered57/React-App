import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions";
import * as cartAction from "../../redux/actions/cartAction";
import { Badge, Table, Button } from "reactstrap";
import alertify from "alertifyjs";

class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts(this.props.currentCategory.categoryId);
  }
  addToCart = (product) => {
    this.props.actions.addToCart({ quantity: 1, product });
    alertify.success(product.productName + " sepete eklendi");
  };

  render() {
    return (
      <div>
        <h4>
          Product <Badge>{this.props.currentCategory.categoryName}</Badge>
        </h4>
        <div className="row">
          {this.props.products.map((product) => (
            <div className="col-sm-4" style={{marginBottom:"10px"}}>
              <div class="card">        
                <div key={product.productId} class="card-body">
                  <h5 class="card-title">{product.productName}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">
                    {product.quantityPerUnit} - {product.unitsInStock}
                  </h6>
                  <p class="card-text">{product.unitPrice} ₺</p>
                  <Button
                    size="sm"
                    color="outline-success"
                    onClick={() => this.addToCart(product)}
                  >
                    Ekle
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      addToCart: bindActionCreators(cartAction.addToCart, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
