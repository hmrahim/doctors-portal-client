import React from 'react';

const TestimonialCard = ({review}) => {
    return (
        <div className="shadow-xl py-4 px-4 text-accent">
          <p className="text-[16px] text-primaryBlack">
          {review.desc}
          </p>
          <div className="flex gap-5 items-center mt-5 py-4 ">
            <img
              className="w-16 h-16 border-2 border-bg1 rounded-full ring ring-primary"
              src={review.img}
              alt=""
            />
            <div>
              <h2>{review.name}</h2>
              <h3>{review.location}</h3>
            </div>
          </div>
        </div>
    );
};

export default TestimonialCard;