"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

const Navbar = () => {
  const { data: session } = useSession()
  if(session) {
    return <>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  }
  return (
    <nav className='bg-gray-900 shadow-lg shadow-white text-white flex justify-between items-center px-4 h-16'>
      <div className='logo font-bold text-lg flex justify-center items-center'>
        <img className='bg-slate-200 rounded-full w-9 mx-2' src='/tea.gif' width={44} alt='' />
        <span>Get Me a Chai!</span>
      </div>
      <div>
        <Link href={"/login"}>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center me-2">Login</button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar