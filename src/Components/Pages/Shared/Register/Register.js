import React from "react";
import { Link,useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import useToken from "../../../Hooks/useToken";

const Register = () => {
  const [updateProfile, updating, Updateerror] = useUpdateProfile(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, googleuser, googleloading, googleerror] =
    useSignInWithGoogle(auth);
    const [sendEmailVerification, sending, verifyError] = useSendEmailVerification(
      auth
    );
    const navigate = useNavigate()

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();


  const [token] = useToken(user || googleuser)

  // if(user || googleuser){
  //   console.log(user || googleuser);
  // }
 if(token){
   navigate("/appointment")
 }


  let signupErrorMessage;
  if(error || googleerror){
    signupErrorMessage = <p className="text-red-500 text-[16px]">{error?.message || googleerror?.message}</p>
  }

  const onSubmit = (data) => {
    createUserWithEmailAndPassword(data.email,data.password)
    .then( async()=>{
      await updateProfile({displayName:data.name})
      await sendEmailVerification()
      toast.success("Verifycation email sent !")
      navigate("/verifyemail")
      
    })
  };

  return (
    <div className="md:w-2/5 lg:2/5   w-full mt-4 px-6 mx-auto shadow-xl rounded-xl">
      <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full "
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is required",
                },
              })}
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Your email"
              className="input input-bordered w-full "
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "Please provide a valid email",
                },
              })}
            />
            <label className="label">
              {errors.email?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
              {errors.email?.type === "pattern" && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full "
              {...register("password", {
                required: {
                  value: true,
                  message: "Email is required",
                },
                minLength: {
                  value: 6,
                  message: "Must be 6 carracter or longer",
                },
              })}
            />
            <label className="label">
              {errors.password?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.password.message}
                </span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="label-text-alt text-red-500">
                  {errors.password.message}
                </span>
              )}
              {signupErrorMessage}
            </label>
          </div>

          <div className="form-control mt-6">
            {loading || googleloading ? (
              <button className="btn loading">loading</button>
            ) : (
              <button className="btn btn-accent">Register</button>
            )}
          </div>
        </form>

        <p className="text-accent">
          Already you have an account?{" "}
          <Link to="/login" className="text-primary">
            Please login
          </Link>
        </p>
        <div className="flex flex-col w-full border-opacity-50">
          <div className="divider">OR</div>
        </div>

        <p
          onClick={() => signInWithGoogle()}
          className="py-2 select-none cursor-pointer border border-accent rounded-lg text-[16px] text-center"
        >
          CONTINUE WITH GOOGLE
        </p>
      </div>
    </div>
  );
};

export default Register;
