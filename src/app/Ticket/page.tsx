'use client';
import Image from "next/image";

export default function Ticket() : React.ReactElement {
  const bgColored = {
    backgroundImage: "url('./images/background-mobile.png')"
  }
 return ( 
    <div style={bgColored}
    className="w-full min-h-screen flex flex-col items-center text-center px-4 overflow-x-hidden">
      <div>
        <Image 
          src="/images/logo-full.svg" 
          alt="Logo" 
          width={150} 
          height={80} 
          className="mx-auto pt-10"
        />
      </div>
      <div className="md:w-[50%] pt-6 mb-4">
        <h1 className="text-2xl  md:text-5xl text-[hsl(0,0%,100%)]">
          Congrats, 
          <span 
          className="bg-gradient-to-r from-[hsl(7,88%,67%)] to-[hsl(252,6%,83%)] bg-clip-text text-transparent">
            Jonathan <span className="bg-gradient-to-r from-[hsl(7,88%,67%)] to-[hsl(252,6%,83%)] bg-clip-text text-transparent">Kristof!</span>
          </span> 
          Your ticket is ready
        </h1>
        <p>
          We ve emailed your ticket to 
          <span className="text-[hsl(7,88%,67%)]">
            jonatan@email.com
          </span> 
          and will send updates in the run up to the event
        </p>
      </div>
      
    </div>
 )

};