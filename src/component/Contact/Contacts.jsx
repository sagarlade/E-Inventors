import React from 'react';
const Contact = () => {

    return (
        <>
            <section id="contact">
                <div className="container-fluid  m1_contact">
                    <div className="row">

                        <div className="col-md-12">
                            <h1 className="contact_h1">Contact</h1>
                            <p className="contact_p">WE CAN'T WAIT TO GET IN TOUCH!</p>
                        </div>
                    </div>
                </div>
                <div className="contact_section layout__padding py-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-sm-6 col-md-6 mx-auto">

                                <h1 className="as pb-3">Contact Us</h1>

                            </div>
                        </div>
                        <div className="enput_bt">
                            <div className="row">
                                <div className="col-md-10 mx-auto">
                                    <div className="row">

                                        <div className="col-md-6 end_s">
                                            <h3 className="heading mb-5">Let's talk about everything!</h3>
                                            <div className='end'><img src="https://th.bing.com/th/id/R.b1bbe96fbef766149f1e38a00c611ed7?rik=UGnCWQmxP%2f63Xw&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fjcx%2fpzG%2fjcxpzGqki.gif&ehk=GvHnje%2fQONHs6O9ckT5j7ui4WnQgNLnVpaKnVQULw6c%3d&risl=&pid=ImgRaw&r=0" alt="Image" className="img-fluid" /></div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input_main">
                                                <div className="container">
                                                    <form action="https://formsubmit.co/sagarlade07@gmail.com" method="POST">
                                                        <div className="form-group">
                                                            <input type="text" id="name" className="email-bt" placeholder="NAME" name="Name" />
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="text" id="email" className="email-bt" placeholder="EMAIL" name="Email" />
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="text" id="mobile" className="email-bt" placeholder="PHONE NUMBER" name="Email" />
                                                        </div>
                                                        <input type="hidden" name="_captcha" value="false"></input>
                                                        <input type="hidden" name="_subject" value="New submission!"></input>
                                                        <div className="form-group">
                                                            <textarea className="massage-bt" id="massage" placeholder="MASSAGE" rows="5" name="text"></textarea>
                                                        </div>
                                                        <div className="send_bt_main">
                                                            <div className="left">
                                                                <button className="send_bt" type='Submit'>Send</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>

                                            </div>
                                        </div>
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

export default Contact;