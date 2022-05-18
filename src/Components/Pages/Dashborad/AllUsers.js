import React from 'react';
import { useQuery } from 'react-query';
import token from '../../Hooks/Token';
import UserTable from './UserTable';

const AllUsers = () => {

    const {data:user,isLoading,refetch} = useQuery("user",()=> fetch("https://floating-bayou-18432.herokuapp.com/user",token).then(res=>res.json()))
    if(isLoading){
        return <h1 className='4xl text-center'>Loading...</h1>
    }
    return (
        <div>
            <div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
      <tr>
        <th>No</th>
        <th>Email</th>
        <th>Role</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
     {
         user.map((user,index)=> <UserTable key={index} user={user} no={index} refetch={refetch}></UserTable>)
     }
     
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;