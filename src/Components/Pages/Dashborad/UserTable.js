import React from 'react';
import { ToastContainer, toast } from "react-toastify";

const UserTable = ({user,no,refetch}) => {
    const {email,role} = user
    const makeAdmin = ()=> {
       fetch(`https://floating-bayou-18432.herokuapp.com/user/makeadmin/${user.email}`,{
           method:"PUT",
           headers:{
               "content-type":"application/json",
               "authorization": `bearer ${localStorage.getItem("token")}`,
           },
           
       })
       .then(res=>{
           if(res.status === 403){
            toast.error("Make admin failed!")
           }else{
               toast.success("Maked admin succesfully!")
               refetch()
            return res.json()

           }
          
        })
       .then(data=> console.log(data))
       refetch()
    }
    return (
        <tr>
        <th>{no+1}</th>
        <td>{user.email}</td>
        <td>{role == "Admin" ? <button class="btn btn-xs">Admin</button> : <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
        <td>{role}</td>
      </tr>
    );
};

export default UserTable;