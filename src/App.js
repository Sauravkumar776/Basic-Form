import React from 'react';
import './style.css'
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function App() {

  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    PhoneNumber: ""
  })


  const { register, handleSubmit, formState: { errors } } = useForm();
  // const onSubmit = data => console.log(data);
  const onSubmit = data => setFormData({
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
            <input type="text" placeholder="firstName" {...register("firstName", { required: true, maxLength: 80 })} />
          </label>
          <label className="">
            Last Name:
            <input type="text" placeholder="lastName" {...register("lastName", { required: true, maxLength: 100 })} />
          </label>
          <label className="">
            Email:
            <input type="email" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
          </label>
          <label className="">
            Mobile Number
            <input type="tel" placeholder="mobileNumber" {...register("mobileNumber", { required: true, minLength: 6, maxLength: 12 })} />
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
      <div className="table">
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>PhoneNumber </th>
          </tr>
          <tr>
            <td>{formData.Name}</td>
            <td>{formData.Email}</td>
            <td>{formData.PhoneNumber}</td>
          </tr>
        </table>
      </div>
    </>
  );
}