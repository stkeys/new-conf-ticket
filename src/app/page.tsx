'use client';
import Image from "next/image";

export default function Home() {
  const bgColored = {
    backgroundImage: "url('./images/background-mobile.png')"
  }
  return (
    <div style={bgColored} className=" bg-cover bg-center  min-h-screen flex flex-col items-center text-center px-4">
      <Image 
        src="/images/logo-full.svg" 
        alt="Logo" 
        width={150} 
        height={80} 
        className="mx-auto pt-10"
      />
      <div className="md:w-[50%]">
        <h1 className="text-2xl md:text-4xl text-[hsl(0,0%,100%)] font-bold py-6">Your Journey to Coding Conf 2025 Starts Here!</h1>
        <p></p>
      </div>
      
    </div>
  );
}
