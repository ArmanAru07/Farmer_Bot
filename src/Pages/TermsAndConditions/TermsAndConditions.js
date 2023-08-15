import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {


    return (
        <div>
            <h1>This is terms and condition page</h1>
            <h1>Return to the <Link to="/register">Registration</Link> page</h1>
        </div>
    );
};

export default TermsAndConditions;