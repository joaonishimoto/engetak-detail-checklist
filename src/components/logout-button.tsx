'use client'

import { signOut } from "next-auth/react";
import { FaGithub } from "react-icons/fa";

export default function LogoutButton() {
  function handleClick() {
    signOut()
  }

  return (
    <button
      onClick={handleClick}
      className="bg-black text-white flex items-center mx-auto mt-24 px-6 py-3 gap-3 rounded-lg"
    >
    logout
  </button>
  )
}