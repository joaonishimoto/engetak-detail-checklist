import LoginButton from "@/components/login-button";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";
import { authOptions } from "../lib/auth";

export default async function LoginPage() {
  const session = await getServerSession(authOptions)

  if(session) {
    return redirect('/parts')
  }

  return (
    <div className="w-full h-screen flex items-center justify-center bg-teal-950">
      <div className="px-2 pb-10 rounded-2xl shadow-[10px_10px_30px_1px_rgba(0,0,0,0.3)] z-10 bg-white">
        <Image src="/engetak.png" alt="" width={500} height={500} className="mx-auto -mb-7 h-72 w-72"/>
        <LoginButton />
      </div>
    </div>
  )
}