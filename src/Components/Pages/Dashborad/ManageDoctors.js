import React from 'react';
import { useQuery } from 'react-query';
import token from "../../Hooks/Token"
import DoctorRow from './DoctorRow';

const ManageDoctors = () => {
    const {data,isLoading,refetch} = useQuery("manageDoctors",() => fetch("https://floating-bayou-18432.herokuapp.com/doctors",token).then(res=>res.json()))
    if(isLoading){
        return  <div className="flex justify-center mt-11 items-center w-2/4 mx-auto">
        <button className="btn loading text-center">loading</button>
      </div>
    }
    return (
        <div className='px-20'> 
            <div class="overflow-x-auto">
  <table class="table w-full">
 
    <thead>
      <tr>
        <th>No</th>
        <th>Photo</th>
        <th>Name</th>
        <th> Email</th>
        <th> Spaciality</th>
        <th> action</th>
      </tr>
    </thead>
    <tbody>
     
 {
     data.map((docotr,index)=> <DoctorRow key={index} refetch={refetch} index={index} docotr={docotr}></DoctorRow>)
 }
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageDoctors;