'use client';
import Image from "next/image";

export default function Home() {
  const bgColored = {
    backgroundImage: "url('./images/background-mobile.png')"
  }
  return (
    <div style={bgColored} className="font-inconsolata bg-cover bg-center    w-full min-h-screen ">
      <Image 
        src="/images/logo-full.svg" 
        alt="Logo" 
        width={200} 
        height={100} 
        className="mx-auto pt-10"
      />
    </div>
  );
}
