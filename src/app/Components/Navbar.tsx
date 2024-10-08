import React from 'react'
import { ImEllo } from "react-icons/im";
import Link from 'next/link'
const Navbar = () => {
  return (
<nav className="px-60 flex items-center justify-between">
<div>
    <img src="/logopin.png" className="h-20 w-50 cursor-pointer" alt="logo"/>
    </div>
<ul className="flex justify-space space-x-14 pr-6">

    <Link href="/login">
    <li className="cursor-pointer font-semibold px-5 py-2 flex items-center mx-auto space-x-2 border border-black rounded-full border-2 select-none">
        <span>Login</span>
        <ImEllo className="text-xl"/>
    </li>
    </Link>
   
    <Link href="/signup">
    <li className="cursor-pointer font-medium text-white border border-blue-500 px-5 py-2 bg-blue-500 rounded-full flex items-center space-x-2 select-none">
        <span>Sign up</span>
        <ImEllo className="text-xl" />
    </li>
    </Link>
    </ul>
    </nav>
  )
}

export default Navbar 