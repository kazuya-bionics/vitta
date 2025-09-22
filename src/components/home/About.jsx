"use client";

import React, { useEffect } from "react";

import { motion } from "motion/react"

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export const About = () => {
  return (
    <div className="flex flex-col justify-center py-16 gap-y-16">
      <div className="w-full flex flex-col gap-y-8 px-8 max-w-3/4">
        <h3 className="font-semibold text-3xl">QUIÉNES SOMOS</h3>
        <p className="text-md">
          En vitta, creemos que proteger la vida es uno de los actos más humanos
          y valientes que existen. Somos una agencia especializada en seguros de
          vida con la misión de ayudarte a cuidar lo más valioso: las personas
          que amas.
        </p>
      </div>

      <div className="w-full h-20 bg-black" />

      <div className="w-full flex ml-[25%] flex-col justify-center gap-y-4 px-8 max-w-3/4">
        <p className="text-md">
          Trabajamos con responsabilidad, transparencia y cercanía, escuchando
          tus necesidades para ofrecerte soluciones claras y personalizadas.
          Nuestra misión es acompañarte, no solo en la elección de tu seguro,
          sino también en cada momento en que lo necesites, con la seguridad de
          que siempre contarás con nuestro respaldo.
        </p>
        <p className="text-md">
          Porque tu bienestar y tu tranquilidad son lo más importante para
          nosotros, nos comprometemos a servirte con profesionalismo, empatía y
          la convicción de que juntos construiremos la protección que mereces.
        </p>
        <button>
          <Link
            className="border-b-2 w-[120px] flex justify-center items-center gap-x-2"
            href="/servicios"
          >
            <span className="mb-1">Nosotros</span>
            <FaArrowRight />
          </Link>
        </button>
      </div>

      <Transition />
    </div>
  );
};

export const Transition = () => {
  useEffect(() => {
    import("@dotlottie/player-component"); // 👈 solo en cliente
  }, []);

  return (
    <div className="w-full bg-orange-300 h-svh flex justify-center items-center">
      <motion.div 
        initial={{opacity:0}}
        whileInView={{
          opacity: 1,
          transition:{
            duration: 1,
            delay:.3
          }
        }}
      >
        <dotlottie-player
          src="/SandyLoading.lottie"
          autoplay
          loop
          style={{ width: "100%", height: "100svh" }}
        ></dotlottie-player>
      </motion.div>
    </div>
  );
};
