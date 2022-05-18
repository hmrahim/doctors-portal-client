import React from "react";
import ServiceCard from "./ServiceCard";
import whitening from "../../../assets/images/whitening.png"
import cavity from "../../../assets/images/cavity.png"
import fluoride from "../../../assets/images/fluoride.png"

const Services = () => {
  return (
    <div className="mt-20 px-6">
        <h3 className="text-xl font-bold text-primary text-center">Service</h3>
        <h1 className="text-center text-accent text-4xl">Services We Provide</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard img={cavity} title="Cavity Filling" desc="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"></ServiceCard>
        <ServiceCard img={whitening} title="Teeth Whitening" desc="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"></ServiceCard>
        <ServiceCard img={fluoride} title="Fluoride Treatment" desc="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"></ServiceCard>
        
      </div>
    </div>
  );
};

export default Services;
