'use client';
import  FormData  from '@/types/form';
import { useState } from 'react';

export default function Form() : React.ReactElement {
  const [ formData, setFormData ] = useState<FormData>({
    fullName: '',
    email: '',
    githubUsername: '',
  });

  const [ errors, setErrors ] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) newErrors.email = "Valid email is required";
    if (!formData.githubUsername.trim()) newErrors.githubUsername = "Github username is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;  
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      // Handle form submission logic here
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="mt-10 w-full">
      <div className="flex flex-col items-start mb-4 ">
        <label className='mb-2 '>Full Name</label>
        <input 
          type="text" 
          name="fullName" 
          value={formData.fullName} 
          onChange={handleChange} 
          className='w-full'
        />
        {errors.fullName && <span className="text-red-500 text-sm">{errors.fullName}</span>}
      </div>

      <div className="flex flex-col items-start mb-4 ">
        <label className='mb-2 '>Email Address</label>
        <input 
          type="text" 
          name="fullName" 
          value={formData.email} 
          onChange={handleChange} 
          className='w-full'
        />
        {errors.fullName && <span className="text-red-500 text-sm">{errors.fullName}</span>}
      </div>

      <div className="flex flex-col items-start mb-4 ">
        <label className='mb-2 '>Github Username</label>
        <input 
          type="text" 
          name="fullName" 
          value={formData.githubUsername} 
          onChange={handleChange} 
          className='w-full'
        />
        {errors.fullName && <span className="text-red-500 text-sm">{errors.fullName}</span>}
      </div>
      <button
      type='submit'
      className='w-full '> 
       Generate my Ticket
      </button>
    </form>
  );  
}