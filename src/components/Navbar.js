import React from 'react'
import NavLink from './NavLink'
import Link from 'next/link'

function Navbar() {
  return (
    <>
      <div className=' hidden sm:flex sm:px-4 md:px-8 lg:px-12 xl:px-16 justify-between h-16 items-center'>
        <h2 className='text-4xl text-white'>trxvl.</h2>
        <div className=' flex gap-6 text-gray-300 items-center'>
          <NavLink href='/' className=''>Home</NavLink>
          <NavLink href='/stays'>Stays</NavLink>
          <NavLink href='/flights'>Flights</NavLink>
          <NavLink href='/packages'>Packages</NavLink>
          <Link href='/signup' className=' text-lg'>Sign Up</Link>
        </div>
      </div>

      <div className=' flex justify-start pl-[5vw] items-center sm:hidden py-2'>
        <h2 className=' text-2xl text-white'>trxvl.</h2>
      </div>
    </>
  )
}

export default Navbar