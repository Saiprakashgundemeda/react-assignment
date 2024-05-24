import React from 'react';
import { Container, Button } from 'react-bootstrap';
import WhatWillYouLearn from './WhatWillYouLearn';
import WhyChooseUs from './WhyChooseUs';
import Eligibility from './Eligibility';
import PlacementAssistance from './PlacementAssistance';
import KickOffJourney from './KickOffJourney';
import RequestModal from './Modal';

import './Home.css';


const Home = ({ handleShow }) => {
    return (
        <>
            <div className="page-container">
                <Container className="text-center">
                    <h1 className='main-heading'>Welcome to ACCA Course</h1>
                    <p className="para">Start your journey to becoming a certified ACCA professional with our comprehensive and structured learning path.</p>
                    <Button className="main-btn m-3">Explore ACCA 18 Months</Button>
                    <Button variant="outline-light" className="button btn-secondary" onClick={handleShow}>Request CallBack</Button>
                </Container>
            </div>
            <Eligibility />
            <WhyChooseUs />
            <WhatWillYouLearn />
            <PlacementAssistance />
            <KickOffJourney />
            <RequestModal />
        </>
    );
};

export default Home;
