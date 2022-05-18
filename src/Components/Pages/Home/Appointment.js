import React from "react";
import doctor from "../../../assets/images/doctor-small.png";
import bg from "../../../assets/images/appointment.png";
import Button from "./Button";

const Appointment = () => {
  return (
    <div className='w-full  mt-32  bg-no-repeat px-6' style={{background:`url(${bg})`}}>
    <div className=" bg-blcktranp  ">
      <div className="md:w-11/12 mx-auto flex flex-col md:flex-row px-6 md:px-0 justify-center items-center">
        <div className="md:w-2/4 w-full hidden md:block ">
          <img
            className="mt-[-100px]"
            src="https://i.ibb.co/NZZQLYZ/doctor-small.png"
            alt=""
          />
        </div>
        <div className="md:w-2/4 w-full  md:mt-0 py-10 md:py-0">
          <h3 className="font-bold text-xl text-primary">Appointment</h3>
          <h2 className="text-4xl text-white my-3">Make an appointment Today</h2>
          <p className="text-white">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The
            point of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop
            publishing packages and web page
          </p>
        <Button></Button>
        </div>
      </div>
    </div>
  </div>
  )
};

export default Appointment;
