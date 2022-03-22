import React from 'react';
import './style.css'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Table from './components/Table.js'

export default function App() {

  const [formData, setFormData] = useState({
    Title:"",
    Name: "",
    Email: "",
    PhoneNumber: ""
  })

  const { register, handleSubmit, formState: { errors } } = useForm();
  // const onSubmit = data => console.log(data);
  const onSubmit = data => setFormData({
    Title: `${data.Title}`,
    Name: `${data.firstName} ${data.lastName}`,
    Email: `${data.Email}`,
    PhoneNumber: `${data.mobileNumber}`
  })


  console.log(errors);

  return (
    <>
      <div className="details">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="">
            First Name:
            <input type="text" placeholder="First Name" {...register("firstName", { required: true, maxLength: 80 })} />
          </label>
          <label className="">
            Last Name:
            <input type="text" placeholder="Last Name" {...register("lastName", { required: true, maxLength: 100 })} />
          </label>
          <label className="">
            Email:
            <input type="email" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
          </label>
          <label className="">
            Mobile Number
            <input type="tel" placeholder="Mobile Number" {...register("mobileNumber", { required: true, minLength: 6, maxLength: 12 })} />
          </label>
          <select {...register("Title", { required: true })}>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Miss">Miss</option>
            <option value="Dr">Dr</option>
          </select>

          <input {...register("Developer", { required: true })} type="radio" value="Yes" />
          <input {...register("Developer", { required: true })} type="radio" value="No" />

          <input type="submit" />
        </form>
      </div>
<Table formData = {formData}/>


    </>
  );
}