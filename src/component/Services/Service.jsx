import React from 'react';
import { NavLink } from 'react-router-dom';
import SocialMedia from './SocialMedia';
const Services = () => {

    return (
        <>
            <div className="services">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 col-lg-12 justify-content-center services_serv">
                            <div className="services_se">
                                <h1 className="serv_heading">Social Media Marketing Services</h1>
                                <p className="serv_i_text">OUR SERVICES ARE BUILT FOR YOUR BUSINESS NEEDS</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="services pd">
                    <div className="container mt-5">
                        <div className="row text-center">
                            <div className="col-md-4">
                                <div className="square"><img src={require('../.././assest/service/web-design.png')} alt="social" className="img-fluid" /></div>
                                <div className="serv">
                                    <h5>E-Commerce Web Design</h5>
                                    <p>Our Instagram engagement campaign will have your Instagram account come alive. With constant growth and engagement you will be sure to have the thriving Instagram account you’ve been looking for.</p>
                                    {/* <button className="mt_1">
                                        <NavLink to="#" className="buttontoolbar"> Read More</NavLink>
                                    </button> */}
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="serv">
                                    <div className="square"><img src={require('../.././assest/service/multimedia.png')} alt="social" className="img-fluid" /></div>
                                    <h5>Social Media Paid Advertising</h5>
                                    <p>Our ad campaigns will bring you the results your looking for. From brand awareness campaigns to lead funnels, we have got the tools to create the right ads for your business.</p>
                                    {/* <button className="mt_2">
                                        <NavLink to="/SocialMedia" className="buttontoolbar"> Read More</NavLink>
                                    </button> */}
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="square"><img src={require('../.././assest/service/management.png')} alt="social" className="img-fluid" /></div>
                                <div className="serv">
                                    <h5>Social Media Management</h5>
                                    <p>Our social media management services are perfect for growing your brand’s social community and engage with the right audience.  </p>
                                    {/* <button className="mt-4">
                                        <NavLink to="#" className="buttontoolbar"> Read More</NavLink>
                                    </button> */}
                                </div>
                            </div>
                            <div className="col-md-4 mt-5">
                                <div className="square"><img src={require('../.././assest/service/content.png')} alt="social" className="img-fluid" /></div>
                                <div className="serv">
                                    <h5>Content Marketing Services</h5>
                                    <p>Your website's content is crucial: it's the foundation of your SEO and the reason many people visit your site. We'll write it with precision. </p>
                                    {/* <button className="mt-2">
                                        <NavLink to="#" className="buttontoolbar"> Read More</NavLink>
                                    </button> */}
                                </div>
                            </div>
                            <div className="col-md-4 mt-5">
                                <div className="square"><img src={require('../.././assest/service/web-design.png')} alt="social" className="img-fluid" /></div>
                                <div className="serv">
                                    <h5>Web Design & Development</h5>
                                    <p>E-com Inventors build custom, mobile-ready, search engine optimized websites that help you meet your business objectives. </p>
                                    {/* <button className="mt-1">
                                        <NavLink to="#" className="buttontoolbar"> Read More</NavLink>
                                    </button> */}
                                </div>
                            </div>
                            <div className="col-md-4 mt-5">
                                <div className="square"><img src="https://clipground.com/images/clipart-music-video-9.jpg" alt="social" className="img-fluid" /></div>
                                <div className="serv">
                                    <h5>Video Production</h5>
                                    <p>Storytelling with video has the power to take your brand to the next level. Video marketing is powerful and engaging when done right. </p>
                                    {/* <button className="mt-2">
                                        <NavLink to="#" className="buttontoolbar"> Read More</NavLink>
                                    </button> */}
                                </div>
                            </div>
                            <div className="col-md-4 mt-5">
                                <div className="square"><img src={require('../.././assest/service/management.png')} alt="social" className="img-fluid" /></div>
                                <div className="serv">
                                    <h5>Web Hosting</h5>
                                    <p>You need a secure, trustworthy company to host your new website. Go with E-com Inventors and you won't have to worry about it. </p>
                                    {/* <button className="mt_7">
                                        <NavLink to="#" className="buttontoolbar"> Read More</NavLink>
                                    </button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Services;