"use client"
import { useState } from "react"
import { menuListData } from "@/app/utils/constants"
import Link from "next/link"

export const Menu = () => {
  const [activeMenu, setActiveMenu] = useState<number>(0)

  return (
    <div className="fixed top-0 left-0 w-full h-dvh bg-milk">
      <div className="flex items-center h-full">
        <div className="flex flex-col justify-center items-center w-[43%] md:w-1/2 h-full">
          <ul className="flex flex-col items-center">
            {menuListData.map((item, index) => (
              <li
                key={index}
                onMouseEnter={() => setActiveMenu(index)}
                className={`py-2 lg:py-0 px-4 text-2xl md:text-5xl lg:text-7xl uppercase font-extrabold tracking-tighter leading-none cursor-pointer transition-opacity duration-300 ${activeMenu === index ? "opacity-100" : "opacity-30"}`}
              >
                {item.label}
              </li>
            ))}
          </ul>
          <ul className="mt-5 hidden md:flex items-center gap-4">
            <li className="font-paragraph">
              <Link href="https://www.youtube.com/@spyltmilk" target="_blank">
                YouTube
              </Link>
            </li>
            <li className="font-paragraph">
              <Link href="https://www.instagram.com/spyltmilk/" target="_blank">
                Instagram
              </Link>
            </li>
            <li className="font-paragraph">
              <Link href="https://www.tiktok.com/@spylt" target="_blank">
                TikTok
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex w-[57%] md:w-1/2 h-full pointer-events-none">
          <img
            src={menuListData[activeMenu].image}
            alt={menuListData[activeMenu].label}
            className="w-full h-full object-cover transition-opacity duration-500"
          />
        </div>
      </div>
    </div>
  )
}
