import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AvailableAppointmentCard from './AvailableAppointmentCard';
import Modal from './Modal';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { ToastContainer, toast } from "react-toastify";
import { useQuery } from 'react-query';

const AvailableAppointments = ({date}) => {
    // const [services,setServices] = useState([])
    const [treatment,setTreatment] = useState(null)
    const [user,loading,error] = useAuthState(auth)
    const formatedDate = format(date,"PP") 
    

  


    // useEffect(()=>{
    //     fetch(`https://floating-bayou-18432.herokuapp.com/availableslots?date=${formatedDate}`)
    //     .then(res=> res.json())
    //     .then(data => setServices(data))
    // },[formatedDate])

  const { data:services,isLoading,refetch } =  useQuery(["available",formatedDate],()=> fetch(`https://floating-bayou-18432.herokuapp.com/availableslots?date=${formatedDate}`).then(res=> res.json()))

  if(isLoading){
      return <h1 className='text-center my-5'>Loading...</h1>
  }

    const HandleBookingForm = (e)=> {
        e.preventDefault()
        const date = e.target.date.value
        const slot = e.target.slot.value
        const name = e.target.name.value
        const phone = e.target.phone.value
        const email = e.target.email.value
        const price = e.target.price.value

        const booking = {
            treatmentId:treatment._id,
            name:treatment.name,
            patientName:name,
            date:date,
            slot:slot,
            email:email,
            phone:phone,
            price:price

        }


        fetch("https://floating-bayou-18432.herokuapp.com/booking",{
            method:"POST",
            headers:{
                "Content-Type": "Application/json"
            },
            body:JSON.stringify(booking)
        })
        .then(res=> res.json())
        .then(data=> {
            if(data.success){
                toast.success(`Your appointment set on ${slot} at ${date}`)

            }else{
                toast.error(`Already you have an appointment on ${treatment.name} at ${date}`)
            }
            console.log(data);
        })

        // console.log(date,slot,name,phone,email,booking);
         setTreatment(null)
         refetch()

    }
    return (
        <div className='px-6 mx-auto'>
            <h4 className='text-2xl text-center text-secondary mb-24 mt-4 mx-6'>Available Appointments on {date?format(date,"PP") : ""}</h4>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service=> <AvailableAppointmentCard setTreatment={setTreatment} key={service._id} service={service}></AvailableAppointmentCard>)
                }
                
                
            </div>
            {
                treatment && <Modal treatment={treatment}  date={date} HandleBookingForm={HandleBookingForm}></Modal>
            }
            
        </div>
    );
};

export default AvailableAppointments;