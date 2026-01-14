"use client"

import Link from "next/link"
import { useMediaQuery } from "react-responsive"

export const Footer = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)"
  })

  return (
    <footer className="footer-section">
      <img
        src="/images/footer-dip.png"
        alt=""
        className="w-full object-cover -translate-y-1"
      />
      <div className="relative md:pt-[20vh] pt-[10vh] 2xl:h-[110dvh]">
        <div className="flex justify-center items-center md:gap-10 gap-5">
          <div className="relative z-10">
            <Link href="/">
              <img
                src="/images/nav-logo.svg"
                alt="Logo"
              />
            </Link>
          </div>
        </div>
        <div className="overflow-hidden z-10">
          <h1 className="py-5 general-title text-center text-milk">
            #CHUGRESPONSIBLY
          </h1>
        </div>
        <div className="mx-auto md:max-w-2xl px-5 md:px-0 relative z-10">
          <p className="mt-3 font-paragraph text-milk text-center">
            Get Exclusive Early Access and Stay Informed About Product Updates, Events, and More!
          </p>
          <div className="flex justify-between items-center border-b border-[#D9D9D9] py-5 md:mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full outline-none placeholder:font-sans placeholder:text-[#9999990] text-white"
            />
            <button className="flex justify-center items-center size-15 bg-mid-brown rounded-md transition-all duration-300 hover:opacity-75 cursor-pointer">
              <img src="/images/arrow.svg" alt="arrow" />
            </button>
          </div>
        </div>
        {isMobile ? (
          <img
            src="/images/footer-drink.png"
            alt="Footer image"
            className="absolute top-0 object-contain"
          />
        ) : (
          <video
            src="/videos/splash.mp4"
            autoPlay={true}
            playsInline={true}
            muted={true}
            className="absolute top-0 object-contain mix-blend-lighten"
          />
        )}
        <div className="flex-center gap-5 relative md:mt-20 mt-5 z-10">
          <div className="social-btn">
            <img
              src="./images/yt.svg"
              alt="YouTube"
            />
          </div>
          <div className="social-btn">
            <img
              src="./images/insta.svg"
              alt="Instagram"
            />
          </div>
          <div className="social-btn">
            <img
              src="./images/tiktok.svg"
              alt="TikTok"
            />
          </div>
        </div>
        <div className="mt-20 lg:mt-40 md:px-10 px-5 flex gap-10 md:flex-row flex-col justify-between font-paragraph text-milk md:text-lg font-medium">
          {/* <div className="flex items-center md:gap-10 gap-5">
            <div>
              <Link href="/">
                <img
                  src="/images/nav-logo.svg"
                  alt="Logo"
                />
              </Link>
            </div>
            <div>
              <p>
                Chug Club
              </p>
              <p>
                Student Marketing
              </p>
              <p>
                Dairy Dealers
              </p>
            </div>
            <div>
              <p>
                Company
              </p>
              <p>
                Contacts
              </p>
              <p>
                Tasty Talk
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </footer>   
  )
}