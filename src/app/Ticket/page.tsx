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
      <div className="md:w-[50%] pt-6 mb-4 flex items-center flex-col justify-center">
        <h1 className="text-2xl  md:text-5xl text-[hsl(0,0%,100%)] font-bold">
          Congrats, 
          <span 
          className="bg-gradient-to-r from-[hsl(7,88%,67%)] to-[hsl(252,6%,83%)] bg-clip-text text-transparent">
            Jonathan <span className="bg-gradient-to-r from-[hsl(7,88%,67%)] to-[hsl(252,6%,83%)] bg-clip-text text-transparent">Kristof!</span>
          </span> 
          Your ticket is ready.
        </h1>
        <p className="md:w-[50%] pt-6">
          We ve emailed your ticket to <span className="text-[hsl(7,88%,67%)]">
            jonatan@email.com </span> 
          and will send updates in the run up to the event.
        </p>

        <div className="relative mx-auto max-w-sm sm:max-w-md">
          <Image
            src="/images/pattern-ticket.svg"
            alt="Ticket"
            width={400}
            height={300}
            className="w-full h-auto pt-10"
          />
          <div className="absolute inset-0 flex flex-col items-start ml-4 pt-[calc(17%)] sm:pt-[calc(15%)]">
            <div className="w-4/5 flex items-center gap-4">
             <Image
               src="/images/logo-mark.svg"
               alt="Ticket Full"
               width={30}
               height={30}
               className="shrink-0"
              />
              <div className="flex flex-col items-start text-white">
                <p className="font-bold text-xl leading-tight">Coding Conf</p>
                <p className="text-[12px] md:text-sm">Jan 31, 2025 / Austin, TX</p>
              </div>
            </div>

            <div className="w-4/5 flex items-center gap-4 pt-8 sm:pt-10">
              <Image
                src="/images/logo-mark.svg"
                alt="Ticket Full"
                width={30}
                height={30}
                className="shrink-0"
              />
              <div className="flex flex-col items-start text-white">
                <p className="font-bold text-xl leading-tight">Coding Conf</p>
                <p className="text-[12px] md:text-sm">Jan 31, 2025 / Austin, TX</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 )

};