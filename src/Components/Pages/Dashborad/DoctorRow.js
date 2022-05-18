import React from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { ToastContainer, toast } from "react-toastify";

const DoctorRow = ({ docotr, index,refetch }) => {
  const { name, image, email, spaciality } = docotr;

  const deleteDoctor = (email)=> {
  const proced =  Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
   
    if(result.isConfirmed){
      fetch(`https://floating-bayou-18432.herokuapp.com/doctors/${email}`,{
        method:"DELETE",
        headers:{
          "content-type" : "applidcation/json",
          authorization:`bearer ${localStorage.getItem("token")}`
        }
      })
      .then(res=>res.json())
      .then(data=> {

        refetch()
      })
      
    }
    
    
    
  })

  
  }

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div class="avatar">
          <div class="w-20 rounded">
            <img
              src={image}
              alt="Tailwind-CSS-Avatar-component"
            />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{spaciality}</td>
      <td>
        <button onClick={()=>deleteDoctor(email)} class="btn btn-xs btn-error">Delete</button>
      </td>
    </tr>
  );
};

export default DoctorRow;
