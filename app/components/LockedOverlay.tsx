"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock } from "lucide-react";

export default function LockedOverlay() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    const [isUnlocked, setIsUnlocked] = useState(true); // Default to true to avoid flash on slow load
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Target: March 8th, 2026, 00:00:00 Nigerian Time (UTC+1)
        const targetDate = new Date("2026-03-08T00:00:00+01:00").getTime();

        const checkTime = () => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference <= 0) {
                setIsUnlocked(true);
                return true;
            } else {
                setIsUnlocked(false);
                const d = Math.floor(difference / (1000 * 60 * 60 * 24));
                const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const s = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({ days: d, hours: h, minutes: m, seconds: s });
                return false;
            }
        };

        const isInitiallyUnlocked = checkTime();
        if (isInitiallyUnlocked) return;

        const interval = setInterval(checkTime, 1000);
        return () => clearInterval(interval);
    }, []);

    if (!mounted || isUnlocked) return null;

    const timeUnits = [
        { label: "Days", value: timeLeft.days },
        { label: "Hours", value: timeLeft.hours },
        { label: "Minutes", value: timeLeft.minutes },
        { label: "Seconds", value: timeLeft.seconds },
    ];

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[1000] bg-black flex flex-col items-center justify-center p-6 text-center overflow-hidden"
            >
                {/* Background Decor */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/20 blur-[120px] rounded-full animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-rose-600/20 blur-[120px] rounded-full animate-pulse delay-1000" />
                </div>

                <div className="relative z-10 max-w-2xl w-full">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, type: "spring" }}
                        className="mb-12"
                    >
                        <div className="w-24 h-24 bg-red-600/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-red-500/20 shadow-[0_0_30px_rgba(239,68,68,0.2)]">
                            <Lock className="w-10 h-10 text-red-500" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                            Oh my sweet baby <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-500">will soon be an adult</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 font-light italic">
                            ...but for now, underaged girl
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
                        {timeUnits.map((unit, index) => (
                            <motion.div
                                key={unit.label}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4 + index * 0.1 }}
                                className="bg-zinc-900/50 backdrop-blur-xl border border-white/5 rounded-2xl p-4 md:p-6 shadow-xl"
                            >
                                <div className="text-3xl md:text-5xl font-black text-white mb-1">
                                    {unit.value.toString().padStart(2, '0')}
                                </div>
                                <div className="text-[10px] md:text-xs text-red-400 font-bold uppercase tracking-widest">
                                    {unit.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Decorative Footer */}
                <div className="absolute bottom-10 left-0 right-0 py-4 flex justify-center opacity-20">
                    <span className="text-4xl font-black text-red-600 tracking-[1em] uppercase">COMING SOON</span>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
