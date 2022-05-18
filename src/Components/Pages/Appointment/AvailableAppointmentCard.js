import React from "react";

const AvailableAppointmentCard = ({ service, setTreatment }) => {
  return (
    <div className="card w-96 mx-auto shadow-xl">
      <div className="card-body">
        <h2 className=" text-xl font-semibold text-secondary text-center">
          {service.name}
        </h2>
        {service.slots.length > 0 ? (
          <p className="text-[14px] font-normal text-black text-center">
            {service.slots[0]}
          </p>
        ) : (
          <p className="text-[14px] font-normal text-[red] text-center">
            Try another date
          </p>
        )}
        <p className="text-xs font-normal text-accent text-center">
          {service.slots.length} {service.slots.length > 1 ? "SPACES" : "SPACE"}{" "}
          AVAILABLE
        </p>
        <p className="text-center text-xl font-normal text-accent">price:${service.price}</p>
        <div className="card-actions justify-center">
          {/* <button
            onClick={() => setTreatment(service)}
            disabled={service.slots.length === 0}
            className="btn btn-primary text-white bg-gradient-to-r from-primary to-secondary"
          >
            Book Appointment
          </button> */}

          <label 
            onClick={() => setTreatment(service)}
            disabled={service.slots.length === 0}
            className="btn btn-primary btn modal-button text-white bg-gradient-to-r from-primary to-secondary"

          htmlFor="my-modal-3"
          
           >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AvailableAppointmentCard;
