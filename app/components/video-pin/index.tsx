"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useMediaQuery } from "react-responsive"

export const VideoPin = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)"
  })

  useGSAP(() => {
    if (!isMobile) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".vd-pin-section",
          start: "-15% top",
          end: "200% top",
          scrub: 1.5,
          pin: true
        }
      })

      tl.to(".video-box", {
        clipPath: "circle(100% at 50% 50%)",
        ease: "power1.inOut"
      })
    }
  })

  return (
     <div className="vd-pin-section">
        <div
          className="size-full video-box"
          style={{
            clipPath: isMobile ? "circle(100% at 50% 50%)" : "circle(6% at 50% 50%)"
          }}
        >
          <video
            src="/videos/pin-video.mp4"
            playsInline={true}
            muted={true}
            autoPlay={true}
            loop={true}
          />

          <div className="abs-center md:scale-100 scale-200">
            <img
              src="/images/circle-text.svg"
              alt=""
              className="spin-circle"
            />
            <div className="play-btn">
              <img
                src="/images/play.svg"
                alt=""
                className="size-[3vw] ml-[.5vw]"
              />
            </div>
          </div>
        </div>
     </div> 
  )
}
