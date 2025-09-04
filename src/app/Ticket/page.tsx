'use client';

export default function Ticket() : React.ReactElement {
  const bgColored = {
    backgroundImage: "url('./images/background-mobile.png')"
  }
 return ( 
    <div style={bgColored}
    className="w-full min-h-screen flex flex-col items-center text-center px-4">
      <h1 className="text-2xl my-4">Ticket</h1>
      <p>Your form has been successfully submitted!</p>
    </div>
 )

};