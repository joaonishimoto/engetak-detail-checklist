'use client'

import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

export default function LogoutButton() {
  function handleClick() {
    signOut()
  }

  return (
    <button
      onClick={handleClick}
      className="h-5 w-5 text-white dark:text-zinc-400 transition-all curation-700 hover:scale-110"
    >
      <LogOut />
    </button>
  )
}