"use client"

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

import { useRef } from 'react'

export const TransitionProvider = ({children}) => {

  const block = useRef(null)
  const container = useRef(null)

  useGSAP(() => {

    const tl = gsap.timeline();

    tl.to(block.current, {
      scaleY:.01,
      delay: .5,
      duration:.8,
      ease:'power3.inOut'
    }).to(block.current, {
      scaleX: 0,
      duration: 1.2,
      ease: "power3.out"
    }).to(container.current, {
      scaleY: 0,
      ease: "power3.out",
      duration: 1.2
    })

  },[])

  return (
    <div className='w-full h-screen  bg-white'>
      <div ref={container} className='w-full h-screen fixed top-0 left-0 z-[999] origin-top bg-white'/>
      <div ref={block} className='w-full h-screen fixed top-0 left-0 z-[999] bg-black'/>
      {children}
    </div>
  )
}
