import React from 'react'

const navItems = [
  { label: "About Me" },
  { label: "Projects" },
  { label: "Achievements" },
  { label: "Services" },
  { label: "Contact" }
]

const Navbar = () => {
  return (
    <nav className='border-b bg-white'>
      {navItems.map(item => {
        <div key={item.label}>
          {item.label}
        </div>
      })}
    </nav>
  )
}

export default Navbar