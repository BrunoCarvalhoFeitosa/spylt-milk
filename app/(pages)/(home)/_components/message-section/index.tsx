"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"

export const MessageSection = () => {
  useGSAP(() => {
    const firstMsgSplit = SplitText.create(".first-message", {
      type: "words"
    })

    const secondMsgSplit = SplitText.create(".second-message", {
      type: "words"
    })

    const paragraphMsgSplit = SplitText.create(".message-content p", {
      type: "words, lines",
      linesClass: "paragraph-line"
    })

    gsap.to(firstMsgSplit.words, {
      color: "#faeade",
      ease: "power1.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".message-content",
        start: "top center",
        end: "30% center",
        scrub: true
      }
    })

    gsap.to(secondMsgSplit.words, {
      color: "#faeade",
      ease: "power1.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".second-message",
        start: "top center",
        end: "30% center",
        scrub: true
      }
    })

    const revealTl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".msg-text-scroll",
        start: "top 100%"
      }
    })

    revealTl.to(".msg-text-scroll", {
      duration: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "circ.inOut"
    })

    const paragraphTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".message-content p",
        start: "top center",
      }
    })

    paragraphTl.from(paragraphMsgSplit.words, {
      yPercent: 300,
      rotate: 3,
      ease: "power1.inOut",
      duration: 1,
      stagger: 0.01
    })
  })

  return (
     <section className="message-content">
      <div className="relative py-28 mx-auto container flex-center">
        <div className="w-full h-full">
          <div className="msg-wrapper">
            <h1 className="first-message">
              Stir up yout fearless past and 
            </h1>
            <div
              style={{
                clipPath: "polygon(0 0, 0 0, 0% 100%, 0% 100%)"
              }}
              className="msg-text-scroll"
            >
              <div className="bg-light-brown md:pb-5 pb-3 px-5">
                <h2 className="text-red-brown">
                  Fuel up
                </h2>
              </div>
            </div>

            <h1 className="second-message">
              your future with every gulp of Perfect Protein
            </h1>
          </div>
          <div className="flex-center md:mt-20 mt-10">
            <div className="max-w-md px-10 flex-center overflow-hidden">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure minus facilis tempore ipsum veritatis dolorem eaque, architecto suscipit exercitationem vero doloremque at dolor soluta natus corporis earum esse perspiciatis? Deleniti.
              </p>
            </div>
          </div>
        </div>
      </div>
     </section> 
  )
}