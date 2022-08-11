import React from "react";
import { NavLink } from "react-router-dom";
import './Master.css';
const Masterclass = () => {
  return (
    <>
      <section className="master">
        <div className="container-fluid master_class">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <h1 className="master_h mb-3">E-COM INVENTORS MASTER CLASS</h1>
              <div className="master_img">
                <img
                  src={require("../../assest/e-c.webp")}
                  alt="img"
                  className="img-fluid"
                />
              </div>

              <p className="master_text mt-3">
                In our E-commerce master class our co-founder and CEO of Ecom
                Inventors, Thomas Alpers will teach you the basics of starting
                your own online business successfully from start to finish. He
                will go over all subjects related to whatever it is you would
                like to sell online from products to services. He will go over
                business licensing, domains, website development, marketing, and
                paid advertising.
              </p>
            </div>
          </div>
        </div>
        <div className="container ">
          <div className="row">
            <div className="col-md-11 mx-auto">
              <div className="row class_m">
                <div className="col-md-6 master_c_img">
                  <img
                    src={require("../../assest/master.jpg")}
                    alt="master class"
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-5 mx-auto d_sq1">
                  <div className="m_c_info">
                    <h4 className="e-com_master">
                      <NavLink to='/ecomclass' className="link_e">
                        E-commerce Master Class
                      </NavLink>
                    </h4>
                    <p className="e-com_info mt-4">
                      Let me help you create a successful online business.
                    </p>
                  </div>
                  <hr />
                  <div className="price mt-3">$1000</div>
                  <div className="book_btn mt-4">
                    <NavLink to="/main" className="b_b">
                      Book Now
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-11 mx-auto">
              <div className="row class_m">
                <div className="col-md-6 master_c_img">
                  <img
                    src={require("../../assest/master.jpg")}
                    alt="master class"
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-5 mx-auto d_sq1">
                  <div className="m_c_info">
                    <h4 className="e-com_master">
                      <NavLink to="/smmclass" className="link_e">
                      Social Media Marketing Master Class
                      </NavLink>
                    </h4>
                    <p className="e-com_info mt-4">
                      Let me help you create a successful online business.
                    </p>
                  </div>
                  <hr />
                  <div className="price mt-3">$500</div>
                  <div className="book_btn mt-4">
                    <NavLink to="/main" className="b_b">
                      Book Now
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
}

export default Masterclass;
