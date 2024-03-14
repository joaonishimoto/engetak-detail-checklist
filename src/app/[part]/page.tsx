'use client'

import Image from "next/image";

import { useState, useEffect } from "react"

import * as image from '@/database/exports';

import { database } from "@/database/database"
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import Link from "next/link";
import { Props } from "@/components/Detail/props";

interface PartProps {
  params: {
    part: string
  }
}


export default function Page(props: PartProps) {
  const [slide, setSlide] = useState(-1)

  const urlPart = props.params.part
  const curPart = database.find(item => item.name === urlPart)

  if (!curPart) {
    return(null)
  }

  const checklistPartLength = curPart.checklist.length

  if (!checklistPartLength) {
    return(null)
  }

  return (
    <main className=" bg-white text-teal-950 flex flex-col items-center justify-around h-screen overflow-hidden">
      <div className="flex items-center justify-between text-center font-semibold h-10 w-screen">
        <div></div>
        <div  className="text-3xl ml-40 border-b-2 border-teal-950/50 py-1">
          {(
            slide > -1 
          ) ? (
            curPart.checklist[slide].title
          ) : (
            null
          )}
        </div>
          <Link href={`/${urlPart}/props`} 
          className="group mr-2 flex items-center justify-center px-2 py-2 rounded-md font-bold
        bg-zinc-200/70 hover:bg-teal-800 text-teal-800 hover:text-white transiton-all duration-500">
            <p className="">propriedades</p> 
            <ArrowRightCircle className="ml-2 group-hover:rotate-[360deg] trasition-all duration-500 "/>
          </Link>
      </div>
      
      <div className="flex items-center justify-center w-[calc(100%-20%)] h-[80vh]">
        <button
        disabled={slide === -1}
          onClick={() => slide > -1 ? setSlide(slide - 1) : null} 
          className="text-3xl font-bold pr-10 text-zinc-700">
          <ArrowLeftCircle size={30} className={`${slide === -1 ? 'text-zinc-300' : 'hover:-translate-x-1 transition-all duration-500 hover:text-zinc-950'}`} />
        </button>
        <div className="flex items-center justify-center
        bg-teal-950 w-full h-full rounded-2xl shadow-[10px_10px_30px_5px_rgba(0,0,0,0.5)]">
          {slide < 0 ? (
            <Props urlPart={urlPart}/>
          ) : (
            <Image
            src={image[`esquadreta${slide}` as keyof typeof image]}
            alt=""          
            style={{objectFit: "contain"}} 
            className=""
          />
          )}

        </div>
        <button 
          disabled={slide === checklistPartLength - 1}
          onClick={() => slide < checklistPartLength - 1 ? setSlide(slide + 1) : null}
          className="text-3xl font-bold pl-10 text-zinc-700">
          <ArrowRightCircle size={30} className={`${slide === checklistPartLength - 1 ? 'text-zinc-300' : 'hover:translate-x-1 transition-all duration-300 hover:text-zinc-950'}`}  />
        </button>
      </div>
      <div className="flex items-center justify-center h-20">
        <h2 className="">
        {slide>-1?curPart.checklist[slide].desc:""}
        </h2>
      </div>
    </main>
  );
}
