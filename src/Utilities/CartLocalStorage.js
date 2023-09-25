// Here we don't send the function, we just send the object.
// 1. We get data from Main API. 
// 2. Then we get objects from Local storage.
// 3. We just take object id from Local storage cause we just store local data as id.
// 4. maching main API object id with local object id. if match take the quantity , update object and push manual array.

import { getCart } from "./BooksLocalStorage";

export const LocalCartLoader = async () => {

    // Get all Books data
    const Books = await fetch(`http://localhost:4000/products`);
    const AllBooksData = await Books.json();

    // get local cart data from other funaction call.
    const savedCart = getCart();
    console.log(savedCart);

    let CartData = []
    for (const id in savedCart) {
        const findData = AllBooksData.find(data => id === data._id)
        if (findData) {
            findData.quantity = savedCart[id];
            CartData.push(findData)
        }
    }
    console.log(CartData);
    return { CartData, AllBooksData };
}


const removeItem = (id) => {
    console.log("id", id)
    let getCart = JSON.parse(localStorage.getItem("Cart"));
    if (id in getCart) {
        delete getCart[id]
        localStorage.setItem("Cart", JSON.stringify(getCart))
    }
}

const deleteCart = () => {
    localStorage.removeItem("Cart")
}



export { removeItem, deleteCart };