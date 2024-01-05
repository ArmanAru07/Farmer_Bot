import { Button, Modal } from 'flowbite-react';
import React from 'react';

const TherapyCardModal = ({ modal, handleModal, modalData }) => {

    return (
        <Modal show={modal} onClose={handleModal}>
            <Modal.Header style={{ backgroundColor: "#155E75" }} ><p className='text-white'>{modalData.Name}</p> </Modal.Header>
            <Modal.Body>
                <div className="space-y-6">
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        {modalData.description}
                    </p>
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        {modalData.bangla}
                    </p>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleModal}>I Understand</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default TherapyCardModal;