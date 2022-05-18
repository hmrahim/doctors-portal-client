import React from "react";

const ServiceCard = ({img,title,desc}) => {
  return (
    <div className="card  shadow-xl text-accent">
      <figure className="px-10 pt-10">
        <img
          src={img}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{desc}</p>
       
      </div>
    </div>
  );
};

export default ServiceCard;
