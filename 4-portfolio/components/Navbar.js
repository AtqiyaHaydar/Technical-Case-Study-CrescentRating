import React from 'react'

const navItems = [
  { label: "ABOUT ME" },
  { label: "PROJECTS" },
  { label: "ACHIEVEMENTS" },
  { label: "SERVICES" },
  { label: "CONTACT" }
]

const Navbar = () => {
  return (
    <nav className='hidden md:flex bg-white'>
      <ul className='flex wrapper py-6 text-black font-bold w-full justify-center items-center gap-x-12'>
        {navItems.map((item, index) => {
          return (
            <li key={index}>
              {item.label}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar