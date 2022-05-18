import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");

  useEffect(() => {
  const email = user?.user?.email
  const currentEmail = {email:email}
  if(email){
      fetch(`https://floating-bayou-18432.herokuapp.com/user/${email}`,{
          method:"PUT",
          headers:{
              "content-type" : "application/json"
          },
          body:JSON.stringify(currentEmail)
      })
      .then(res=>res.json())
      .then(data=>{
          setToken(data.token)
          localStorage.setItem("token",data.token)
      })
  }



  }, [user]);

  return [token];
};

export default useToken;
