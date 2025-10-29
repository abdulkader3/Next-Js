'use client'
import Link from 'next/link.js'
import Image from "next/image";
import React from 'react'
import logo from '../../../public/Logo.png'
import { IoIosArrowDown } from 'react-icons/io';
import Button from '../UI/Button.jsx';
import { title } from 'process';

const Navber = () => {
  return (
    <>


    <nav className='w-full flex justify-between items-center py-[33px] font-semibold '>
        <Link href={"/"} className="Logo">
            <Image 
                src={logo} 
                alt="Logo"
                width={150}
                height={50}
                priority
                className="object-contain"
            />
        </Link>
        <ul className='flex gap-8 items-center'>
            <li className='flex items-center gap-2'>
                <Link href={"/investment"} className="text-gray-700 hover:text-[#128C76] transition-colors"> 
                    Investment Opportunities
                </Link>
                <IoIosArrowDown />
            </li>
            <li className='flex items-center gap-2'>
                <Link href={"/how"} className="text-gray-700 hover:text-[#128C76] transition-colors"> 
                    How it works 
                </Link>

                <IoIosArrowDown />
            </li>
            <li>
                <Link href={"/about"} className="text-gray-700 hover:text-[#128C76] transition-colors"> 
                    About us 
                </Link>
            </li>
        </ul>

        <ul className='flex gap-4 items-center '>

            <Button path={"/login"} title={"Login"} />
            <Button path={"/register"} title={"Register"} />

        </ul>
    </nav>
      
    </>
  )
}

export default Navber
