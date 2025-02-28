import React from 'react';
import {FaFacebook ,FaTwitter,FaInstagram} from "react-icons/fa";
import { IoFastFoodSharp } from "react-icons/io5";
import {motion} from "framer-motion";
export const Footer = () => {
  return (
    <footer className='bg-primary/10  py-12 mt-12'>
        <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
    transition={{ duration: 1,delay: 0.2 }}
         className='container flex justify-between items-center '>
            {/* log section */}
             <div className='text-4xl flex items-center gap-2 font-bold uppercase'>
                            <p className='text-primary font-averia '>Tasty</p>
                            <p className='text-secondary font-averia'>Cart</p>
                            <IoFastFoodSharp className='text-primary' />
                        </div>
{/* social section*/}
<div className='text-3xl flex items-center gap-4 mt-6 text-gray-700'>
    <FaInstagram/>
    <FaTwitter/>
    <FaFacebook/>
    
</div>
        </motion.div>
    </footer>
  );
};
export default Footer;
