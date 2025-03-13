import { useState } from "react";
import { NavLink } from "react-router-dom"
useState
export function Navbar() {
  const [scroll, setscroll] = useState(true)
  const [padding, setpadding] = useState(8)
window.addEventListener("scroll", function handleScroll() {
    if (this.scrollY > 50) {
      setscroll(false)
    } else{
      setscroll(true)
    }
});
    return (
   <nav className={`${scroll ? "py-8" : "py-4" }  duration-500 bg-second border-gray-200 fixed w-full z-50 px-4 `}>
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
      <span className="self-center whitespace-nowrap text-slate-50 uppercase font-bold text-3xl">Start Framework</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
      </svg>
    </button>
    <div  className=" hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className=" font-medium flex flex-col md:items-center p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
        <li >
          <NavLink to="/About" className="w-fit block py-2 px-3 text-slate-50 rounded-sm  md:border-0 md:p-0 uppercase font-bold">About</NavLink>
        </li>
        <li >
          <NavLink to="/Portfolio" className="w-fit block py-2 px-3 text-slate-50 rounded-sm  md:border-0 md:p-0 uppercase font-bold">Portfolio</NavLink>
        </li>
        <li >
          <NavLink to="/Contact" className=" w-fit block py-2 px-3 text-slate-50 rounded-sm md:border-0 md:p-0 uppercase font-bold">Contact</NavLink>
        </li>

      </ul>
    </div>
  </div>
</nav>

// 
    )
}