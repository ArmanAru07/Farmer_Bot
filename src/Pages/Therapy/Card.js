import React, { useState } from 'react';

const Card = ({ data, handleCartData, handleProgress }) => {

    const { Name, description, time, img } = data;

    // Button disable
    const [disabled, setDisabled] = useState(false);
    const handleClick = (time) => {
        setDisabled(true);
        handleCartData(time);
        handleProgress(time);
    };

    return (
        <div className="card bg-base-100 shadow-xl image-full " style={{ width: "430px" }} >
            <figure>
                <img src={img} alt="Shoes" style={{ height: 270 }} />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-center">{Name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-between">
                    <div className="bg-black py-3 px-3 rounded-lg" >Time: {time} m</div>
                    <button onClick={() => handleClick(time)} disabled={disabled} className="btn btn-outline btn-success text-white">Complete</button>
                </div>
            </div>
        </div>
    );
};

export default Card;