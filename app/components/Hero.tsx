"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

export default function Hero() {
    useEffect(() => {
        // Fire confetti on load
        const duration = 200 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const interval: ReturnType<typeof setInterval> = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            confetti({
                ...defaults,
                particleCount,
                origin: { x: Math.random(), y: Math.random() - 0.2 },
                colors: ["#ef4444", "#fca5a5", "#b91c1c", "#f87171"]
            });
        }, 250);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
            {/* Background glowing effects */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/20 blur-[100px] rounded-full" />
            </div>

            <div className="relative z-10 text-center px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <motion.h1
                        className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-rose-500 to-orange-500 drop-shadow-lg"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Happy Birthday
                        <br />
                        <span className="text-white drop-shadow-2xl">My Tamzy</span>
                    </motion.h1>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <p className="text-lg md:text-2xl text-red-200/90 max-w-2xl mx-auto leading-relaxed font-light mt-8">
                            Love is not a word, Love is a person, and that person is you.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}