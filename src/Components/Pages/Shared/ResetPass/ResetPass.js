import React from "react";
import { Link ,useLocation,useNavigate} from "react-router-dom";
import { useForm } from "react-hook-form";
import auth from "../../../../firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';

const ResetPass = () => {
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
      );

  const navigate = useNavigate()
  const location = useLocation()
  const from = location?.state?.from?.pathname || "/"

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();




  const onSubmit = async (data) => {
   await sendPasswordResetEmail(data.email)
   toast.success("Password reset email sent! check your email")
  
  };

  return (
    <div className="md:w-2/5 lg:2/5   w-full mt-4 px-6 mx-auto shadow-xl rounded-xl ">
      <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Your email"
              className="input input-bordered w-full "
              {...register("email", {
                required:{
                  value:true,
                  message:"Email is required"

                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "Please provide a valid email",
                },
              })}
            />
            <label className="label">
            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
              
            </label>
          </div>
         
        
          <div className="form-control mt-6">
            {
              sending  ? 
               <button  className="btn loading">Sending</button> 
               : 
               <button className="btn btn-accent">Send Email</button>
            }
            
           

          </div>
        </form>

      
     
      </div>
    </div>
  );
};

export default ResetPass;
