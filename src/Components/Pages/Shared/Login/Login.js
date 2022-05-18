import React from "react";
import { Link ,useLocation,useNavigate} from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuthState } from "react-firebase-hooks/auth";
import useToken from "../../../Hooks/useToken";

const Login = () => {
const [signInWithEmailAndPassword, loginuser, loginloading, loginerror] =
  useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleuser, googleloading, googleerror] = useSignInWithGoogle(auth);
  const navigate = useNavigate()
  const location = useLocation()
  const from = location?.state?.from?.pathname || "/"

  const [user,userLoading,userError] = useAuthState(auth)
  const [token] = useToken(loginuser || googleuser)
  if(loginuser){
    console.log(loginuser);
  }

  if(token){
    navigate(from,{replace:true})
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  if(loginuser || googleuser){
    //console.log(loginuser || googleuser);
  }
let loginerrorMessage ;
  if(loginerror || googleerror){
    loginerrorMessage = <p className="text-red-500 text-[16px]">{loginerror?.message || googleerror?.message}</p>
  }

  // if(loginloading || googleloading){
  //   return <h1>Loading...</h1>
  // }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email,data.password)
    .then(()=> {
      toast.success("Sign in succesfully")
      navigate(from,{replace:true})
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
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full "
              {...register("password", {
                required:{
                  value:true,
                  message:"Email is required"

                },
                minLength: {
                  value: 6,
                  message: 'Must be 6 carracter or longer' 
                },
              })}
            />
            <label className="label">
            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
            {loginerrorMessage}
              
            </label>
          </div>
        
          <div className="form-control mt-6">
            {
              loginloading || googleloading ? 
               <button  className="btn loading">loading</button> 
               : 
               <button className="btn btn-accent">Login</button>
            }
            
           

          </div>
        </form>

        <p className="text-accent">
          New to docotrs portal ?{" "}
          <Link to="/register" className="text-primary">
            Create an account
          </Link>
        </p>
        <p className="text-accent">
          Forgot password ?{" "}
          <Link to="/resetpass" className="text-primary">
            Reset now
          </Link>
        </p>
        <div className="flex flex-col w-full border-opacity-50">
          <div className="divider">OR</div>
        </div>

        <p
          onClick={()=>signInWithGoogle()}
          className="py-2 select-none cursor-pointer border border-accent rounded-lg text-[16px] text-center"
        >
          CONTINUE WITH GOOGLE
        </p>
      </div>
    </div>
  );
};

export default Login;
