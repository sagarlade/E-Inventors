import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer">
                    <div className="container">
                        <div className="row border-top">
                            <div className="col-md-6 padding_bottom1">
                                <h3>Subscribe Now</h3>
                                <form className="footer_form">
                                    <input className="enter" placeholder="Enter your email" type="type" name="Enter your email"/>
                                        <button className="submit">submit</button>
                                </form>
                            </div>
                            <div className="col-md-4 padding_bottom1 mx-auto abs">
                                <h3 className="text-center">Follow Us</h3>
                                <ul className="location_icon mt-3">
                                    <li > <a href="https://www.facebook.com/ecominventors"><i className="fab fa-facebook-f fa-2x"></i></a></li>
                                    <li> <a href="#"><i className="fab fa-twitter fa-2x"></i></a></li>
                                    <li> <a href="https://instagram.com/ecominventors?igshid=YmMyMTA2M2Y="><i className="fab fa-instagram fa-2x"></i></a></li>
                                    <li> <a href="#"><i className="fab fa-whatsapp fa-2x"></i></a></li>
                                    <li> <a href="#"><i className="fab fa-linkedin fa-2x"></i></a></li>

                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className="copyright">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 copyright_text">
                                    <p>@ 2022 by E-com Inventors. Proudly created with   <NavLink className="sapn-copyright" to="#">E-com Inventors, LLC</NavLink></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer></>
    );
}

export default Footer;