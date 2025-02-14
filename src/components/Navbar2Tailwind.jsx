'use client'
import React, { useState } from "react";
import { CiPlane } from "react-icons/ci";
import BonusModal from "./BonusModal";
import Megagames from './Megagames' 

const Navbar2Taiwind = () => {

    const [isMegaGamesOpen, setIsMegaGamesOpen] = useState(false);
    // const [isMegaGamesOpen, setIsMegaGamesOpen] = useState(true);
    const [isHovered, setIsHovered] = useState(false);

  return (
    <nav className="bg-blue-500 p-2">
      <ul className="flex items-center space-x-6 text-white">
        <li className="hover:text-gray-200 cursor-pointer">CRICKET</li>
        <li className="hover:text-gray-200 cursor-pointer">LIVE</li>
        <li className="hover:text-gray-200 cursor-pointer">SPORTS</li>
        <li className="flex items-center space-x-2">
          <span
           onMouseEnter={() => setIsHovered(true)}
           onMouseLeave={() => setIsHovered(false)}
          className="bg-red-600 px-3 py-1 rounded-md hover:bg-red-700">
          🔥 BONUSES

          </span>
         
        </li>
        {isHovered && (
            <BonusModal/>
            )}
        <li className="hover:text-gray-200 cursor-pointer">LIVE CASINO</li>
        <li className="hover:text-gray-200 cursor-pointer"> CASINO</li>
        <li className="hover:text-gray-200 cursor-pointer" 
             onMouseEnter={() => setIsMegaGamesOpen(true)}
             onMouseLeave={() => setIsMegaGamesOpen(false)}
        >MEGAGAMES


        </li>
        {isMegaGamesOpen && (
          //  <div>

          //   <div
          //   onMouseEnter={() => setIsMegaGamesOpen(true)}
          //    onMouseLeave={() => setIsMegaGamesOpen(false)}
          //    className="absolute z-50 top-[100px] left-1/2 transform -translate-x-1/2 bg-white w-[500px]
          //    text-black shadow-lg mt-2 rounded-md p-4 ">
          //   <div className="grid grid-cols-3 gap-4">
          //     <div>
          //       <p className="hover:text-blue-500 cursor-pointer">Crash</p>
          //       <p className="hover:text-blue-500 cursor-pointer">Crystal</p>
          //       <p className="hover:text-blue-500 cursor-pointer">Western Slot</p>
          //       <p className="hover:text-blue-500 cursor-pointer">21</p>
          //       <p className="hover:text-blue-500 cursor-pointer">Under and Over 7</p>
          //     </div>
          //     <div>
          //       <p className="hover:text-blue-500 cursor-pointer">Solitaire</p>
          //       <p className="hover:text-blue-500 cursor-pointer">Vampire Curse</p>
          //       <p className="hover:text-blue-500 cursor-pointer">Scratch Card</p>
          //       <p className="hover:text-blue-500 cursor-pointer">Las Vegas</p>
          //       <p className="hover:text-blue-500 cursor-pointer">Mayan Tomb</p>
          //     </div>
          //     <div>
          //       <p className="hover:text-blue-500 cursor-pointer">Burning Hot</p>
          //       <p className="hover:text-blue-500 cursor-pointer">Apple Of Fortune</p>
          //       <p className="hover:text-blue-500 cursor-pointer">Midgard Zombies</p>
          //       <p className="hover:text-blue-500 cursor-pointer">Spin and Win</p>
          //       <p className="hover:text-blue-500 cursor-pointer">Gems Odyssey</p>
          //     </div>

          //   </div>

          //   <button className="w-full mt-2 bg-gray-200 text-black py-2 rounded">
          //   SHOW ALL
          // </button>
          //   </div>
          //  {/* </div> */}
          <Megagames  onMouseEnter={() => setIsMegaGamesOpen(true)}
          onMouseLeave={() => setIsMegaGamesOpen(false)}
          />

          )}
        <li className="hover:text-gray-200 cursor-pointer">ESPORTS</li>
        <li className="hover:text-gray-200 cursor-pointer">MORE</li>
        <li className="hover:text-gray-200 cursor-pointer flex items-center">
          Crash <CiPlane className="text-[20px] text-white font-bold"/>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar2Taiwind;
