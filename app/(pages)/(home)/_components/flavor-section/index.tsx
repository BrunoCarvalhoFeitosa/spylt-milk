"use client"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"
import { flavorListData } from "@/app/utils/constants"
import { useMediaQuery } from "react-responsive"

export const FlavorSection = () => {
  const sliderRef = useRef(null)

  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)"
  })
  
  useGSAP(() => {
    const firstTextSplit = SplitText.create(".first-text-split h1", {
      type: "chars"
    })

    const secondTextSplit = SplitText.create(".second-text-split h1", {
      type: "chars"
    })

    gsap.from(firstTextSplit.chars, {
      yPercent: 200,
      stagger: 0.02,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 30%"
      }
    })

    gsap.to(".flavor-text-scroll", {
      duration: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 10%"
      }
    })

    gsap.from(secondTextSplit.chars, {
      yPercent: 200,
      stagger: 0.02,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 1%"
      }
    })
  })

  useGSAP(() => {
    const scrollAmount = sliderRef?.current?.scrollWidth - window.innerWidth

    if (!isTablet) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".flavor-section",
          start: "2% top",
          end: `+=${scrollAmount + 1500}px`,
          pin: true,
          scrub: true
        }
      })
  
      tl.to(".flavor-section", {
        x: `-${scrollAmount + 1500}px`,
        ease: "power1.inOut"
      })
    }

    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top top",
        end: "bottom 80%",
        scrub: true
      }
    })

    titleTl.to(".first-text-split", {
      xPercent: -30,
      ease: "power1.inOut"
    }).to(".flavor-text-scroll", {
      xPercent: -22,
      ease: "power1.inOut"
    }, "<").to(".second-text-split", {
      xPercent: -10,
      ease: "power1.inOut"
    }, "<")
  })

  return (
    <section className="flavor-section">
      <div className="relative h-full flex lg:flex-row flex-col items-center">
        <div className="md:mt-20 xl:mt-0 lg:w-[57%] flex-none h-80 lg:h-full">
          <div className="general-title col-center h-full 2xl:gap:32 xl:gap-24 gap-16">
            <div className="overflow-hidden 2xl:py-0 py-3 first-text-split">
              <h1>
                We have 6
              </h1>
            </div>
            <div
              style={{
                clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"
              }}
              className="flavor-text-scroll"
            >
              <div className="pb-5 2xl:pt-0 pt-3 2xl:px-5 px-4 bg-mid-brown">
                <h2 className="text-milk">
                  freaking
                </h2>
              </div>
            </div>
            <div className="2xl:py-0 py-3 second-text-split overflow-hidden">
              <h1>
                delicious flavors
              </h1>
            </div>
          </div>
        </div>
        <div className="h-full">
            <div ref={sliderRef} className="slider-wrapper">
              <div className="flavors">
                {flavorListData.map((flavor, index) => (
                  <div
                    key={index}
                    className={`relative flex-none lg:w-[50vw] w-96 lg:h-[70vh] md:h-[50vh] h-80 md:w-[90vw] ${flavor.rotation} z-30`}
                  >
                    <img
                      src={`/images/${flavor.color}-bg.svg`}
                      alt={flavor.name}
                      className="absolute bottom-0"
                    />
                    <img
                      src={`/images/${flavor.color}-drink.webp`}
                      alt={flavor.name}
                      className="drinks"
                    />
                    <img
                      src={`/images/${flavor.color}-elements.webp`}
                      alt={flavor.name}
                      className="elements animate-[bounce_3s_ease-in-out_infinite] [@keyframes_bounce:{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}]"
                    />
                    <h1>
                      {flavor.name}
                    </h1>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </div>
    </section>   
  )
}