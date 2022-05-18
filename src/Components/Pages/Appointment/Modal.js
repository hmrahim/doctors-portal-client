import React from "react";
import { format } from "date-fns";
import Button from "../Home/Button";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
const Modal = ({ treatment, date, HandleBookingForm }) => {
  
  const [user, loading, error] = useAuthState(auth);
  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-accent">{treatment?.name}</h3>
          <div className="form-control w-full my-5">
            <div className="mb-2">
              <form onSubmit={HandleBookingForm} action="">
                <input
                  disabled
                  name="date"
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered mb-2 w-full md:w-full select-none"
                  value={format(date, "PP")}
                />
                <input name="price" type="hidden" value={treatment?.price} />
                <select
                  name="slot"
                  className="select select-bordered w-full mb-2"
                >
                  <option disabled selected>
                    Who shot first?
                  </option>
                  {treatment?.slots.map((slot) => (
                    <option value={slot}>{slot}</option>
                  ))}
                </select>

                <input
                disabled
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="input input-bordered mb-2 w-full md:w-full"
                  value={user?.displayName}
                />

                <input
                disabled
                  name="email"
                  type="text"
                  placeholder="Email Address"
                  className="input input-bordered mb-2 w-full md:w-full"
                  value={user?.email}
                />

                <input
                  name="phone"
                  type="text"
                  placeholder="Phone Number"
                  className="input input-bordered mb-2 w-full md:w-full"
                />
               

                <button className="btn btn-accent btn modal-button text-white">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
