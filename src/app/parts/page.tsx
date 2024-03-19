import Image from "next/image";
import Link from "next/link";

import { database } from "@/database/database";
import * as image from "@/database/exports";
import LogoutButton from "@/components/logout-button";



export default function Page() {


  return (
    <main className="min-h-screen bg-teal-950">
      <div className="fixed z-50 h-16 flex items-center justify-end border-b-2 w-full bg-teal-900 shadow-lg">
        <h2 className="mr-5"><LogoutButton /></h2>
      </div>
      <div
         className="h-[calc(100%-4rem)] text-white pt-20
        grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {database?.map((item, index) => (
          <div key={index} className="flex justify-center p-7">
            <div className="size-40 flex items-center justify-center text-center ">
              <Link  href={`/parts/${item.name}`} className="hover:-translate-y-2 transition-all duration-500">
                <div className="size-32 bg-white rounded-full m-auto mb-3">
                  <Image 
                    src={image[`${item.name}` as keyof typeof image]}
                    alt=""
                    className="rounded-full p-5"
                  />  
                </div>
                <h1 className="text-lg">
                  {item.nickname}
                </h1>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}