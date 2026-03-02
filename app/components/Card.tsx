"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const cardsData = [
    {
        id: 1,
        image: "/media/cooperate.jpeg",
        title: "A Letter To My Love",
        shortText: "When people talk about love, it's usually romantic...",
        content: (
            <div className="space-y-4">
                <p>When people talk about love, it&apos;s usually romantic.<br />But for me, love is a girl.</p>

                <p>A girl who never saw me as &quot;too much&quot; or &quot;too little.&quot;<br />A girl who sees through my tears without me saying a word.<br />A girl who understands me in ways I didn&apos;t know were possible.</p>

                <p>There was a time I thought I was incapable of love.<br />But the truth is, I was never unable to love, I just couldn&apos;t love a man.<br />Because when I loved, I loved deeply. And my heart chose you.</p>

                <p>Everyone in my life knows you, even without meeting you.<br />That&apos;s how present you are in my world.<br />You make me proud in ways words can&apos;t explain.</p>

                <p>You&apos;re 18 now, and I wish you nothing but the very best this life can offer.<br />I love you every day, every hour, every moment.<br />I don&apos;t even know how to explain love without you in it.</p>

                <p>You and Mary are the greatest gifts life gave me, aside from my family.<br />I love you so much, Tamzy.<br />I really, truly love you, baby.</p>

                <p>You live inside me.<br />I love you more than I love myself — and I think you know that.<br />I appreciate you.<br />I&apos;m always rooting for you, my future medical doctor.</p>

                <p>And I made a queer library for you —<br />because love is not just a word.<br />It is something we build, protect, and grow.</p>

                <p>It is us.<br />It is Eke Ntami-Eval Grace.</p>
            </div>
        )
    },
    {
        id: 2,
        image: "/media/mywholeheart.jpeg",
        title: "My Whole Heart",
        shortText: "You and Mary have been the missing pieces...",
        content: (
            <div className="space-y-4">
                <p>TamTam,<br />you and Mary have been the missing pieces that made me whole.</p>
                <p>If the heart has four chambers, then you both live inside mine —<br />and somehow, when I think of you,<br />it beats faster… and gentler at the same time.</p>
                <p>You didn&apos;t just enter my life.<br />You completed it<br />You too make up my whole heart.</p>
            </div>
        )
    },
    {
        id: 3,
        image: "/media/her.jpeg",
        title: "Always Rooting For You",
        shortText: "I want the best for you. Always...",
        content: (
            <div className="space-y-4">
                <p>TamTam,</p>
                <p>I feel like I have said so much about how much I love you, how I cherish you, adore you, admire you, treasure you. And I mean every word. But today, on your birthday, I want to speak about something else.</p>
                <p>I want the best for you. Always.</p>
                <p>I want you to grow into the strongest, wisest, most emotionally intelligent version of yourself. I want you to choose yourself, not just your heart, but your head. Choose what protects you. Choose what builds you. Choose what aligns with the future you deserve.</p>
                <p>Do you remember my 16th birthday?<br />The card you gave me? I still have it somewhere at home. You filled it with scripture, prayers, and words about self-love and how WIsdom did not deserve. You told me I deserved more. You saw things I couldn&apos;t see yet.</p>
                <p>It&apos;s funny how now, years later, I sit and reflect on everything you said… and I understand it more deeply.</p>
                <p>Now it&apos;s my turn to say it to you.</p>
                <p>Choose yourself.</p>
                <p>Protect your peace. Guard your heart. Think long-term. Don&apos;t let temporary emotions distract you from permanent goals.(I actually mean your girlfriend)</p>
                <p>You are more than my best friend. You are more like my younger sister, my stubborn, brilliant, determined medical student.</p>
                <p>And please, in everything you do, do not forget the end goal.</p>
                <p>Medicine.<br />The white coat.<br />The life you dreamed of.</p>
            </div>
        )
    }
];

export default function CardsSection() {
    const [selectedCard, setSelectedCard] = useState<typeof cardsData[0] | null>(null);

    // Close modal when pressing escape key
    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setSelectedCard(null);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <section className="min-h-screen bg-black py-20 px-6 sm:px-10 lg:px-20 relative z-10">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-orange-500 mb-16 text-center">
                    Birthday Letters
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {cardsData.map((card, index) => (
                        <motion.div
                            key={card.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="relative group rounded-3xl overflow-hidden shadow-2xl shadow-red-900/20 bg-zinc-900 aspect-[3/4]"
                        >
                            {/* Image background */}
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={card.image}
                                alt={card.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Blurred Bottom Section */}
                            <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black/95 via-black/70 to-transparent flex flex-col justify-end p-6">
                                <div className="backdrop-blur-xl bg-black/40 p-6 rounded-2xl border border-white/10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-xl">
                                    <h3 className="text-2xl font-bold text-red-200 mb-2 truncate">{card.title}</h3>
                                    <p className="text-gray-300 text-sm mb-5 line-clamp-2">
                                        {card.shortText}
                                    </p>
                                    <button
                                        onClick={() => setSelectedCard(card)}
                                        className="w-full py-3.5 bg-red-600 hover:bg-red-500 text-white rounded-xl font-medium tracking-wide transition-colors duration-300 border border-red-400/50 shadow-[0_0_15px_rgba(239,68,68,0.3)]"
                                    >
                                        Read More
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal Popup */}
            <AnimatePresence>
                {selectedCard && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-md"
                        onClick={() => setSelectedCard(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-2xl max-h-[85vh] overflow-hidden bg-zinc-900 rounded-3xl shadow-2xl border border-red-500/20 flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header */}
                            <div className="p-6 border-b border-white/10 flex justify-between items-center bg-zinc-900/80 backdrop-blur-md z-10 relative">
                                <h3 className="text-2xl md:text-3xl font-bold text-red-300">
                                    {selectedCard.title}
                                </h3>
                                <button
                                    onClick={() => setSelectedCard(null)}
                                    className="p-2 rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Modal Body */}
                            <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar text-gray-200 leading-relaxed font-light text-[17px]">
                                {selectedCard.content}
                            </div>

                            {/* Decorative gradient overlay at bottom of scroll */}
                            <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-zinc-900 to-transparent pointer-events-none" />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
