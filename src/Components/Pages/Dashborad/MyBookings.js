import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import {Link, useNavigate} from "react-router-dom"

const MyBookings = () => {
  const [user, loading, error] = useAuthState(auth);
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    fetch(`https://floating-bayou-18432.herokuapp.com/bookings?email=${user.email}`,{
      method:"GET",
      headers:{
        "authorization":`bearer ${localStorage.getItem("token")}`
      }
    })
      .then((res) => {
        if(res.status=== 401 || res.status === 403){
          navigate("/")

        }
       return res.json()
      })
      .then((data) => setBookings(data));
  }, []);
  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th className="text-center">No</th>
              <th className="text-center">Treatment</th>
              <th className="text-center">name</th>
              <th className="text-center">Email</th>
              <th className="text-center">price</th>
              <th className="text-center">slot</th>
              <th className="text-center">Payment</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((book,index) => (
              <tr>
                <th className="text-center">{index + 1}</th>
                <td className="text-center">{book.patientName}</td>
                <td className="text-center">{book.name}</td>
                <td className="text-center">{book.email}</td>
                <td className="text-center">${book.price}</td>
                <td className="text-center">{book.slot}</td>
                <td className="text-center">

                  {( book.price && !book.paid) && <Link to={`/dashboard/payment/${book._id}`}><button className="btn btn-xs btn-accent">Pay</button></Link>}
                  {( book.price && book.paid) && <span className="text- success ">paid</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;
