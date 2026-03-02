"use client";

import React, { useState, useEffect, useRef } from "react";
import { Play, Pause } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingAudio() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        // Attempt to autoplay audio
        const playAudio = async () => {
            if (audioRef.current) {
                try {
                    await audioRef.current.play();
                    setIsPlaying(true);
                } catch (error) {
                    // Autoplay was prevented
                    console.log("Autoplay prevented:", error);
                    setIsPlaying(false);
                }
            }
        };
        playAudio();

        // Attach interaction listener as a fallback to attempt autoplay once the user clicks anywhere
        const handleFirstInteraction = async () => {
            if (audioRef.current && audioRef.current.paused) {
                try {
                    await audioRef.current.play();
                    setIsPlaying(true);
                } catch (error) {
                    console.log("Playback failed:", error);
                }
            }
            document.removeEventListener("click", handleFirstInteraction);
        };

        document.addEventListener("click", handleFirstInteraction);

        return () => {
            document.removeEventListener("click", handleFirstInteraction);
        };
    }, []);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
                setIsPlaying(false);
            } else {
                audioRef.current.play();
                setIsPlaying(true);
            }
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
            {isPlaying && (
                <div className="flex items-center gap-1 h-8">
                    {[1, 2, 3, 4].map((i) => (
                        <motion.div
                            key={i}
                            className="w-1 bg-red-500 rounded-full"
                            initial={{ height: 4 }}
                            animate={{ height: ["4px", "24px", "4px"] }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                delay: i * 0.15,
                                ease: "easeInOut",
                            }}
                        />
                    ))}
                </div>
            )}

            <button
                onClick={togglePlay}
                className="w-14 h-14 bg-red-600 hover:bg-red-700 text-white rounded-full flex justify-center items-center shadow-lg shadow-red-500/30 transition-all hover:scale-105"
            >
                {isPlaying ? (
                    <Pause className="w-6 h-6 fill-current" />
                ) : (
                    <Play className="w-6 h-6 fill-current ml-1" />
                )}
            </button>

            <audio ref={audioRef} autoPlay loop src="/nexttome.mp3" />
        </div>
    );
}
