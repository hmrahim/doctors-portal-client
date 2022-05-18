import React, { useState } from "react";
import chair from "../../../assets/images/chair.png"
import { DayPicker } from 'react-day-picker';
import { format } from "date-fns";
import 'react-day-picker/dist/style.css';
import bg from "../../../assets/images/bg.png"

const AppointmentBanner = ({date,setDate}) => {
   
    let footer = <p>Please pick a day.</p>;
    if (date) {
      footer = <p>You picked {format(date, 'PP')}.</p>;
    }


  return (
    <div className="hero min-h-screen px-6" style={{background:`url(${bg})`}}>
      <div className="hero-content flex md:gap-30 gap-20 justify-center flex-col md:flex-row-reverse ">
        <img
          src={chair}
          className="md:max-w-lg rounded-lg shadow-2xl"
        />
        <div className=" shadow-lg">
        <DayPicker
         mode="single"
         selected={date}
         onSelect={setDate}
         footer={footer}
        
        
        ></DayPicker>
        {

        }
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
