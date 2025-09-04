'use client';
import  FormData  from '@/types/form';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Form() : React.ReactElement {

  const router = useRouter();
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
    router.push('/ticket');

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
        <label className='mb-2 text-[hsl(252,6%,83%)]'>Full Name</label>
        <input 
          type="text" 
          name="fullName" 
          value={formData.fullName} 
          onChange={handleChange} 
          className='bg-[hsl(248,70%,10%)] w-full border outline-none px-3 py-2 rounded-md focus:border-white border-[hsl(245,19%,35%)]'
        />
        {errors.fullName && <span className="text-red-500 text-sm">{errors.fullName}</span>}
      </div>

      <div className="flex flex-col items-start mb-4 ">
        <label className='mb-2 text-[hsl(252,6%,83%)]'>Email Address</label>
        <input 
          type="text" 
          name="fullName" 
          value={formData.email} 
          onChange={handleChange} 
          className='bg-[hsl(248,70%,10%)] w-full border outline-none px-3 py-2 rounded-md border-[hsl(245,19%,35%)]'
        />
        {errors.fullName && <span className="text-red-500 text-sm">{errors.fullName}</span>}
      </div>

      <div className="flex flex-col items-start mb-4 ">
        <label className='mb-2 text-[hsl(252,6%,83%)]'>Github Username</label>
        <input 
          type="text" 
          name="fullName" 
          value={formData.githubUsername} 
          onChange={handleChange} 
          className='bg-[hsl(248,70%,10%)] w-full border outline-none px-3 py-2 rounded-md border-[hsl(245,19%,35%)]'
        />
        {errors.fullName && <span className="text-red-500 text-sm">{errors.fullName}</span>}
      </div>
      <button
      type='submit'
      className='w-full bg-[hsl(7,71%,60%)] text-black rounded-md py-2'> 
       Generate my Ticket
      </button>
    </form>
  );  
}