"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
  const { data: session } = useSession()
  const [showdropdown, setshowdropdown] = useState(false)

  return (
    <nav className='bg-gray-900 shadow-lg shadow-white text-white flex justify-between items-center px-4 md:h-16 flex-col md:flex-row'>
      <Link className='logo font-bold text-lg flex justify-center items-center' href="/">
        <img className='bg-slate-200 rounded-full w-9 mx-2' src='/tea.gif' width={44} alt='' />
        <span className='text-xl md:text-2xl my-3'>Get Me a Chai!</span>
      </Link>
      <div className='relative flex flex-col md:block gap-2'>
        {session && <>
          <button onClick={()=>setshowdropdown(!showdropdown)} onBlur={()=>{setTimeout(()=>{setshowdropdown(false)},300)}} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="mx-4 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">{session.user.email}<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
          </svg>
          </button>

          <div id="dropdown" className={`z-10 ${showdropdown?"":"hidden"} absolute left-[115px] my-2 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700`}>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li>
                <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
              </li>
              <li>
                <Link href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
              </li>
              
              <li>
                <Link href="/login" onClick={()=>signOut()} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
              </li>
            </ul>
          </div></>
        }
        {session && <Link href={"/login"}>
          <button onClick={() => signOut()} type="button" className="w-full mb-4 md:mb-0 md:w-auto text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center me-2">Logout</button>
          </Link>
        }
        {!session && <Link href={"/login"}>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center me-2">Login</button>
        </Link>}
      </div>
    </nav>
  )
}

export default Navbar