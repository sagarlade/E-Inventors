import React from "react";
const Ecomclass = () => {
  return (
    <>
      <section>
        <div className="ecomclass">
          <div className="conatiner-fluid">
            <div className="row">
              <div className="col-md-12 social-media_ads">
                <h1 className="social_media_title"></h1>
              </div>
            </div>
          </div>

          <div className="container mt-5 ecom_c">
            <div className="row">
              <div className="col-md-8 mx-auto">
                <div className="ec">
                  <h1 className="ectitle">E-commerce Master Class</h1>
                  <p className="ecp mt-3">
                    Let me help you create a successful online business.
                  </p>
                </div>
                <div className="ecdata">
                  <div className="hours">4hr</div>
                  <div className="ecprice">$1000</div>
                  <div className="mode">Online</div>
                </div>
                <div className="ec_btn">
                  <a href="" className="ec_b">
                    Book Now
                  </a>
                </div>
                <hr />

                <div className="ec_desc mt-5 mb-5">
                  <h3 className="desc_title">Service Description</h3>
                  <p className="desc_pq3">
                    In my E-commerce mentorship program I teach you the basics
                    of starting your own online business from start to finish. I
                    go over all subjects related to whatever it is you would
                    like to sell online from products to services. We go over
                    business licensing, domains, website development, marketing,
                    and paid advertising. Hope to schedule you soon for a in
                    person class!
                  </p>
                </div>
                <hr />

                <div className="ec_contact mt-4 mb-4">
                    <h3 className="ec_cont">
                    Contact Details
                    </h3>
                    <p className="ec_contact">
                    + 6692209753<br />
                    thomas@alpersagency.com <br />
                    USA
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ecomclass;
