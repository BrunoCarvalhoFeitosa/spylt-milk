"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import gsap from "gsap"
import { Menu } from "../menu"

export const Navbar = () => {
  const [open, setOpen] = useState(false)

  const buttonRef = useRef<HTMLButtonElement>(null)
  const line1Ref = useRef<HTMLDivElement>(null)
  const line2Ref = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const tlButton = useRef<gsap.core.Timeline | null>(null)
  const tlMenu = useRef<gsap.core.Timeline | null>(null)

  useEffect(() => {
    if (!buttonRef.current || !line1Ref.current || !line2Ref.current) {
      return
    }

    gsap.set(line1Ref.current, {
      y: -4,
      rotate: 0
    })

    gsap.set(line2Ref.current,{
      y: 4,
      rotate: 0
    })

    gsap.set(buttonRef.current, {
      backgroundColor: "#523122",
      borderRadius: "9999px"
    })

    tlButton.current = gsap.timeline({ paused: true })

    tlButton.current.to(buttonRef.current, {
      backgroundColor: "#a26833",
      borderRadius: "9999px",
      duration: 0.35,
      ease: "power3.out",
    }).to(line1Ref.current,
      {
        y: 0,
        rotate: 45,
        duration: 0.35,
        ease: "power3.out"
      },
      0
    ).to(
      line2Ref.current,
      {
        y: 0,
        rotate: -45,
        duration: 0.35,
        ease: "power3.out"
      },
      0
    )
  }, [])

  useEffect(() => {
    if (!menuRef.current) {
      return
    }

    gsap.set(menuRef.current, {
      yPercent: -100,
      autoAlpha: 0
    })

    tlMenu.current = gsap.timeline({ paused: true })
    tlMenu.current.to(menuRef.current, {
      yPercent: 0,
      autoAlpha: 1,
      duration: 0.8,
      ease: "power3.out",
    })

    if (open) {
      tlMenu.current.play()
    }

  }, [open])

  useEffect(() => {
    if (!tlButton.current || !tlMenu.current) {
      return
    }

    if (open) {
      tlButton.current.play()
      tlMenu.current.play()
    } else {
      tlButton.current.reverse()
      tlMenu.current.reverse()
    }
  }, [open])

  useEffect(() => {
    if (!buttonRef.current) {
      return
    }

    const button = buttonRef.current

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      const strength = 0.5
      const rotateStrength = 10

      gsap.to(button, {
        x: x * strength,
        y: y * strength,
        rotationX: -y / rect.height * rotateStrength,
        rotationY: x / rect.width * rotateStrength,
        duration: 0.3,
        ease: "power3.out",
        transformPerspective: 500
      })
    }

    const handleMouseLeave = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        rotationX: 0,
        rotationY: 0,
        duration: 0.5,
        ease: "power3.out",
        transformPerspective: 500
      })
    }

    button.addEventListener("mousemove", handleMouseMove)
    button.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      button.removeEventListener("mousemove", handleMouseMove)
      button.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  const handleMenuOpen = () => {
    setOpen((prev) => !prev)
  }

  return (
    <nav className="fixed top-0 left-0 w-full py-4 px-5 md:px-10 z-100">
      {open && (
        <div ref={menuRef} className="fixed top-0 left-0 w-full h-dvh bg-milk z-50">
          <Menu />
        </div>
      )}
      <div className="flex justify-between items-center relative z-100">
        <Link href="/">
          <Image src="/images/nav-logo.svg" width={110} height={40} alt="Logo" />
        </Link>
        <button
          ref={buttonRef}
          onClick={handleMenuOpen}
          className="relative flex items-center justify-center w-12 h-12 rounded-full cursor-pointer"
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <div ref={line1Ref} className="absolute w-6 h-0.5 bg-milk" />
          <div ref={line2Ref} className="absolute w-6 h-0.5 bg-milk" />
        </button>
        <div className="hidden md:block">
          <button className="py-3 px-7 bg-amber-400 rounded-full text-xl uppercase">
            Find stores
          </button>
        </div>
      </div>
    </nav>
  )
}
