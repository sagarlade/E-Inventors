import React, { useState } from "react";
import { Button } from "@mui/material";
import "react-datepicker/dist/react-datepicker.css";
import { Calendar } from "react-calendar";

const Booking = ({ nextStep }) => {
  const [date, setDate] = useState(new Date());

  const handleChange = (date) => {
    setDate(date);
  };

  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };
  return (
    <>
      <div component="main_d mt-5 mb-5">
        <div className="d_s container">
          <div className="row">
            <div className="col-md-12">
              <div className="demo mx-auto">
                <Calendar
                  selected={date}
                  minDate={new Date()}
                  onChange={handleChange}
                />
              </div>
              <p className="text-center ss_d mt-4">
                <span className="bold d_qr">Selected Date: </span>
                {date.toDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-3 mb-5">
        <div className="row">
          <div className="col-md-2 b_bs mx-auto">
            <div className="d_btn">
              <Button
                onClick={Continue}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className="fw-bold text-center"
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
