import React from 'react';

const AIAssistant = () => {
    return (
        <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
            <div className="container max-w-screen-lg mx-auto">

                <h2 className="font-semibold text-xl text-gray-600">Please fill up the form</h2>
                <p className="text-gray-500 mb-6">After filling out the form, click on the 'check' button.</p>

                <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                    <form onSubmit={""} className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-8 text-left">

                        <div className="md:col-span-4">
                            <label htmlFor="address">Category</label>
                            <select name="category" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" required>
                                <option value="">Please select one…</option>
                                <option value="book">Book</option>
                                <option value="product">Product</option>
                            </select>
                        </div>

                        <div className="md:col-span-4">
                            <label htmlFor="address">Category</label>
                            <select name="category" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" required>
                                <option value="">Please select one…</option>
                                <option value="book">Book</option>
                                <option value="product">Product</option>
                            </select>
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

                        <div className="md:col-span-9 ">
                            <label htmlFor="full_name">Derscription</label>
                            <input type="text" name="description" id="description" className="h-32 border mt-1 rounded px-4 w-full bg-gray-50" placeholder='Give a description of your product (maximum character limit 400)' maxLength={300} required />
                        </div>

                        <div className="md:col-span-9 text-right mt-5">
                            <div className="inline-flex items-end">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add product</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AIAssistant;