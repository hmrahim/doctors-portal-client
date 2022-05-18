import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useAuth = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, googleuser, googleloading, googleerror] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, loginuser, loginloading, loginerror] =
    useSignInWithEmailAndPassword(auth);

  const register = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (!name || !email || !password) {
      toast.error("You cannot provide empty any field!");
    } else {
      createUserWithEmailAndPassword(email, password).then(() => {
        toast.success("Register succesfully!");
      });
    }
  };

  const login = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    if(!email || !password){
        toast.error("You cannot provide empty any field !")
    }else{
        signInWithEmailAndPassword(email,password)
        .then(()=> {
            toast.success("Login succesfully!")
        })

    }
  
  };


  const loginWithGoogle = ()=> {
    signInWithGoogle()
    .then(()=> {
        toast.success("Login succesfully")
    })

  }

  return { register, login,loginWithGoogle };
};

export default useAuth;
