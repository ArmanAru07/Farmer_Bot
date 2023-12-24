import { Button, Modal } from 'flowbite-react';
import React from 'react';

const TherapyModal = ({ modal, handleModal }) => {
    return (
        <Modal show={modal} onClose={handleModal}>
            <Modal.Header>What to do ?</Modal.Header>
            <Modal.Body>
                <div className="space-y-6">
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        This page showcases various types of home exercises aimed at enhancing your mental health and improving focus. By clicking on the respective cards, you can read about each exercise in detail.
                        Additionally, you can track the number of exercises you've completed. Furthermore, you can track the time spent on each exercise to better monitor your progress and engagement.
                    </p>
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        এই পেজটি বিভিন্ন ধরণের বাড়িতে অংশগ্রহণ করা ব্যায়াম প্রদর্শন করে, যা মানসিক স্বাস্থ্য উন্নতি এবং মনোযোগ উন্নতির লক্ষ্যে করা হয়েছে। আপনি প্রতিটি ব্যায়ামের বিস্তারিত পড়তে প্রত্যাশিত কার্ড গুলির উপর ক্লিক করে পড়তে পারেন। উত্তরমুখীভাবে, আপনি আপনি কতগুলি ব্যায়াম সম্পন্ন করেছেন তা ট্র্যাক করতে পারেন।
                        এছাড়াও, আপনি প্রতিটি ব্যায়ামে কত সময় অতিক্রম করেছেন তা পর্যবেক্ষণ করতে পারেন, যাতে আপনার প্রগতি এবং অংশগ্রহণ ভালভাবে মনিটর করা যায়।
                    </p>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleModal}>I Understand</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default TherapyModal;