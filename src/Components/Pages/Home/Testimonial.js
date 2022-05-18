import React from "react";
import TestimonialCard from "./TestimonialCard";
import people1 from "../../../assets/images/people-1.png"
import people2 from "../../../assets/images/people-2.png"
import people3 from "../../../assets/images/people-3.png"

const Testimonial = () => {
    const reviews = [
        {
            _id:1,
            name:"Winson Herry",
            location:"California",
            img:people1,
            desc:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
        {
            _id:2,
            name:"Winson Herry",
            location:"California",
            img:people2,
            desc:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
        {
            _id:3,
            name:"Winson Herry",
            location:"California",
            img:people3,
            desc:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
    ]
  return (
    <div className="w-full px-6 md:px-0 md:w-11/12 mx-auto mt-28">
      <h3 className="font-bold text-lg rounded-lg text-primary">Testimonial</h3>
      <h1 className="text-4xl text-accent">What Our Patients Says</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-36">
          {
              reviews.map(review=> <TestimonialCard key={review._id} review = {review} ></TestimonialCard>)
          }
       
      
       
        
       
      </div>
    </div>
  );
};

export default Testimonial;
