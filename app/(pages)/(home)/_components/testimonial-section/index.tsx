"use client"
import { useRef } from "react"
import { cardsData } from "@/app/utils/constants"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useMediaQuery } from "react-responsive"

export const TestimonialSection = () => {
  const vdRef = useRef<(HTMLVideoElement | null)[]>([])

  const isMobile = useMediaQuery({
    query: "(max-width: 768px)"
  })

  const handlePlay = (index: number) => {
    const video = vdRef.current[index]

    if (video) {
      video.play()
    }
  }
  
  const handlePause = (index: number) => {
    const video = vdRef.current[index]
  
    if (video) {
      video.pause()
    }
  }

  useGSAP(() => {
    gsap.set(".testimonials-section", {
      marginTop: isMobile ? "0" : "-140vh"
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: "top bottom",
        end: "200% top",
        scrub: true
      }
    })

    tl.to(".testimonials-section .first-title", {
      xPercent: 70
    }).to(".testimonials-section .sec-title", {
      xPercent: 25
    }, "<").to(".testimonials-section .third-title", {
      xPercent: -50
    }, "<")

    const pinTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: "10% top",
        end: "200% top",
        scrub: 1.5,
        pin: true
      }
    })

    pinTl.from(".vd-card", {
      yPercent: 150,
      stagger: 0.2,
      ease: "power1.inOut"
    })
  })

  return (
    <section className="testimonials-section">
      <div className="absolute size-full flex flex-col items-center pt-[5vw]">
        <h1 className="text-black first-title">
          What's
        </h1>
        <h1 className="text-light-brown sec-title">
          Everyone
        </h1>
        <h1 className="text-black third-title">
          Talking
        </h1>
      </div>
      <div className="pin-box">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className={`vd-card ${card.translation} ${card.rotation}`}
            onMouseEnter={() => handlePlay(index)}
            onMouseLeave={() => handlePause(index)}
          >
            <div className="absolute top-2 left-2 flex items-center gap-1 z-1">
              <img
                src={`/images/people${index+1}.png`}
                className="size-12 object-cover rounded-full border-2 border-white"
              />
              <p className="text-lg text-white">
                {card.name}
              </p>
            </div>
            <video
              ref={(el) => { vdRef.current[index] = el }}
              src={card.src}
              playsInline={true}
              muted={true}
              loop={true}
              className="size-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  )
}