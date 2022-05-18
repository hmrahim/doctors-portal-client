import { useEffect, useState } from "react"

const useAdmin = (user) => {
    const [admin,setAdmin] = useState(false)
    const [adminLoading,setAdminLoading] = useState(true)
    console.log("admin",admin);


    useEffect(()=> {
        const email = user.email

        fetch(`https://floating-bayou-18432.herokuapp.com/admin/${email}`,{
            method:"GET",
            headers:{
                "content-type":"application/json",
                "authorization": `bearer ${localStorage.getItem("token")}`,
            }
            
        })
        .then(res=> res.json())
        .then(data=>{ 
            setAdmin(data.admin)
            setAdminLoading(false)
        })
       

    },[user])
return [admin,adminLoading]

}


export default useAdmin