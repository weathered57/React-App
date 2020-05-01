import * as actionTypes from './actionTypes'


export function getProductsSuccess(products){
    return {type:actionTypes.GET_PRODUCTS_SUCCESS,payload:products}
}

export function createProductSuccess(product){
    return {type:actionTypes.CREATE_PRODUCT_SUCCESS,payload:product}
}

export function updateProductSuccess(product){
    return {type:actionTypes.UPDATE_PRODUCT_SUCCESS,payload:product}
}

export function saveProductApi(product){
  return fetch("https://localhost:5001/api/products/"+(product.productId||""),{
      method:"POST",
      headers:{"content-type":"aplication/json"},
      body:JSON.stringify(product)
    })
    .then(handleResponse)
    .catch(handleError)
}

export function saveProduct(product){
    return function(dispacth)
    {
        return saveProductApi(product).then(saveProduct => {
            product.productId
            ?dispacth(updateProductSuccess(saveProduct))
            :dispacth(createProductSuccess(saveProduct))
        }).catch(error => {
            throw error;
        })
    } 
}

export async function handleResponse(response){
    if(response.ok){
        return response.json()
    }

    const error=await response.text()
    throw new Error(error);
}

export async function handleError(error){
    console.error("Bir hata olustu");
    throw error;
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


