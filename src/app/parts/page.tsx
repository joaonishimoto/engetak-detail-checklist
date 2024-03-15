import { database } from "@/database/database";
import Image from "next/image";
import Link from "next/link";

export default function Page() {

  return (
    <div className="min-h-screen grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 bg-teal-950 text-white ">
      {database?.map((item, index) => (
        <div key={index} className="flex justify-center mt-10">
          <div className="size-40 flex items-center justify-center text-center ">
            <Link  href={`/parts/${item.name}`} className="hover:-translate-y-2 transition-all duration-500">
              <div className="size-32 bg-white rounded-full m-auto mb-3">
                <Image src="" alt=""/>  
              </div>
              <h1 className="text-lg">
                {item.name}
              </h1>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}