import React from 'react'
import Link from "next/link";
import MainHeader from './MainHeader'

import { AiOutlineHome } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { FaAngleRight, FaCheck, FaCheckDouble } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { SiHelpscout } from "react-icons/si";
import { BiCategoryAlt } from "react-icons/bi";

const MainLayout = ({children } : {children: React.ReactNode}) => {
  return (
    <div className='bg-gray-100 w-full min-screen'>
        <MainHeader/>
        <div className="flex justify=start items-start">
          <aside className="bg-white rounded-lg w-60 p-4">
          <ul>
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
              <AiOutlineHome className="mr-2"/>
              <Link href="/">Home</Link>
            </li>
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
              <BiCategoryAlt className="mr-2"/>
              <Link href="/category">Category</Link>
            </li>
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
              <GrProjects className="mr-2"/>
              <h3 className="flex-1">Projects</h3>
              <FaAngleRight />
            </li>
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
              <FaCheck className="mr-2"/>
              <h3 className="flex-1">Singule</h3>
              <FaAngleRight />
            </li>
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
              <FaCheckDouble className="mr-2"/>
              <h3 className="flex-1">Complex</h3>
              <FaAngleRight />
            </li>
            <li className="flex justify-start items-center hover:bg-green-200 hover:text-green-800 rounded-xl p-2">
              <SiHelpscout className="mr-2"/>
              <Link href="/about">About us</Link>
            </li>
            <li className="flex justify-start items-center hover:bg-orange-200 hover:text-orange-800 rounded-xl p-2">
              <FiPhoneCall className="mr-2"/>
              <Link href="/contact">Contact us</Link>
            </li>
          </ul>
          </aside>
        <main className="flex-1">{children}</main>
        </div>
    </div>
  )
}

export default MainLayout