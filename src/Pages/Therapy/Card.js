import React, { useState } from 'react';
import TherapyCardModal from './TherapyCardModal';
import './Card.css';

const Card = ({ data, handleCartData, handleProgress }) => {

    const { Name, description, time, img } = data;

    const [modal, setModal] = useState(false);
    const [modalData, setModalData] = useState(null);

    const [isZoomed, setIsZoomed] = useState(false);

    const handleModal = (data = null) => {
        setModal(!modal);
        setModalData(data);
    }

    // Button disable
    const [disabled, setDisabled] = useState(false);
    const handleClick = (time) => {
        setDisabled(true);
        handleCartData(time);
        handleProgress(time);
    };

    // background image zoom.
    const handleMouseOver = () => {
        setIsZoomed(true);
    };

    const handleMouseOut = () => {
        setIsZoomed(false);
    };

    return (
        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className={`${isZoomed ? 'zoomed' : ''} therapyCard card bg-base-100 shadow-xl image-full`} style={{ width: "430px" }} >
            <figure>
                <img src={img} alt="Shoes" style={{ height: 270 }} />
            </figure>
            <div className="card-body text-left">
                <h2 className="card-title text-center">{Name}</h2>
                <p>{description.substring(0, 130)}...<span onClick={() => handleModal(data)} className='underline text-red-500 cursor-pointer'> Read More</span></p>
                <div className="card-actions justify-between">
                    <div className="bg-black py-3 px-3 rounded-lg" >Time: {time} m</div>
                    <button onClick={() => handleClick(time)} disabled={disabled} className="btn btn-outline btn-success text-white">Complete</button>
                </div>
            </div>
            {
                modalData &&
                <TherapyCardModal
                    modal={modal}
                    modalData={modalData}
                    handleModal={handleModal}
                >
                </TherapyCardModal>
            }
        </div>
    );
};

export default Card;