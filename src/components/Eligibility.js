import { GiGraduateCap } from "react-icons/gi";
import { MdOutlineLightMode } from "react-icons/md";
import { SiLevelsdotfyi } from "react-icons/si";
import React from 'react';
import './Eligibility.css';

const Eligibility = ({ handleShow }) => {
    return (
        <div className="eligiblity-container py-4" >
            <h1 className='heading' >ACCA – Eligibility</h1>
            <p className='para'>Learn about the eligibility criteria for enrolling in the ACCA program and how you can start your journey with us.</p>
            <div className="d-flex flex-row justify-content-around mt-5">
                <div className="each-card">
                    <h2 className="head">Levels</h2>
                    <SiLevelsdotfyi className="icon text-warning" />
                    <p>ACCA has three levels of exams, Knowledge, Skills, and Professional. You must complete all three levels as well as the Professional Ethics module to become an ACCA member.</p>
                </div>
                <div className="each-card">
                    <h2 className="head">Eligibility</h2>
                    <MdOutlineLightMode className="icon text-warning" />
                    <p>Students can register for the ACCA Qualification as soon as they have passed their Class 10 exams. No prior qualifications are required.</p>
                </div>
                <div className="each-card">
                    <h2 className="head">Exemptions</h2>
                    <GiGraduateCap className="icon text-warning" />
                    <p>Students who have completed their graduation in commerce or accounting are eligible for exemptions from certain ACCA exams.</p>
                </div>
            </div>
        </div>
    );
};

export default Eligibility;
