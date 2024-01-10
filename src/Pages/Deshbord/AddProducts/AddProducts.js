import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/UserContext';
import toast from 'react-hot-toast';

const AddProducts = () => {

    const { user } = useContext(AuthContext);
    console.log(user);

    const handleAddProductForm = (event) => {
        event.preventDefault();

        const form = event.target;
        const productName = form.productName.value;
        const companyName = form.companyName.value;
        const category = form.category.value;
        const description = form.description.value;
        const image = form.image.value;
        const price = form.price.value;
        const shipping = form.shipping.value;
        const stock = form.stock.value;

        const productinfo =
        {
            category,
            name: productName,
            sellerName: user?.displayName,
            companyName,
            sellerEmail: user?.email,
            ratings: 0,
            ratingsCount: 0,
            img: image,
            quantity: 0,
            price,
            stock,
            shipping,
            description: description
        }

        fetch('http://localhost:4000/product', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(productinfo),  // here is the user
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.acknowledged) {
                    toast.success('Successfully added!')
                    event.target.reset();
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }




    return (

        <div className="min-h-screen p-6  flex items-center justify-center">
            <div className="container max-w-screen-lg mx-auto">

                <h2 className="font-semibold text-xl text-white">Add New Product</h2>
                <p className="text-gray-200 mb-6">This information will show in your product info.</p>

                <div className="bg-white rounded-lg shadow-lg p-4 px-4 md:p-8 mb-6">
                    <form onSubmit={handleAddProductForm} className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-9 text-left">

                        <div className="md:col-span-6">
                            <label htmlFor="address">Product Name</label>
                            <input type="text" name="productName" id="address" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" maxLength={35} placeholder="Short name (maximum character limit 40)" required />
                        </div>

                        <div className="md:col-span-3">
                            <label htmlFor="address">Category</label>
                            <select name="category" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" required>
                                <option value="">Please select one…</option>
                                <option value="book">Book</option>
                                <option value="product">Product</option>
                                <option value="product">Medicine</option>
                            </select>
                        </div>

                        <div className="md:col-span-9">
                            <label htmlFor="email">Seller Company Name</label>
                            <input type="text" name="CompanyName" id="companyName" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder='Enter seller company name' required />
                        </div>

                        <div className="md:col-span-9 ">
                            <label htmlFor="full_name">Derscription</label>
                            <input type="text" name="description" id="description" className="h-32 border mt-1 rounded px-4 w-full bg-gray-50" placeholder='Give a description of your product (maximum character limit 400)' maxLength={300} required />
                        </div>

                        <div className="md:col-span-9">
                            <label htmlFor="email">Image Link</label>
                            <input type="text" name="image" id="image" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder='Enter image link' required />
                        </div>


                        <div className="md:col-span-3 relative">
                            <label htmlFor="email">Price</label>
                            <input type="text" name="price" id="price" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder='Enter amount' required />
                            <span class="absolute inset-y-0 right-0 flex items-center pr-4 pt-4 text-lg">৳</span>
                        </div>

                        <div className="md:col-span-3 relative">
                            <label htmlFor="email">Shipping Cost</label>
                            <input type="text" name="shipping" id="shipping" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder='Enter amount' required />
                            <span class="absolute inset-y-0 right-0 flex items-center pr-4 pt-4 text-lg">৳</span>
                        </div>

                        <div className="md:col-span-3">
                            <label htmlFor="email">Stock quantity</label>
                            <input type="text" name="stock" id="stockQuantity" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder='Enter amount' required />
                        </div>


                        <div className="md:col-span-9 text-center mt-5">
                            <div className="inline-flex items-end">
                                <button className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded text-lg">Add product+</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProducts;