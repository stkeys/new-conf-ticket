'use client';
import Image from "next/image";

export default function Home() {
  const bgColored = {
    backgroundImage: "url('./images/background-mobile.png')"
  }
  return (
    <div style={bgColored} className="font-inconsolata bg-cover bg-center w-full min-h-screen ">
      <h1>Coook my meal</h1>
    </div>
  );
}
