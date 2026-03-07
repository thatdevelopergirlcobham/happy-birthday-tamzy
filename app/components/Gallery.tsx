"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, ChevronLeft, ChevronRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const mediaItems = [
    { type: "video", src: "/media/2023.mp4" },
    { type: "video", src: "/media/baddie.mp4" },
    { type: "image", src: "/media/blue.jpeg" },
    { type: "video", src: "/media/her.mp4" },
    { type: "video", src: "/media/myladyonblue.mp4" },
    { type: "video", src: "/media/sexydoc.mp4" },
    { type: "video", src: "/media/shortie.mp4" },
    { type: "video", src: "/media/smile.mp4" },
    { type: "image", src: "/media/stllus.jpeg" },
    { type: "image", src: "/media/them.jpeg" },
    { type: "video", src: "/media/twirl.mp4" },
    { type: "image", src: "/media/us.jpeg" },
    { type: "video", src: "/media/withoutfilter.mp4" },
    { type: "video", src: "/media/yearone.mp4" },
];

export default function Gallery() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const selectedMedia = selectedIndex !== null ? mediaItems[selectedIndex] : null;

    const handleNext = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex + 1) % mediaItems.length);
        }
    };

    const handlePrev = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex - 1 + mediaItems.length) % mediaItems.length);
        }
    };

    // Close modal when pressing escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setSelectedIndex(null);
            if (e.key === "ArrowRight") handleNext();
            if (e.key === "ArrowLeft") handlePrev();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <section className="bg-black py-20 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-orange-500 mb-16 text-center">
                    Our Memories
                </h2>

                <div className="w-full relative">
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        slidesPerView={"auto"}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 250,
                            modifier: 2.5,
                            slideShadows: true,
                        }}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            el: ".swiper-pagination",
                            clickable: true,
                            dynamicBullets: true,
                            dynamicMainBullets: 3
                        }}
                        navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        }}
                        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                        className="w-full pb-16"
                    >
                        {mediaItems.map((item, index) => (
                            <SwiperSlide
                                key={index}
                                onClick={() => setSelectedIndex(index)}
                                className="!w-[280px] sm:!w-[320px] md:!w-[380px] lg:!w-[450px] !h-[400px] sm:!h-[500px] lg:!h-[600px] rounded-3xl overflow-hidden shadow-2xl shadow-red-900/20 border border-white/10 cursor-pointer group"
                            >
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center pointer-events-none">
                                    <span className="text-white bg-black/50 px-6 py-3 rounded-full backdrop-blur-md border border-white/20 font-medium tracking-wide">
                                        View Fullscreen
                                    </span>
                                </div>

                                {item.type === "video" ? (
                                    <video
                                        src={item.src}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img
                                        src={item.src}
                                        alt={`Memory ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                )}
                            </SwiperSlide>
                        ))}

                        {/* Custom Pagination and Navigation Display */}
                        <div className="flex justify-center items-center mt-6 sm:mt-10 px-4 space-x-4 relative z-20 overflow-visible">
                            <div className="swiper-button-prev hidden sm:flex !static !w-12 !h-12 !mt-0 !bg-zinc-800/80 hover:!bg-red-600 !rounded-full !text-white !backdrop-blur-md transition-all after:!text-lg border border-white/10" />
                            <div className="swiper-pagination !static !w-32 !overflow-visible !flex !items-center !justify-center pointer-events-auto" />
                            <div className="swiper-button-next hidden sm:flex !static !w-12 !h-12 !mt-0 !bg-zinc-800/80 hover:!bg-red-600 !rounded-full !text-white !backdrop-blur-md transition-all after:!text-lg border border-white/10" />
                        </div>
                    </Swiper>
                </div>
            </div>

            {/* Fullscreen Overlay with Download Button */}
            <AnimatePresence>
                {selectedMedia && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-xl"
                        onClick={() => setSelectedIndex(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-5xl h-fit max-h-full flex flex-col items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Top Tools: Close & Download */}
                            <div className="absolute -top-12 right-0 sm:-right-8 flex space-x-3 z-50">
                                <a
                                    href={selectedMedia.src}
                                    download={selectedMedia.src.split("/").pop()}
                                    target="_blank"
                                    rel="noreferrer"
                                    title="Download Media"
                                    className="p-3 bg-zinc-800 hover:bg-red-600 rounded-full text-white transition-all shadow-lg border border-white/10"
                                >
                                    <Download className="w-5 h-5 sm:w-6 sm:h-6" />
                                </a>
                                <button
                                    onClick={() => setSelectedIndex(null)}
                                    title="Close View"
                                    className="p-3 bg-zinc-800 hover:bg-red-600 rounded-full text-white transition-all shadow-lg border border-white/10"
                                >
                                    <X className="w-5 h-5 sm:w-6 sm:h-6" />
                                </button>
                            </div>

                            {/* Navigation Buttons */}
                            <button
                                onClick={handlePrev}
                                className="absolute left-0 sm:-left-24 top-1/2 -translate-y-1/2 p-4 bg-zinc-800/50 hover:bg-red-600/80 rounded-full text-white transition-all z-50 backdrop-blur-sm border border-white/10 group"
                                title="Previous"
                            >
                                <ChevronLeft className="w-8 h-8 group-hover:scale-110 transition-transform" />
                            </button>
                            <button
                                onClick={handleNext}
                                className="absolute right-0 sm:-right-24 top-1/2 -translate-y-1/2 p-4 bg-zinc-800/50 hover:bg-red-600/80 rounded-full text-white transition-all z-50 backdrop-blur-sm border border-white/10 group"
                                title="Next"
                            >
                                <ChevronRight className="w-8 h-8 group-hover:scale-110 transition-transform" />
                            </button>

                            {/* Media Content */}
                            <div className="w-full max-h-[85vh] rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(239,68,68,0.15)] border border-white/10 bg-black flex justify-center items-center">
                                {selectedMedia.type === "video" ? (
                                    <video
                                        src={selectedMedia.src}
                                        autoPlay
                                        loop
                                        controls
                                        className="max-w-full max-h-[85vh] object-contain"
                                    />
                                ) : (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img
                                        src={selectedMedia.src}
                                        alt="Fullscreen Memory"
                                        className="max-w-full max-h-[85vh] object-contain"
                                    />
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
