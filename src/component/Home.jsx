import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/service.css';
import '../style/respo.css';
import '../style/team.css';
import Ourwork from './Ourwork';
import Contact from './Contact/Contact';
import AboutUs from './About/AboutUs';
const Home = () => {
    return (
        <div>
            <section>
                <div className="container-fluid">
                    <div className="row banner" >
                        <div className="col-md-7 pt-5 pt-lg-0 order-2 order-lg-1 h_2">
                            <h1 className="h3_head">We are ready for  <br></br>Social Media marketing</h1>
                            <div className="mt-5 button">
                                <NavLink to="contact" className="btn-started btn btn-info">Get A free Consultation </NavLink>
                            </div>
                        </div>
                        <div className="col-md-5 pt-5 pt-lg-0 order-2 order-lg-1 h_3">
                            <img src={require('../assest/banner-img1.png')} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <AboutUs />
            </section>
            <section>
                <Ourwork />
            </section>
            <section>
                <div className="services pd">
                    <div className="container mt-3">
                        <h3 className="title_service mt-3">Services</h3>
                        <div className="row text-center">
                            <div className="col-md-4">
                                <div className="square"><img src={require('../assest/service/web-design.png')} alt="social" className="img-fluid" /></div>
                                <div className="serv">
                                    <h5>E-Commerce Web Design</h5>
                                    <p>Our Instagram engagement campaign will have your Instagram account come alive. With constant growth and engagement you will be sure to have the thriving Instagram account you’ve been looking for.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="serv">
                                    <div className="square"><img src={require('../assest/service/multimedia.png')} alt="social" className="img-fluid" /></div>
                                    <h5>Social Media Paid Advertising</h5>
                                    <p>Our ad campaigns will bring you the results your looking for. From brand awareness campaigns to lead funnels, we have got the tools to create the right ads for your business.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="square"><img src={require('../assest/service/management.png')} alt="social" className="img-fluid" /></div>
                                <div className="serv">
                                    <h5>Social Media Management</h5>
                                    <p>Our social media management services are perfect for growing your brand’s social community and engage with the right audience.  </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="team">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <h2 className='mb-5'>Meet Our Team</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="member">
                                <div className="member-img">
                                    <img src={require('.././assest/Team/CEO.jpeg')} className="img-fluid" alt="" />
                                </div>
                                <div className="member-info">
                                    <h4>Thomas Alpers</h4>
                                    <span>CEO</span>
                                    <div className="social-links">
                                        <NavLink to="#"><i className="fab fa-facebook-f"></i></NavLink>
                                        <NavLink to="#"><i className="fab fa-twitter"></i></NavLink>
                                        <NavLink to="#"><i className="fab fa-linkedin-in"></i></NavLink>
                                        <NavLink to="#"><i className="fab fa-pinterest-p"></i></NavLink>
                                        <NavLink to="#"><i className="fab fa-instagram"></i></NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="member">
                                <div className="member-img">
                                    <img src={require('.././assest/Team/Operations Manager1.png')} className="img-fluid" alt="" />
                                </div>
                                <div className="member-info">
                                    <h4>Abhijeet Kale</h4>
                                    <span>Marketing Manager</span>
                                    <div className="social-links">
                                        <NavLink to="#"><i className="fab fa-facebook-f"></i></NavLink>
                                        <NavLink to="#"><i className="fab fa-twitter"></i></NavLink>
                                        <NavLink to="#"><i className="fab fa-linkedin-in"></i></NavLink>
                                        <NavLink to="#"><i className="fab fa-pinterest-p"></i></NavLink>
                                        <NavLink to="#"><i className="fab fa-instagram"></i></NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="member">
                                <div className="member-img">
                                    <img src={require('.././assest/Team/sagar1.jpeg')} className="img-fluid" alt="" />
                                </div>
                                <div className="member-info">
                                    <h4>Sagar Lade</h4>
                                    <span>Web Developer</span>
                                    <div className="social-links">
                                        <NavLink to="#"><i className="fab fa-facebook-f"></i></NavLink>
                                        <NavLink to="#"><i className="fab fa-twitter"></i></NavLink>
                                        <NavLink to="#"><i className="fab fa-linkedin-in"></i></NavLink>
                                        <NavLink to="#"><i className="fab fa-pinterest-p"></i></NavLink>
                                        <NavLink to="#"><i className="fab fa-instagram"></i></NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="member">
                                <div className="member-img">
                                    <img src={require('.././assest/Team/Ekta.jpg')} className="img-fluid" alt="" />
                                </div>
                                <div className="member-info">
                                    <h4>Ekta Kale</h4>
                                    <span>operation Analyst</span>
                                    <div className="social-links">
                                        <NavLink to="#"><i className="fab fa-facebook-f"></i></NavLink>
                                        <NavLink to="#"><i className="fab fa-twitter"></i></NavLink>
                                        <NavLink to="#"><i className="fab fa-linkedin-in"></i></NavLink>
                                        <NavLink to="#"><i className="fab fa-pinterest-p"></i></NavLink>
                                        <NavLink to="#"><i className="fab fa-instagram"></i></NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
            <section>
                <Contact />
            </section>
        </div>

    );
}

export default Home;