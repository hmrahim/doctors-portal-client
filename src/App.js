import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Pages/Shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Footer from "./Components/Pages/Shared/Footer/Footer";
import AppointmentPage from "./Components/Pages/Appointment/AppointmentPage";
import Appointment from "./Components/Pages/Home/Appointment";
import Login from "./Components/Pages/Shared/Login/Login";
import Register from "./Components/Pages/Shared/Register/Register";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequireAuth from "./Components/Pages/RequireAuth/RequireAuth";
import ResetPass from "./Components/Pages/Shared/ResetPass/ResetPass";
import VerifyEmail from "./Components/Pages/Shared/VeryEmail/VerifyEmail";
import Dashboard from "./Components/Pages/Dashborad/Dashboard";
import DashboradHome from "./Components/Pages/Dashborad/DashboradHome";
import MyBookings from "./Components/Pages/Dashborad/MyBookings";
import AllUsers from "./Components/Pages/Dashborad/AllUsers";
import RequireAdmin from "./Components/Pages/Dashborad/RequireAdmin";
import AddDoctor from "./Components/Pages/Dashborad/AddDoctor";
import ManageDoctors from "./Components/Pages/Dashborad/ManageDoctors";
import Payment from "./Components/Pages/Dashborad/Payment";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <AppointmentPage></AppointmentPage>
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/resetpass" element={<ResetPass></ResetPass>}></Route>
        <Route path="/verifyemail" element={<VerifyEmail></VerifyEmail>}></Route>
        <Route path="/dashboard" element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
            <Route index element={<DashboradHome></DashboradHome>} ></Route>
            <Route path="mybookings" element={<MyBookings></MyBookings>} ></Route>
            <Route path="payment/:id" element={<Payment></Payment>} ></Route>
            <Route path="allusers" element={<RequireAdmin><AllUsers></AllUsers></RequireAdmin>} ></Route>
            <Route path="adddoctor" element={<RequireAdmin><AddDoctor></AddDoctor></RequireAdmin>} ></Route>
            <Route path="managedoctors" element={<RequireAdmin><ManageDoctors></ManageDoctors></RequireAdmin>} ></Route>
        </Route>
      </Routes>

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
