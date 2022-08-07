import React from 'react';
import { NavLink } from 'react-router-dom';

const AboutUs = () => {
    return (
        <>
            <div className="about_us_section">
                <div class="about-section">
                    <div class="inner-width">
                        <h1 className='h_h1'>About Us</h1>
                        <div class="border"></div>
                        <div class="about-section-row">
                            <div class="about-section-col">
                                <div class="about">
                                    <p className='p_p'>
                                        E-COM INVENTORS is an Online management company. We offer social media services, search engine services, and website design services. We create and manage top-performing websites and social media campaigns for businesses. Our company manages social media networks such as Twitter, Facebook, Google Plus, and Instagram on your behalf. We are experts with Shopify & Wix platforms. We drive traffic, leads, and sales to your online shop and your physical location. We use relevant social media marketing services to help businesses grow and meet their goals.
                                    </p>
                                    <NavLink to="/about" className="a">Read More</NavLink>
                                </div>
                            </div>
                            <div class="about-section-col">
                                <div class="skills">
                                    <div class="skill">
                                        <div class="title">Social Media Marketing</div>
                                        <div class="progress">
                                            <div class="progress-bar p1"><span>90%</span></div>
                                        </div>
                                    </div>

                                    <div class="skill">
                                        <div class="title">Social Media Paid Advertising</div>
                                        <div class="progress">
                                            <div class="progress-bar p2"><span>70%</span></div>
                                        </div>
                                    </div>

                                    <div class="skill">
                                        <div class="title">Design</div>
                                        <div class="progress">
                                            <div class="progress-bar p3"><span>60%</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutUs;