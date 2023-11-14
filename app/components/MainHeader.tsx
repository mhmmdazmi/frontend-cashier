import React from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

const MainHeader = () => {
  return (
    <div className="bg-white flex justify-between items-center px-4 h-12 mb-4">
        <div>Brand</div>
        <div>
          <FaBars className="cursor-pointer"/>
          </div>
    </div>
  )
}

export default MainHeader