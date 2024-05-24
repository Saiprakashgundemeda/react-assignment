import React from 'react';
import './WhatWillYouLearn.css';

const WhatWillYouLearn = () => {
    return (
        <section className="why-choose-us-container py-4">
            <h1 className="main">What will you learn In ACCA?</h1>
            <p>Discover the comprehensive curriculum and the range of subjects covered in our ACCA course.</p>
            <div className="d-flex flex-row justify-content-around mt-5">
                <div className='each-card'>
                    <h3 className='h2 text-warning'>Knowledge Level</h3>
                    <ul>
                        <li>Accountant in Business</li>
                        <li>Management Accounting</li>
                        <li>Financial Accounting</li>
                        <li>Corporate and Business Law</li>
                        <li>Performance Management</li>
                    </ul>
                </div>
                <div className='each-card'>
                    <h3 className='h2 text-warning'>Skills Level</h3>
                    <ul>
                        <li>Corporate and Business Law</li>
                        <li>Performance Management</li>
                        <li>Taxation</li>
                        <li>Financial Reporting</li>
                        <li>Audit and Assurance</li>
                        <li>Financial Management</li>
                    </ul>
                </div>
                <div className='each-card'>
                    <h3 className='h2 text-warning'>Professional Level</h3>
                    <ul>
                        <li>Strategic Business Leader</li>
                        <li>Strategic Business Reporting</li>
                        <li>Advanced Financial Management</li>
                        <li>Advanced Performance Management</li>
                        <li>Advanced Taxation</li>
                        <li>Advanced Audit and Assurance</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default WhatWillYouLearn;
