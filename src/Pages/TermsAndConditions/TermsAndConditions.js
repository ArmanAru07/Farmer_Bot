import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';

const TermsAndConditions = () => {

    useTitle("Terms and conditon");

    return (
        <div className="max-w-5xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
            <hr />
            <p className="text-lg mb-6">
                Welcome to <span className="font-bold">Serene</span>, dedicated to providing mental health support and resources. These terms and conditions govern your use of our website; by accessing this site, you agree to comply with and be bound by these terms.
            </p>

            <div className='text-left'>
                <section className="mb-8 ">
                    <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
                    <p className="text-base mb-4">
                        By using this website, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions. If you do not agree with any part of these terms, please refrain from using our website.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">2. Use of the Website</h2>
                    <p className="text-base mb-4">
                        When using our website, you agree to comply with all applicable laws and regulations. You agree not to use the website for any unlawful or prohibited purposes, including but not limited to spreading harmful or offensive content, violating others' privacy, or engaging in illegal activities.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">3. Privacy Policy</h2>
                    <p className="text-base mb-4">
                        Your privacy is crucial to us. Our Privacy Policy governs the collection, use, and disclosure of your personal information. By using our website, you consent to our Privacy Policy.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">4. Content Accuracy</h2>
                    <p className="text-base mb-4">
                        While we strive to provide accurate and up-to-date information, we do not guarantee the completeness, reliability, or accuracy of any content on our website. The use of any information on this site is at your own risk.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">5. Limitation of Liability</h2>
                    <p className="text-base mb-4">
                        We, including our officers, directors, employees, and affiliates, shall not be held liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use or inability to use our website. This includes damages for loss of profits, data, goodwill, or other intangible losses.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">6. Termination</h2>
                    <p className="text-base mb-4">
                        We reserve the right to terminate or suspend your access to the website without prior notice if you violate these terms and conditions or for any other reason at our sole discretion.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">7. Governing Law</h2>
                    <p className="text-base mb-4">
                        In compliance with mental health laws and regulations, our services and policies are aligned with the well-being of individuals seeking support worldwide. Our jurisdiction primarily operates under the principles of compassion, confidentiality, and ethical practices, focusing on the universal right to mental health care and support.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">8. Contact Information</h2>
                    <p className="text-base mb-4">
                        If you have any questions about these terms and conditions, please contact us at <span className="font-bold">mdjoy2812@gmail.com</span>.
                    </p>
                </section>
            </div>

            <p className="text-sm mt-8">
                By using this website, you acknowledge that you have read, understood, and agreed to these terms and conditions. Thank you for visiting <span className="font-bold">Serene</span>.
            </p>
        </div>
    );
};

export default TermsAndConditions;