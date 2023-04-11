import React from 'react';

const Therapy = () => {
    return (
        <div>
            <div className="relative max-w-xs h-96">
                <img
                    className="w-full h-56 object-cover"
                    src={`https://media.gettyimages.com/id/1127353853/photo/soccer-players-performing-warm-up-drills-on-field.jpg?s=612x612&w=0&k=20&c=G-U1V06i8cXER-QH8M_iUGTGuqXwik7vKmxvL7frL7c=`}
                    alt="Green iguana"
                />
                <div className="px-4 py-2">
                    <h5 className="text-lg font-medium">Power Stamina</h5>
                    <p className="text-gray-500 text-sm">Football players improve their stamina through regular exercise and training.</p>
                    <h6 className="absolute bottom-16 font-medium text-lg">
                        Time: {"10 min"} min
                    </h6>
                </div>
                <div className="absolute bottom-0 w-full">
                    <button
                        className="w-full py-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    // onClick={() => handleCartData(data.time)}
                    >
                        Add to list
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Therapy;