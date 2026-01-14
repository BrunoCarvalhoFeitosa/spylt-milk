"use client"
import { useEffect } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger, ScrollSmoother, SplitText } from "gsap/all"
import { Button } from "@/app/components/button"

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

export const HeroSection = () => {
    useGSAP(() => {
        const titleSplit = SplitText.create(".hero-title", {
            type: "chars"
        })

        const tl = gsap.timeline({
            delay: 1
        })

        tl.to(".hero-content", {
            opacity: 1,
            y: 0,
            ease: "power1.inOut"
        }).to(".hero-text-scroll", {
            duration: 1,
            clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)",
            ease: "circ.out"
        }, "-=0.5").from(titleSplit.chars, {
            yPercent: 200,
            stagger: 0.02,
            ease: "power2.out"
        }, "-=0.5")

        const heroTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".hero-container",
                start: "1% top",
                end: "bottom top",
                scrub: true,
            }
        })

        heroTl.to(".hero-container", {
            rotate: 7,
            scale: 0.9,
            yPercent: 30,
            ease: "power1.inOut"
        })
    })

    useEffect(() => {
        ScrollSmoother.create({
            smooth: 3,
            effects: true
        })
    }, [])

    return (
        <section className="bg-main-bg">
            <div className="hero-container">
                <div className="absolute size-full">
                    <video
                        src="/videos/hero-bg.mp4"
                        playsInline={true}
                        muted={true}
                        autoPlay={true}
                        className="size-full object-cover"
                    />
                </div>
                <div className="hero-content opacity-0 z-50">
                    <div>
                        <h1 className="hero-title">
                            Freaking Delicious
                        </h1>
                    </div>
                    <div
                        style={{ clipPath:"polygon(50% 0, 50% 0, 50% 100%, 50% 100%)" }}
                        className="hero-text-scroll"
                    >
                        <div className="hero-subtitle">
                            <h1>
                                Protein + Caffine
                            </h1>
                        </div>
                    </div>
                    <h2>
                        Live life to the fullest  with SPYLT: Shatter boredom and embrace your inner kid with every deliciously smooth chug.
                    </h2>
                    <Button>
                        Chug a SPYLT
                    </Button>
                </div>
            </div>
        </section>
    )
}
