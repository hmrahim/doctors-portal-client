import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../Hooks/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Dashboard = () => {
  const [user] = useAuthState(auth)

  const [admin] = useAdmin(user)
    return (
        <div class="drawer drawer-mobile gap-5">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col ">
          <Outlet></Outlet>
          {/* <!-- Page content here --> */}
         
        </div> 
        <div class="drawer-side rounded-xl">
          <label for="my-drawer-2" class="drawer-overlay"></label> 
          <ul class="menu p-4 overflow-y-auto  w-60 bg-base-300 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/dashboard/mybookings">My Bookings</Link></li>
            {
              admin && 
              <>
              <li><Link to="/dashboard/allusers">All Users</Link></li>
              <li><Link to="/dashboard/adddoctor">Add Doctor</Link></li>
              <li><Link to="/dashboard/managedoctors">Manage Doctors</Link></li>
              </>
            }
            
            
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;