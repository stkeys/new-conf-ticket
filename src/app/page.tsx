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
        <h1 className="text-2xl md:text-4xl text-[hsl(0,0%,100%)] font-bold pt-6">Your Journey to Coding Conf 2025 Starts Here!</h1>
        <p className="pt-2 text-[hsl(252,6%,83%)]">Secure your spot at next year's biggest coding conference</p>
      </div>
      <div className="flex items-start flex-col w-full md:w-[50%] pt-4">
        <p className="text-[hsl(0,0%,100%)] ">Upload Avatar</p>
        <div className="bg-[hsl(245, 19%, 35%)] h-40 w-full border border-dashed border-white">

        </div>
      </div>
    </div>
  );
}
