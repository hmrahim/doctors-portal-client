import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,reset
  } = useForm();

  const { data, isLoading } = useQuery(
    "services",()=>fetch("https://floating-bayou-18432.herokuapp.com/services").then((res) => res.json())
  );
  

  if (isLoading) {
    return (
      <div className="flex justify-center mt-11 items-center w-2/4 mx-auto">
        <button className="btn loading text-center">loading</button>
      </div>
    );
  }


  const onSubmit =(data) => {
    const imgStorageApi = "a0b61585518b988325a474e5f872850f"
    const url = `https://api.imgbb.com/1/upload?key=${imgStorageApi}`
    const image = data.image[0]
    const formData = new FormData()
    formData.append("image",image)
    fetch(url,{
      method:"POST",
      body:formData
    })
    .then(res=> res.json())
    .then(result=> {
      console.log("imgbburl",result.data.url);
      const doctorsData = {
        name:data.name,
        email:data.email,
        spaciality:data.spaciality,
        image:result.data.url
      }
      fetch("https://floating-bayou-18432.herokuapp.com/doctors",{
        method:"POST",
        headers:{
          "content-type": "application/json",
          "authorization":`bearer ${localStorage.getItem("token")}`
        },
        body:JSON.stringify(doctorsData)
      })
      .then(res=>res.json())
      .then(resData=> {
        toast.success("Doctor added succesfully!")
        reset()
      })
    })
  };

  return (
    <div className="w-2/5 mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Doctors name"
            className="input input-bordered w-full "
            {...register("name", {
              required: {
                value: true,
                message: "Doctors name is required",
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
            })}
          />
          <label className="label">
            {errors.email?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Spaciality</span>
          </label>

          <select
            {...register("spaciality")}
            class="select select-bordered w-full "
          >
            <option disabled selected>
              Who shot first?
            </option>
            {
             data.map(data=><option key={data._id} value={data.name}>{data.name}</option>)
           }
          </select>
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="file"
           
            className="input input-bordered w-full "
            {...register("image", {
              required: {
                value: true,
                message: "Image is required",
              },
            })}
          />
          <label className="label">
            {errors.image?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.image.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-accent">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddDoctor;
