import { database } from "@/database/database";
import Link from "next/link";

export default function Page() {

  return (
    <div className="min-h-screen flex items-center justify-center">
        <ul className="text-sm space-y-1">
          {database?.map((item, index) => (
            <li key={index}>
              <Link href={`/parts/${item.name}`} className="">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
    </div>
  )
}