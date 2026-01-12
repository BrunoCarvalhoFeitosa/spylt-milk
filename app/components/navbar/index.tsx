"use client"

import Image from "next/image"

export const Navbar = () => {
    return (
      <nav className="p-10">
        <div className="w-full flex justify-between items-center">
          <div>
            <Image
              src="/images/nav-logo.svg"
              width={110}
              height={40}
              alt="Logo"
              className=""
            />
          </div>
          <div>
            <button
              type="button"
              className="flex flex-col gap-2"
            >
              <div className="w-15 h-0.5 bg-black" />
              <div className="w-15 h-0.5 bg-black" />
            </button>
          </div>
          <div>
            <button
              type="button"
              className="py-3 px-7 bg-amber-400 rounded-full text-xl uppercase cursor-pointer"
            >
              Encontrar lojas
            </button>
          </div>
        </div>
      </nav>
    )
}