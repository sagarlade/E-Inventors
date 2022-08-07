import React from 'react';
import '../style/ourwork.css';
const Ourwork = () => {
    return (
        <>
            <section id="ourwork">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="mb-5">
                                Our Latest Works</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-6">
                            <div className="work work_1">
                                <div className="work-img_1">
                                    <div></div>
                                </div>
                                <div className="work-info">
                                    <h4>Top 12 Things Website Should Have</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6 col-lg-6">
                                    <div className="work">
                                        <div className="work-img">
                                            <img src={require('../assest/image4.jpg')}  className="img-fluid" alt="" />
                                        </div>
                                        <div className="work-info">
                                            <h6>Design and Marketing</h6>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-6">
                                    <div className="work">
                                        <div className="work-img">
                                            <img src={require('../assest/work-2.jfif')}  className="img-fluid" alt="" />
                                        </div>
                                        <div className="work-info">
                                            <h6>Social Media Marketing</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-6">
                                    <div className="work">
                                        <div className="work-img">
                                            <img src={require('../assest/image4.jpg')}  className="img-fluid" alt="" />
                                        </div>
                                        <div className="work-info">
                                            <h6>Web Design & Development</h6>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-6">
                                    <div className="work">
                                        <div className="work-img">
                                            <img src={require('../assest/image4.jpg')}  className="img-fluid" alt="" />
                                        </div>
                                        <div className="work-info">
                                            <h6>Social Media Paid Advertising</h6>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Ourwork;