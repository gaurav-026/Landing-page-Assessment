import React, { useEffect } from 'react';
import eduIcon from "../assets/graduation-hat.svg";
import tagIcon from "../assets/award-star.svg";
import enrollIcon from "../assets/group.svg";
import knowMoreIcon from "../assets/fi-br-interrogation.svg";
import onlineLearningIcon from "../assets/online-learning.svg";
import graduatedIcon from "../assets/graduated.svg";
import doubtIcon from "../assets/question-mark.svg";
import completeIcon from "../assets/complete.svg"
import viewIcon from "../assets/view.svg";
import certificateIcon from "../assets/certificate.png";
import illustration from "../assets/illustration.png";
import starIcon from "../assets/star.svg"
import galleryIcon from "../assets/bi-image-alt.svg"
import Timer from './Timer';
import HowItWorks from './HowItWorks';
//for animation
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => {
    useEffect(() => {
        AOS.init({
          duration: 1200, // Animation duration in milliseconds
        });
      }, []);

    return (
        <>
            {/* Component-1  */}
            <section className='component-1' data-aos="fade-up">
                <div className="container1">
                    <div className="name">
                        <img src={eduIcon} alt="eduIcon" />
                        <p>An <b>IIT Delhi</b> Alumni Initiative</p>
                    </div>
                    <div>
                        <span>Become an Expert in the field of </span>
                        <span className='title2'>Data Science with 6 courses</span>
                    </div>
                    <p>A specially crafted Tech Kickstarter, with 5+ extensive online courses.</p>
                    <div className="tags">
                        <div className="tag"><img src={tagIcon} alt="tagIcon" />Personal Mentorship</div>
                        <div className="tag"><img src={tagIcon} alt="tagIcon" />Internship Assistance</div>
                        <div className="tag"><img src={tagIcon} alt="tagIcon" />Industry Certified Courses</div>
                    </div>
                </div>
                <div className="button-frame-2">
                    <button className='enroll-btn'>Enroll Now <img src={enrollIcon} alt="enrollIcon" /></button>
                    <button className='know-more-btn'>Know More <img src={knowMoreIcon} alt="knowMoreIcon" /></button>
                </div>

            </section>

            <div className="features" data-aos="fade-up">
                <div className="feature">
                    <img src={onlineLearningIcon} alt="online-learning-icon" />
                    <div className="description"><h3>24</h3>
                        <p>Courses</p>
                    </div>
                </div>

                <div className="feature">
                    <img src={graduatedIcon} alt="online-learning-icon" />
                    <div className="description"><h3>30k+</h3>
                        <p>Learners</p>
                    </div>
                </div>

                <div className="feature">
                    <img src={doubtIcon} alt="online-learning-icon" />
                    <div className="description"><h3>100k+</h3>
                        <p>Doubts Solved</p>
                    </div>
                </div>

                <div className="feature">
                    <img src={completeIcon} alt="online-learning-icon" />
                    <div className="description"><h3>10k+</h3>
                        <p>Student Projects</p>
                    </div>
                </div>

            </div>
            <br />
            <br />
            <br />


            {/* Component-2  */}
            <section className='component-2' data-aos="fade-up">
                <div className="container-2">
                    <div className="learning-path">DATA SCIENCE COURSE LEARNING PATH</div>
                    <div className="course-name">
                        <span className='data-science'>Data Science</span>
                        <span className='course-curriculum'> Course Curriculum</span>
                    </div>
                    <div>
                        <div className="top-card">
                            <div className="tech-description">
                                <span className='tech-name'>C++</span>
                                <p className='para-text'>Learn C++ for strong programming fundamentals.</p>
                            </div>
                            <div className="view-curriculum-btn">
                                <img src={viewIcon} alt="viewIcon" />
                                View Curriculum
                            </div>
                        </div>
                        <div className="middle-card">
                            <div className="tech-description">
                                <span className='tech-name'>MERN Stack</span>
                                <p className='para-text'>Master the MERN stack for high-demand projects.</p>
                            </div>
                            <div className="view-curriculum-btn">
                                <img src={viewIcon} alt="viewIcon" />
                                View Curriculum
                            </div>
                        </div>
                        <div className="middle-card">
                            <div className="tech-description">
                                <span className='tech-name'>Data Structure & Algorithm</span>
                                <p className='para-text'>Excel in Data Structures and Algorithms for interview success.</p>
                            </div>
                            <div className="view-curriculum-btn">
                                <img src={viewIcon} alt="viewIcon" />
                                View Curriculum
                            </div>
                        </div>
                        <div className="middle-card bottom-card">
                            <div className="tech-description">
                                <span className='tech-name'>Competitve Programming</span>
                                <p className='para-text'>Excel in Data Structures and Algorithms for interview success.</p>
                            </div>
                            <div className="view-curriculum-btn">
                                <img src={viewIcon} alt="viewIcon" />
                                View Curriculum
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <br></br>
            <br />
            <br />


            {/* Component-3  */}
            <section className="component-3" data-aos="fade-up">
                <div className="opportunity">
                    <span className='course-curriculum'>Don't miss out on this </span>
                    <span className='limited-time'>limited-time opportunity </span>
                    <span className='course-curriculum'>to learn for</span>
                    <span className='limited-time'> Free!</span>
                </div>
                <Timer />
                <HowItWorks />
            </section>



            {/* Component-4 */}

            <section className='component-4' data-aos="fade-up">
                <div className="course-name">
                    <span className='course-curriculum'>Top Companies Hiring </span>
                    <span className='data-science'>Data Scientist</span>
                </div>

                <div className="logos">
                    <div className="logo">Logo</div>
                    <div className="logo">Logo</div>
                    <div className="logo">Logo</div>
                    <div className="logo">Logo</div>
                    <div className="logo">Logo</div>

                </div>
            </section>
            <br />
            <br />


            {/* Component -5  */}
            <section className='component-5' data-aos="fade-up">
                <div className="opportunity">
                    <span className='course-curriculum'>Unlock </span>
                    <span className='limited-time'>6 Certificates </span>
                    <span className='course-curriculum'>& </span>
                    <span className='limited-time'>Internship Opportunities!</span>
                </div>

                <div className="image-cards">
                    <div className="card1">
                        <span>Get 6 Industry Recognized Certificates!</span>
                        <img className='img' src={
                            certificateIcon
                        } alt="certificateIcon" />

                        <div className="feature-buttons">
                            <div className='official'><img src={starIcon} alt="starIcon" />Official and Verified</div>
                            <div className='official'>
                                <img src={starIcon} alt="starIcon" />Enhances Credibility
                            </div>
                        </div>

                    </div>
                    <div className="card2">
                        <span>Bag Internship Opportunities!</span>
                        <p>With every course, we make you not only industry-ready but also help you crack your first internship.</p>
                        <img className='img' src={illustration} alt="illustration" />

                    </div>
                </div>
            </section>


            {/* Component - 6 */}
            <section className="component-6" data-aos="fade-up">
                <span>How does the Internship Program works ?</span>
                <div className="collections">
                    <div className="row">
                        <img src={galleryIcon} alt="galleryIcon" />
                        <p>Learn from our structured pre recorded courses made by experts to meet industry needs</p>
                    </div>
                    <div className="row">
                        <img src={galleryIcon} alt="galleryIcon" />
                        <p>Personal mentors to guide and help you throughout your journey as a friend</p>
                    </div>
                    <div className="row">
                        <img src={galleryIcon} alt="galleryIcon" />
                        <p>Get guaranteed paid internships after completion of the program along with course completion certificates</p>
                    </div>
                    <div className="row">
                        <img src={galleryIcon} alt="galleryIcon" />
                        <p>1:1 live doubt solving support available throughout the day to clear your doubts instantly </p>
                    </div>
                    <div className="row">
                        <img src={galleryIcon} alt="galleryIcon" />
                        <p>Build major projects which makes your resume stand apart</p>
                    </div>
                </div>
                <button className='apply'>Apply now for ₹ 2999</button>
            </section>

        </>
    )
}

export default Home
