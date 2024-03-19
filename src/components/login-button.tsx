'use client'

import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";

export default function LoginButton() {
  function handleClick() {
    signIn('github')
  }

  return (
    <button
      onClick={handleClick}
      className="bg-black text-white flex items-center mx-auto px-6 py-3 gap-3 rounded-lg"
    >
    <FaGithub />
    login com github
  </button>
  )
}