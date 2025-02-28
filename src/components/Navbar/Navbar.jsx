import React from 'react'
import { IoFastFoodSharp } from "react-icons/io5";import {MdMenu, MdOutlineImportContacts, MdOutlineShoppingCart} from 'react-icons/md';
import ResponsiveMenu from './ResponsiveMenu';

const NavbarMenu = [
    { id: 1, title: "Home", link: "#home" },
    { id: 2, title: "About", link: "#about" },
    { id: 3, title: "Menus", link: "#menus" },
    { id: 4, title: "Order", link: "#menus" },
    { id: 5, title: "Contact", link: "#contact" },
  ];
  
  const Navbar = () => {
    const[open,setOpen]=React.useState(false);
    return (
        <>
      <nav>
        <div className="container flex justify-between items-center py-4 md:pt-4">
          {/* Logo */}
          <div className="text-4xl flex items-center gap-2 font-bold uppercase">
            <p className="text-primary font-averia">Tasty</p>
            <p className="text-secondary font-averia">Cart</p>
            <IoFastFoodSharp className="text-primary" />
          </div>
  
          {/* Menu */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-gray-600 text-xl">
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className="inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_ef4444] font-semibold"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
              <button className="text-4xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
                <MdOutlineShoppingCart />
              </button>
            </ul>
          </div>

            {/* mobile menu section */}
            <div className='md:hidden' onClick={()=>
                setOpen(!open)
 
            }> 
                <MdMenu className='text-4xl'/>
            </div>
        </div>
    </nav>

    {/* mobile menu section */}
    <ResponsiveMenu open={open}  />
</>  )

}


export default Navbar;
