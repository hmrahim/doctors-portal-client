import React from "react";

const InfoCard = ({logo,bg,title,desc}) => {
  return (
    <div class={`card lg:card-side  shadow-xl p-3 ${bg} text-white`}>
      <figure>
        <img
          src={logo}
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{desc}</p>
        
      </div>
    </div>
  );
};

export default InfoCard;
