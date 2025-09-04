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
      <h1 className="text-2xl">Congrats, Jonathan Kristof! Your ticket is ready</h1>
      <p>We've emailed your ticket to <span>jonatan@email.com</span> and will send updates in the run up to the event</p>
    </div>
 )

};