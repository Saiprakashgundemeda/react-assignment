import { FcHome } from "react-icons/fc";
import { GiNewspaper } from "react-icons/gi";
import { GiHumanPyramid } from "react-icons/gi";
import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
    return (
        <section className="WhyChooseUs-container py-4">
            <h1 className="main">Why choose us ?</h1>
            <p>Our distinguished faculty, state-of-the-art learning facilities, and commitment to excellence make us the top choice for ACCA aspirants.</p>
            <div className="d-flex flex-row justify-content-around mt-5">
                <div className="each-card">

                    <h2 className="head">Faculty</h2>
                    <GiHumanPyramid className="icon text-warning" />
                    <p>Our faculty consists of industry experts and ACCA professionals who provide comprehensive guidance and support to students.</p>
                </div>
                <div className="each-card">

                    <h2 className="head">Infrastructure</h2>
                    <FcHome className="icon" />
                    <p>Our campus is equipped with modern classrooms, libraries, and computer labs to facilitate a conducive learning environment.</p>
                </div>
                <div className="each-card">
                    <h2 className="head">Placement</h2>
                    <GiNewspaper className="icon text-warning" />
                    <p>We offer dedicated placement support to help students secure internships and job opportunities with leading companies.</p>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
