"use client";

import { motion, AnimatePresence } from "framer-motion";

export const PageTransition = ({ show }) => {
  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          key="page-transition"
          initial={{ y: "100%" }}    // empieza abajo
          animate={{ y: "0%" }}      // entra
          exit={{ y: "-100%" }}      // sale hacia arriba
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[999] bg-black pointer-events-none"
        >
          <div className="w-full h-full flex items-center justify-center text-white text-4xl">
            Vitta
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
