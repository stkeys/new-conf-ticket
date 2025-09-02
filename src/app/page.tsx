'use client';
import Image from "next/image";

export default function Home() {
  const bgColored = {
    backgroundImage: "url('./images/background-mobile.png')"
  }
  return (
    <div style={bgColored} 
      className=" bg-cover bg-center  min-h-screen flex flex-col items-center text-center px-4">
      <Image 
        src="/images/logo-full.svg" 
        alt="Logo" 
        width={150} 
        height={80} 
        className="mx-auto pt-10"
      />
      <div className="md:w-[50%]">
        <h1 className="text-2xl md:text-5xl text-[hsl(0,0%,100%)] font-bold pt-6">
          Your Journey to Coding Conf 2025 Starts Here!
        </h1>
        <p className="pt-2 text-[hsl(252,6%,83%)]">
          Secure your spot at next years biggest coding conference
        </p>
      </div>
      <div className="flex items-start flex-col w-full md:w-[30%] pt-4 h-40  mx-auto">
        <p className="text-[hsl(0,0%,100%)] ">Upload Avatar</p>
        <div className="bg-[hsl(248,70%,10%)] h-40 w-full border border-dashed rounded-lg border-white">
          <div className="flex items-center justify-center flex-col pt-4">
            <Image 
              src="/images/icon-upload.svg" 
              alt="Icon Upload" 
              width={40} 
              height={40} 
              className=""
            />
            <p className="text-[hsl(252,6%,83%)] ">
              Drag and drop or click to upload
            </p>
          </div>
        </div>
        <div className="flex pt-2 gap-2">
          <Image 
            src="/images/icon-info.svg" 
            alt="Icon info" 
            width={15} 
            height={15} 
            className=""
          />
          <p className="text-[10px] sm:text-sm ">
            upload your photos (JPG or PNG), max size: 500kb
          </p>
        </div>
      </div>
    </div>
  );
}
