import * as actionTypes from './actionTypes'


export function getProductsSuccess(products){
    return {type:actionTypes.GET_PRODUCTS_SUCCESS,payload:products}
}

export function getProducts(categoryId){
    return function(dispacth){
       let url="https://localhost:5001/api/products/getall"
      if(categoryId)
       {
           url="https://localhost:5001/api/products/GetListByCategory/"+categoryId
       }      
        return fetch(url).then(response => response.json())
        .then(result=>dispacth(getProductsSuccess(result)));
    }
}
