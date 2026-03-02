"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Countdown() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    const [isAdult, setIsAdult] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Target: March 8th, 2026 (Tamzy's 18th Birthday)
        const birthday = new Date("2026-03-08T00:00:00").getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = now - birthday;

            if (difference >= 0) {
                // Birthday has passed - Count up
                setIsAdult(true);
                const d = Math.floor(difference / (1000 * 60 * 60 * 24));
                const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const s = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({ days: d, hours: h, minutes: m, seconds: s });
            } else {
                // Birthday is in the future - Count down
                setIsAdult(false);
                const posDiff = Math.abs(difference);
                const d = Math.floor(posDiff / (1000 * 60 * 60 * 24));
                const h = Math.floor((posDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const m = Math.floor((posDiff % (1000 * 60 * 60)) / (1000 * 60));
                const s = Math.floor((posDiff % (1000 * 60)) / 1000);

                setTimeLeft({ days: d, hours: h, minutes: m, seconds: s });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // Prevent hydration mismatch
    if (!mounted) return null;

    const timeUnits = [
        { label: "Days", value: timeLeft.days },
        { label: "Hours", value: timeLeft.hours },
        { label: "Minutes", value: timeLeft.minutes },
        { label: "Seconds", value: timeLeft.seconds },
    ];

    return (
        <section className="bg-black py-20 px-6 sm:px-10 lg:px-20 relative z-10 border-t border-white/5">
            <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-orange-500 mb-6"
                >
                    {isAdult ? "You Are Finally An Adult!" : "Counting Down To 18!"}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-lg md:text-xl text-red-200/80 mb-12 font-light"
                >
                    {isAdult
                        ? "You have been an adult for:"
                        : "Almost there! Only a few moments left:"}
                </motion.p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {timeUnits.map((unit, index) => (
                        <motion.div
                            key={unit.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-zinc-900/80 backdrop-blur-md border border-red-500/20 rounded-3xl p-6 md:p-8 shadow-[0_0_25px_rgba(239,68,68,0.15)] flex flex-col items-center justify-center transform hover:scale-105 hover:border-red-500/50 transition-all duration-300"
                        >
                            <span className="text-5xl md:text-7xl font-black text-white mb-3 tracking-tighter drop-shadow-md">
                                {unit.value.toString().padStart(2, '0')}
                            </span>
                            <span className="text-sm md:text-base text-red-400 font-semibold uppercase tracking-widest">
                                {unit.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
