import React from "react";

function About() {
  return (
    <>
      <div className="about_us">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 mx-auto about_section">
              <h1 className="about_title animate-charcter">ABOUT US</h1>
              <p className="about_data lineUp mt-3">
                E-COM INVENTORS is an Online management company.
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="container-fluid about-bg">
          <div className="row">
            <div className="col-md-12">
              <h2 className="headline text-center mb-3 fw-semibold text-black">
                About Us
              </h2>
            </div>
            <div className="col-md-8 mx-auto">
              <p className="qe_1e">E-COM INVENTORS</p>
              <p className="envi">
                Our Social Media Marketing Services help your business grow
                brand awareness, relationships, and website traffic.
              </p>
              <p className="qe_1e">Develop Brand Awareness (Followers) </p>
              <p className="envi">
                Growing your followers on social media will help you increase
                word of mouth and referrals. Our social media marketing services
                will help you increase your followers with relevant people. We
                will ensure that your followers match the demographics,
                interests, and behaviors of your typical customers.
              </p>
              <p className="qe_1e">Build Relationships (Engagement):</p>
              <p className="envi">
                When you build a strong connection through engagement with your
                audience, they are more likely to buy from you. We will help you
                increase engagement (likes, comments, etc.) on your social media
                posts. The more engagement you have, the stronger your
                connection is with your audience.
              </p>
              <p className="qe_1e">Increasing Website Exposure (Traffic):</p>
              <p className="envi">
                Increasing your website traffic will directly influence leads
                and sales. We will focus on developing social media advertising
                campaigns that drive high volumes of traffic to your website. To
                increase conversions, we can add-on retargeting ads to stay in
                front of recent website visitors.
              </p>
              <div className="mb-3">
              <img src="https://static.wixstatic.com/media/39e331_cad70a18950242a280b1a26b18f8f40b~mv2.jpg/v1/fill/w_1108,h_528,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Ecom_WebBanner_Desktop_1-2.jpg" alt="e-com" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
