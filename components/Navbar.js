import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-gray-900 shadow-lg shadow-white text-white flex justify-between items-center px-4 h-16'>
        <div className='logo font-bold text-lg flex justify-center items-center'>
          <img src='/tea.gif' width={44} alt=''/>
          <span>Get Me a Chai!</span>
        </div>
        <ul className='flex justify-between gap-4'>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Sign Up</li>
            <li>Login</li>
        </ul>
    </nav>
  )
}

export default Navbar