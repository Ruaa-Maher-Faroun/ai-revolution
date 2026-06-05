import  { useState } from 'react'
const links = [
  { name: "Home", href: "#home" },
  { name: "AI Types", href: "#types" },
  { name: "Benefits", href: "#benefits" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [mobileMenuOpen,setMobileMenuOpen] = useState(false);
  return (
    <nav className='bg-white/80 backdrop-blur-md shadow-sm fixed w-full z-50'>

      <div className="app-container flex justify-between items-center h-16">
        {/* logo */}
        <span className='gradient-text text-2xl font-bold'>AI Revolution</span>
        {/* desktop links */}
        <div className="hidden md:flex items-center space-x-8">
         {
            links.map((link) => {
              return (<a key={link.name} className='nav-item' href={link.href}>
                {link.name}
              </a>)
            })
          }
          <a href="#" className='nav-btn'>Get Started</a>
        </div>
        {/* Mobile Menu btn */}
        <button onClick={()=>{setMobileMenuOpen((prev)=>!prev)}} 
        className='md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none
          '>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      {
        // mobile menu
        mobileMenuOpen && (
          <div className="md:hidden
           bg-white shadow-lg rounded-b-lg px-2 pt-2 space-y-1">
             {
            links.map((link) => {
              return (<a key={link.name} className='mobile-nav-item' href={link.href}>
                {link.name}
              </a>)
            })
          }
          </div>
        )}
    </nav>
  )
}

export default Navbar
