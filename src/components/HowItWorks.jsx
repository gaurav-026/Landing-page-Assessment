import React from 'react'
import rectangleIcon from "../assets/rectangle-8809.svg"
import stepIcon1 from "../assets/image-533.png"

const HowItWorks = () => {
    return (
        <div className="container-3">
            <h2 className='how-does-it-work'>How does it work?</h2>
            <div className="steps">
                <div className="step-card">
                    <div className='step-icon'><img src={rectangleIcon} alt="rectangleIcon" /><span className='step-text'>Step 1</span></div>
                    <div className="step">
                        <p className='step-names'>Step 1 : Enroll into your favorite course for only ₹1,499</p>
                        <img src={stepIcon1} alt="" />
                        <p className='step-description'>Start Learning with Lifetime Course Access.</p>
                    </div>
                </div>
                <div className="step-card">
                    <div className='step-icon'><img src={rectangleIcon} alt="rectangleIcon" /><span className='step-text'>Step 2</span></div>
                    <div className="step">
                        <p className='step-names'>Step 1 : Enroll into your favorite course for only ₹1,499</p>
                        <div className="step2">
                            <span>2</span>
                            <p>years time from the date of enrollment</p>

                        </div>
                        <p className='step-description'>Start Learning with Lifetime Course Access.</p>
                    </div>
                </div>
                <div className="step-card">
                    <div className='step-icon'><img src={rectangleIcon} alt="rectangleIcon" /><span className='step-text'>Step 3</span></div>
                    <div className="step">
                        <p className='step-names'>Step 1 : Enroll into your favorite course for only ₹1,499</p>
                        <div className="step2">
                            <span>100%</span>
                            <p>Enrollment Fee is refunded</p>

                        </div>
                        <p className='step-description'>Start Learning with Lifetime Course Access.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HowItWorks
