"use client";

import React from "react";
import { motion } from "framer-motion";
import { Book, ExternalLink, GraduationCap, Heart, Quote, Download } from "lucide-react";
import Image from "next/image";

interface BookItem {
    title: string;
    author?: string;
    description: string;
    category: "Queer" | "Feminism";
    image?: string;
    link?: string;
    pdf?: string;
    tags?: string[];
}

const books: BookItem[] = [
    {
        title: "Felix Ever After",
        author: "Kacen Callender",
        description: "A beautiful story about a trans boy who falls in love while navigating his identity and self-worth.",
        category: "Queer",
        image: "/felixeverafter.webp",
        link: "https://www.goodreads.com/book/show/51931067-felix-ever-after",
        tags: ["Identity", "Self-Love", "Trans Representation"]
    },
    {
        title: "Red, White & Royal Blue",
        author: "Casey McQuiston",
        description: "A romance between the First Son of the United States and a British prince. Starts as enemies, turns into an iconic love story.",
        category: "Queer",
        image: "/redwhiteblue.jpg",
        link: "https://www.goodreads.com/book/show/41150487-red-white-royal-blue",
        tags: ["MLM", "Rom-Com", "Royalty"]
    },
    {
        title: "Aristotle and Dante Discover the Secrets of the Universe",
        author: "Benjamin Alire Sáenz",
        description: "A lyrical coming-of-age story about two boys forming a deep friendship that blossoms into love.",
        category: "Queer",
        image: "/aristotleanddante.webp",
        link: "https://www.goodreads.com/book/show/12000020-aristotle-and-dante-discover-the-secrets-of-the-universe",
        tags: ["MLM", "Poetic", "Family"]
    },
    {
        title: "She Gets the Girl",
        author: "Rachael Lippincott & Alyson Derrick",
        description: "Two girls team up to help one win over a crush, but realize they are the ones meant for each other.",
        category: "Queer",
        image: "/shegetsthegirl.jpg",
        link: "https://www.goodreads.com/book/show/58437812-she-gets-the-girl",
        tags: ["WLW", "College", "Sweet"]
    },
    {
        title: "The Seven Husbands of Evelyn Hugo",
        author: "Taylor Jenkins Reid",
        description: "A Hollywood icon tells her life story, revealing the one true woman she loved secretly for decades.",
        category: "Queer",
        image: "/thesevenhusnadsofhugo.jpg",
        link: "https://www.goodreads.com/book/show/32620332-the-seven-husbands-of-evelyn-hugo",
        tags: ["WLW", "Hollywood", "Emotional"]
    },
    {
        title: "They Both Die at the End",
        author: "Adam Silvera",
        description: "On their last day on Earth, two boys find each other and find a lifetime of love in 24 hours.",
        category: "Queer",
        image: "/theybothdieinthend.webp",
        link: "https://www.goodreads.com/book/show/33385229-they-both-die-at-the-end",
        tags: ["MLM", "Powerful", "Sad but Beautiful"]
    },
    {
        title: "We Should All Be Feminists",
        author: "Chimamanda Ngozi Adichie",
        description: "A powerful, essential essay based on the famous TED talk about modern gender equality.",
        category: "Feminism",
        image: "/weshouldabllbefeminists.webp",
        pdf: "/weshouldabllbefeminists.pdf",
        tags: ["Equality", "Essential", "Adichie"]
    },
    {
        title: "The Second Sex",
        author: "Simone de Beauvoir",
        description: "The foundational text of second-wave feminism. It examines how society treats women as 'the other'.",
        category: "Feminism",
        image: "/thesecondsex.jpg",
        pdf: "/1949_simone-de-beauvoir-the-second-sex.pdf",
        tags: ["Foundational", "Deep", "Philosophy"]
    }
];

export default function Library() {
    return (
        <section className="bg-zinc-950 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background Ornaments */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-600/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 mb-6"
                    >
                        <Book className="w-4 h-4" />
                        <span className="text-xs font-bold uppercase tracking-widest">The Library</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
                        Curated for <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-500">You</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        You said you wanted to read more queer and feminist literature, so I did the research for you. Enjoy these beautiful stories and powerful voices.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {books.map((book, index) => (
                        <motion.div
                            key={book.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-zinc-900/50 backdrop-blur-md border border-white/5 rounded-2xl overflow-hidden flex flex-col group h-full"
                        >
                            {/* Book Cover/Placeholder */}
                            <div className="relative aspect-[16/10] overflow-hidden bg-zinc-800">
                                {book.image ? (
                                    <Image
                                        src={book.image}
                                        alt={book.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900">
                                        {book.category === "Queer" ? (
                                            <Heart className="w-12 h-12 text-rose-500/30" />
                                        ) : (
                                            <GraduationCap className="w-12 h-12 text-red-500/30" />
                                        )}
                                    </div>
                                )}
                                <div className="absolute top-4 left-4">
                                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${book.category === "Queer" ? "bg-rose-500 text-white" : "bg-red-500 text-white"
                                        }`}>
                                        {book.category}
                                    </span>
                                </div>
                            </div>

                            {/* Book Info */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-white mb-1 leading-tight group-hover:text-red-400 transition-colors">
                                    {book.title}
                                </h3>
                                {book.author && (
                                    <p className="text-gray-500 text-sm mb-4 italic">by {book.author}</p>
                                )}
                                <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                                    {book.description}
                                </p>

                                <div className="space-y-4 pt-4 border-t border-white/5">
                                    <div className="flex flex-wrap gap-2">
                                        {book.tags?.map(tag => (
                                            <span key={tag} className="text-[10px] bg-white/5 text-gray-500 px-2 py-0.5 rounded-md">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>

                                    {book.link && (
                                        <a
                                            href={book.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-xs font-bold text-red-400 hover:text-red-300 transition-colors"
                                        >
                                            View on Goodreads <ExternalLink className="w-3 h-3" />
                                        </a>
                                    )}

                                    {book.pdf && (
                                        <a
                                            href={book.pdf}
                                            download
                                            className="inline-flex items-center gap-2 w-full justify-center px-4 py-3 bg-red-600/20 hover:bg-red-600 text-red-400 hover:text-white rounded-xl text-xs font-bold uppercase transition-all border border-red-500/20 group/btn"
                                        >
                                            <Download className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                                            Download PDF
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-20 text-center"
                >
                    <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-red-500 to-rose-500">
                        <div className="bg-zinc-950 rounded-[14px] px-8 py-6 relative">
                            <Quote className="absolute -top-4 -left-4 w-8 h-8 text-red-500 opacity-30" />
                            <p className="text-gray-300 italic text-lg lg:text-xl">
                                &quot;Happy Birthday and Happy Women&apos;s Day my love&quot;
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
