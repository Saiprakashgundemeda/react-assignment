import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import ACCA18Months from './components/ACCA18Months';
import WhyChooseUs from './components/WhyChooseUs';
import Eligibility from './components/Eligibility';
import WhatWillYouLearn from './components/WhatWillYouLearn';
import PlacementAssistance from './components/PlacementAssistance';
import KickOffJourney from './components/KickOffJourney';
import RequestModal from './components/Modal';
import './custom.css';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <Router>
      <div>
        <Header handleShow={handleShow} />
        <Routes>
          <Route path="/" element={<Home handleShow={handleShow} />} />
          <Route path="/acca18months" element={<ACCA18Months />} />
          <Route path="/whychooseus" element={<WhyChooseUs />} />
          <Route path="/eligibility" element={<Eligibility />} />
          <Route path="/whatwillyoulearn" element={<WhatWillYouLearn />} />
          <Route path="/placementassistance" element={<PlacementAssistance />} />
          <Route path="/kickoffjourney" element={<KickOffJourney />} />
        </Routes>
      </div>
      <RequestModal show={showModal} handleClose={handleClose} />
    </Router>
  );
};

export default App;
