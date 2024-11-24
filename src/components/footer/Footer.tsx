import React from "react";
import logo from "../../images/footerLogo.png";

import { Facebook, Instagram, Mail } from "lucide-react";
export default function Footer() {
  return (
    <div className='bg-primary-300 h-32 flex items-center justify-center   text-gray-800 '>
      <div className='md:container  flex justify-evenly md:gap-0 gap-4 '>
        <figure className='md:w-32 md:h-30 w-24 h-24 flex items-center '>
          <img src={logo} alt='logo' />
        </figure>
        <div className='text-center my-auto '>
          <p className='mb-2'>تواصل معنا </p>
          <ul className='flex gap-2'>
            <li>
              <a href='https://www.facebook.com/'>
                <Facebook />
              </a>
            </li>
            <li>
              <a href='https://www.instagram.com/'>
                <Instagram />
              </a>
            </li>
            <li>
              <a href='mailto:example@gmail.com'>
                <Mail />
              </a>
            </li>
          </ul>
        </div>
        <p className='my-auto'>جميع الحقوق محفوظة &copy;</p>
      </div>
    </div>
  );
}
