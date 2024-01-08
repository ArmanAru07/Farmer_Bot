import React, { useState } from 'react';

const Contact = () => {
    const [complaint, setComplaint] = useState('');

    const sendEmail = () => {
        const recipientEmail = 'yourEmailAddress@example.com'; // Your email address
        const subject = 'New Complaint';
        const body = `Complaint: ${complaint}`;
        const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;
    };

    const handleComplaintChange = (event) => {
        setComplaint(event.target.value);
    };

    return (
        <div>
            <h2>Complaint Box</h2>
            <form onSubmit={(e) => { e.preventDefault(); sendEmail(); }}>
                <label htmlFor="complaint">Complaint:</label>
                <textarea
                    id="complaint"
                    name="complaint"
                    value={complaint}
                    onChange={handleComplaintChange}
                    required
                />
                <br /><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Contact;
