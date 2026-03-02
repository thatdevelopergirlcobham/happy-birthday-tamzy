"use client";

import React from "react";
import { Heart } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative bg-black w-full py-10 px-6 sm:px-10 border-t border-white/5 overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center relative z-10">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-gray-400 font-light text-sm sm:text-base">Made with</span>
                    <Heart className="w-5 h-5 text-red-500 fill-red-500 animate-pulse" />
                    <span className="text-gray-400 font-light text-sm sm:text-base">for</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-orange-500 mb-6 font-['Poppins']">
                    MY TAMZY
                </h3>

                <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent mb-6" />

                <p className="text-zinc-500 text-xs sm:text-sm tracking-wider font-light text-center">
                    Happy 18th Birthday, my love.
                    <br className="sm:hidden" />
                    Here&apos;s to forever.
                </p>
            </div>
        </footer>
    );
}
