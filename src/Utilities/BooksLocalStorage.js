const addLocalStorage = (cartData) => {

    let CartItem = {}

    let getCart = localStorage.getItem("Cart");

    // If "Cart" name object exist in local storage, first time no storage.
    if (getCart) {
        CartItem = JSON.parse(getCart);
    }

    // object[key] --> we get value.
    let quantity = CartItem[cartData];
    if (quantity) {
        CartItem[cartData] = CartItem[cartData] + 1;
    }
    else {
        CartItem[cartData] = 1;
    }
    localStorage.setItem("Cart", JSON.stringify(CartItem))
}

const getCart = (cartData) => {


    let CartItem = {}

    let getCart = localStorage.getItem("Cart");

    if (getCart) {
        CartItem = JSON.parse(getCart);
    }
    return CartItem;
}



export { addLocalStorage, getCart };