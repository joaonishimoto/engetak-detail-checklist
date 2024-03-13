'use client'

import Image from "next/image";
import { useState } from "react"

export default function Home() {

  const [slide, setSlide] = useState(0);
  const [slideLength, setSlideLength] = useState(10)

  return (
    <main className=" bg-white text-teal-950 flex flex-col items-center justify-between h-screen">
      <div className="flex items-center justify-center font-semibold h-20">
        <h1 className="text-3xl">
          SLIDE {slide}
        </h1>
      </div>
      <div className="flex items-center justify-center w-[calc(100%-20%)]  h-[80vh]">
        <button
          onClick={() => slide > 0 ? setSlide(slide - 1) : null} 
          className="text-3xl font-bold pr-10">
          {"<"}
        </button>
        <Image
          src=""
          alt=""          
          className="bg-teal-950 w-full h-full rounded-2xl shadow-[10px_10px_30px_5px_rgba(0,0,0,0.5)]"
        />
        <button 
          onClick={() => slide < slideLength ? setSlide(slide + 1) : null}
          className="text-3xl font-bold pl-10">
          {">"}
        </button>
      </div>
      <div className="flex items-center justify-center h-20">
        <h2 className="">
          DESCRIPTION {slide}
        </h2>
      </div>
    </main>
  );
}
