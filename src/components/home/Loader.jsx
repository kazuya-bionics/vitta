'use client'
import { useRef, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

import {SplitText} from 'gsap/all'

export const Loader = () => {
  const loaderRef = useRef()

  // Bloquea el scroll cuando el loader aparece
  useEffect(() => {
    document.body.style.overflow = 'hidden'
  }, [])

  // Animación con GSAP
  useGSAP(() => {

    const tl = gsap.timeline({
        defaults: {
            delay: .3,
            ease: 'expo.inOut',
            duration: .5
        }
    })

    gsap.set(".box-principal", {
        opacity:1
    })

    const split = SplitText.create(".text-initial", { type: "words, chars" });

    tl.to(".box-principal",{
        scaleY: 0,
        opacity: 0,
        duration: .8,
        stagger: {
            each: .03,
            from: "center"
        }
    })

    tl.from(split.chars, {
        opacity: 0,
        stagger: {
            each:.03,
            from: "center"
        }
    })

    tl.to(split.chars, {
        opacity:0,
        delay:.5,
        stagger: {
            each:.03,
            from: "center"
        }
    })   
    
    .to(loaderRef.current, {
      opacity: 0,
      scaleY: 0,
      duration: 1,
      onComplete: () => {
        document.body.style.overflow = '' // Restaurar scroll
        loaderRef.current.style.display = 'none' // Oculta el loader del DOM
      },
    })
    
  }, {loaderRef})

  return (
    <div
      ref={loaderRef}
      className="w-full h-screen fixed top-0 left-0 z-[9999] bg-white flex items-center justify-center overflow-hidden p-12"
    >
        <div className='w-full h-screen flex absolute top-0 right-0'>
            <div className='w-[20%] h-screen bg-black box-principal'>sfas</div>
            <div className='w-[20%] h-screen bg-black box-principal'>sfas</div>
            <div className='w-[20%] h-screen bg-black box-principal'>sfas</div>
            <div className='w-[20%] h-screen bg-black box-principal'>sfas</div>
            <div className='w-[20%] h-screen bg-black box-principal'>sfas</div>
        </div>
        <div className='overflow-hidden'>
            <h3 className='text-initial text-5xl font-semibold uppercase'>Tu legado empieza con una buena elección.</h3>
        </div>
    </div>
  )
}
