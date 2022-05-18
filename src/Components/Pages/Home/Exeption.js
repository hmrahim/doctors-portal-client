import React from "react";
import treatment from "../../../assets/images/treatment.png"
import Button from "./Button";

const Exeption = () => {
  return (
    <div className="hero min-h-screen mt-20 px-6">
      <div className="hero-content flex-col lg:flex-row md:justify-center gap-12 md:px-20">
        <img
          src={treatment}
          className="md:max-w-lg rounded-lg shadow-xl"
          height={576}
          
        />
        <div className="text-accent md:px-3">
          <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
          <p className="py-6">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
          </p>
          <Button></Button>
        </div>
      </div>
    </div>
  );
};

export default Exeption;
