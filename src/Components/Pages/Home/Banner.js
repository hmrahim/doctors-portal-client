import React from "react";
import chair from "../../../assets/images/chair.png";
import Button from "./Button";
import bg from "../../../assets/images/bg.png"
const Banner = () => {
  return (
    <div className="px-6" style={{background:`url(${bg})`}}>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className="md:max-w-lg rounded-lg shadow-md" />
          <div className="md:px-10 mt-20 md:mt-0 items-center">
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
           <Button></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
