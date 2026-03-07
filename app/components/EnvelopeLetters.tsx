"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Heart, Mail, Download } from "lucide-react";
import Image from "next/image";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

// Import Swiper removed as requested

interface Letter {
    id: number;
    title: string;
    content: React.ReactNode;
}

const lettersData: Letter[] = [
    {
        id: 1,
        title: "The First Memory of You",
        content: (
            <div className="space-y-4 text-gray-800 font-serif">
                <p className="text-sm text-gray-400">2016.</p>
                <p>I remember having the biggest crush on <strong>Divine Favour (aka the finest boy in primary school)</strong> 😹. In my head, I had already planned our future. Meanwhile, you and <strong>Delight Omokiti</strong> were friends, and for some reason your friend liked him too… and I just decided to hate all of you 😭.</p>
                <p>Honestly, thinking about it now, it made no sense. I just didn’t like you for absolutely no reason.</p>
                <p>I remember you were in <strong>Blue House</strong>, and we never even had a conversation. Not one. But in my small mind then, you were already my enemy 😹.</p>
                <p>It’s funny how life works though. Back then I didn’t even know what life had planned. I didn’t know that the girl I randomly disliked for no reason would later become one of the most important people in my life.</p>
                <p>If someone had told me then that <strong>you would become my best friend</strong>, I would have laughed. But look at us now.</p>
            </div>
        )
    },
    {
        id: 2,
        title: "The Day I Knew You Were My Person",
        content: (
            <div className="space-y-4 text-gray-800 font-serif">
                <p>Remember when you came back from <strong>Navy Secondary School</strong> to Unical?</p>
                <p>It was <strong>JSS2</strong>. I came to Igbo class to look for <strong>Nmesoma</strong>, and then I saw you. I smiled immediately because in my head I was like, <em>“Ah… that girl I once hated. Maybe we can actually be friends now.”</em></p>
                <p>I honestly don’t even remember exactly how we started talking in <strong>JSS3</strong>, but I just remember loving you like you were my person.</p>
                <p>And then life did something beautiful for us. <strong>SS1. Same class.</strong></p>
                <p>How do I even explain that? Out of everybody, school just kept putting us together. Maybe the universe already knew we were supposed to be stuck with each other 😹.</p>
                <p>We literally <strong>trauma bonded</strong>. From being <strong>body shamed</strong>, to crying together after the whole class laughed at us, to becoming best friends because we both hated one person… <strong>Zion 😹😹😹</strong></p>
                <p>Remember the days we would cry together after the class embarrassed us? Or the days we would go and eat together in <strong>Study Park</strong>? Or when you used to write letters to <strong>Peace</strong> after she changed school? Or the days we prayed together? Or the day you told me you hated <strong>Wisdom</strong>? 😭</p>
                <p>Looking back now, I realize something. <strong>You are one of the best decisions I have ever made in my life.</strong> And yes, I mean it when I say it. I <strong>love love you</strong>. Yes, it’s a word.</p>
                <p className="mt-4 italic">Love,<br />Your older sister,<br />Dawn.</p>
            </div>
        )
    },
    {
        id: 3,
        title: "The Little Things I Love About You",
        content: (
            <div className="space-y-3 text-gray-800 font-serif">
                <p>There are so many little things about you that make you… you.</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>You are <strong>open-minded like mad</strong>. You listen before judging people.</li>
                    <li>You are one of the few people I know who is <strong>not male-centered</strong>. Boys are not the center of your life and I actually respect you so much for that.</li>
                    <li>You <strong>care deeply</strong> about people you love.</li>
                    <li>You <strong>respect people</strong>, even when they don’t deserve it sometimes.</li>
                    <li>You are not afraid to <strong>speak your mind</strong>.</li>
                    <li>You don’t like when I start getting <strong>too emotional or too attached to boys</strong> 😹 and you will quarrel me immediately.</li>
                    <li>Even though you are younger than me, sometimes you are <strong>more emotionally mature than me</strong>, and you always try to make me think better.</li>
                    <li>You are <strong>loyal</strong>.</li>
                    <li>You are <strong>protective</strong> of the people you love.</li>
                    <li>You can be <strong>very stubborn</strong>, but in the best way.</li>
                    <li>You are <strong>honest</strong>, even when the truth is uncomfortable.</li>
                    <li>You are <strong>funny without even trying</strong>.</li>
                    <li>And the most important thing is that you are <strong>real</strong>.</li>
                </ul>
                <p>In a world where many people pretend, you are just <strong>yourself</strong>. And I love that about you.</p>
            </div>
        )
    },
    {
        id: 4,
        title: "The Fights We Survived",
        content: (
            <div className="space-y-4 text-gray-800 font-serif">
                <p>We have actually fought a lot 😹.</p>
                <p>I remember when we were not talking because you told me to <strong>forget about Wisdom</strong>, but you still caught me going to his class. You were so angry that day 😭.</p>
                <p>Or the times when I didn’t want to <strong>take reading seriously</strong> and you shouted at me like my mother.</p>
                <p>But one moment that really shook me was when I started realizing that you were <strong>gay</strong>. Omor eh. I was actually sad and confused then. I even cried at <strong>Techvantage Unical</strong> when you kept simping for that stud 😹😹. I literally shouted at you.</p>
                <p>But looking back now, I realize something important. Our friendship <strong>survived honesty</strong>. We survived disagreements. We survived confusion. We survived emotions.</p>
                <p>And even when we fight, we somehow always come back to each other. <strong>Eke Ntami-Eval Grace</strong>, you are one of a kind. People who don’t have you in their lives are actually missing something special.</p>
                <p>But me? I’m lucky. Because I only share my <strong>tam tam</strong> with <strong>Mary</strong>. No one else.</p>
            </div>
        )
    },
    {
        id: 5,
        title: "Our Most Embarrassing Memories",
        content: (
            <div className="space-y-4 text-gray-800 font-serif">
                <p>Do we even have embarrassing memories?</p>
                <p>I’ve been trying to think, and honestly I don’t think we’ve ever gone through anything that is <em>too embarrassing</em> for us. At this point, nothing can really shame us again 😹.</p>
                <p>But okay… let’s talk about <strong>that day your mum read our chats</strong>.</p>
                <p>The chats where I told you I wanted to have a <strong>threesome with a boy and a girl</strong> 😭. And the funniest part is that I only said that so you would feel comfortable telling me you were gay.</p>
                <p>Then your mum read it. Omor eh. That day was <strong>chaotic, funny, and embarrassing at the same time</strong>. I didn’t even know whether to laugh or disappear from this earth.</p>
                <p>Or the day your mum found out I had a <strong>boyfriend</strong>. After that, I started <strong>avoiding her office like my life depended on it</strong> 😭. If I saw her direction, I would just change route immediately.</p>
                <p>Thinking about it now, it was embarrassing but also very funny. And honestly, I love your mum so much. Even with all the chaos she has witnessed from our lives 😹.</p>
                <p>But this letter is not really just a recall of events. It’s proof that <strong>we have shared so many ridiculous, funny, and chaotic moments together</strong> that only the two of us will ever truly understand.</p>
            </div>
        )
    },
    {
        id: 6,
        title: "Dearest Gentle Tammy",
        content: (
            <div className="space-y-4 text-gray-800 font-serif">
                <p>Dearest gentle tammy,</p>
                <p>This age we have awaited for far too long. All the talks about you being underaged will soon come to an end all the laughs about baby of the group will soon end and all the mockery we will still sha do when me and mary leave teenagehood for you by the end of the year.</p>
                <p>But today you are finally here. Eighteen. You would be an adult now but still our teenager oh myyy. We don dey old oh.</p>
                <p>And it is funny because it feels like just yesterday we were small girls in school trying to understand life trying to understand people trying to understand ourselves. Now look at us.</p>
                <p>Growing up slowly figuring things out finding our paths becoming people we once talked about becoming. And i just want you to know something.</p>
                <p>No matter how old we get no matter where life takes us no matter what happens you will always be someone very special to me. You are not just my friend. You are someone i grew up with someone who has seen versions of me that the world will never see someone who has laughed with me cried with me and stayed through everything.</p>
                <p>And for that i will always be grateful. So welcome to eighteen my child. I love love you.</p>
                <p className="mt-4 italic">Your older sister,<br />Dawn</p>
            </div>
        )
    },
    {
        id: 7,
        title: "The Future Neurosurgeon",
        content: (
            <div className="space-y-4 text-gray-800 font-serif">
                <p>Dear Tamzyy,</p>
                <p>There’s something I’ve never told you before, and I think it’s time I say it.</p>
                <p>Do you remember that time we went to the library to study for the further maths test? I think <strong>Favour</strong> actually passed us the sheets that day, and we were both so stressed trying to get through it.</p>
                <p>I got stuck on this one problem, like, I couldn’t figure it out at all, because I had been so caught up finishing a different assignment before break. And I just looked at you, hoping, waiting. And within, like, 5 or 10 minutes, you just solved it, like it was nothing.</p>
                <p>In that moment, I thought, <em>“God, what would I do without this girl?”</em></p>
                <p>You’re just so intelligent, and I hope you carry that same brilliance, that same energy, into <strong>medical school</strong>. Sincerely, I’m proud, so proud. <strong>My neurosurgeon.</strong> I know you’re going to be one of the best.</p>
                <p className="mt-4 italic">Love always,<br />Your sisy</p>
            </div>
        )
    },
    {
        id: 8,
        title: "Dreaming at Study Park",
        content: (
            <div className="space-y-4 text-gray-800 font-serif">
                <p>Dear Tamm,</p>
                <p>I still remember those days we used to sit at <strong>Study Park</strong> in secondary school, reading and just dreaming. Every time our class would sit and share their future, most of them said they wanted to marry, have kids, settle down. And strangely, neither of us ever said that.</p>
                <p>I don’t know if you remember, but we didn’t picture that for ourselves, not then. For us, it was about finishing secondary school, getting into university, maybe doing a master’s—those were the real dreams. And I’m just so glad that we’re here, that we’ve grown into young adults.</p>
                <p>And by the time you read this letter, you’re already an adult—and it hasn’t changed. You’re still focused, still driven. And in the next 10 years, I know we’ll look back, and none of us will be the same. We didn’t imagine being where we are, no children tying us down, no, we are still us, still free. And I’m just so proud of you.</p>
                <p className="mt-4 italic">Always,<br />Dawn</p>
            </div>
        )
    },
    {
        id: 9,
        title: "Why Your Mind Is Special",
        content: (
            <div className="space-y-4 text-gray-800 font-serif">
                <p>Sometimes i just sit and think about how your mind works.</p>
                <p>You see things differently you think deeper than most people our age and you are never satisfied with just the surface of things you want to understand everything completely. That is something i have always admired about you.</p>
                <p>The way you solve problems the way you read the way you question things the way you refuse to just accept nonsense. It is rare.</p>
                <p>And that is why i know medical school will not just have a student it will have someone who truly deserves to be there. I hope you never lose that curiosity that hunger to understand things because that is what will make you great.</p>
            </div>
        )
    },
    {
        id: 10,
        title: "Your Strength",
        content: (
            <div className="space-y-4 text-gray-800 font-serif">
                <p>People see you and think you are calm quiet or soft. But i know better.</p>
                <p>You are actually one of the strongest people i know. You carry things quietly you process things deeply and even when life is confusing you still move forward. You dont always show it but your strength is there.</p>
                <p>It is in the way you stand by what you believe. It is in the way you protect the people you care about. It is in the way you refuse to be someone you are not.</p>
                <p>And that kind of strength will take you very far in life.</p>
            </div>
        )
    },
    {
        id: 11,
        title: "The Woman You Are Becoming",
        content: (
            <div className="space-y-4 text-gray-800 font-serif">
                <p>Watching you grow has been beautiful. You are not the same girl from secondary school anymore.</p>
                <p>You are more confident. More aware of yourself. More sure of what you want in life. And i can see the woman you are becoming.</p>
                <p>A woman who is intelligent. A woman who is kind. A woman who is not afraid to live life on her own terms. I am genuinely proud of the person you are becoming.</p>
            </div>
        )
    },
    {
        id: 12,
        title: "The Times I Wished I Protected You",
        content: (
            <div className="space-y-4 text-gray-800 font-serif">
                <p>In <strong>SS2</strong>, I hated myself sometimes because I felt like I didn’t protect you enough.</p>
                <p>I kept thinking I should be the <strong>bigger person</strong>, but when I tried, I realized I wasn’t strong enough to handle everything. There were times I <strong>stood up to Andrew and Zion</strong>, but in my mind it still didn’t feel like enough.</p>
                <p>Even now, some of the things they said still stay with me sometimes. Their words were really mean, and even though they may have moved on with their lives, those moments still stayed with us for a while.</p>
                <p>But one thing I’m happy about is that <strong>we survived that phase</strong>. Secondary school had its bad moments, but it also had some of the <strong>best memories of our lives</strong>.</p>
                <p>And through all of it, we still had each other.</p>
            </div>
        )
    },
    {
        id: 13,
        title: "A Golden Moment",
        content: (
            <div className="flex flex-col items-center">
                <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden shadow-2xl border-4 border-white mb-2">
                    <Image src="/1.jpeg" alt="Memory" fill className="object-cover" />
                </div>
            </div>
        )
    },
    {
        id: 14,
        title: "Radiant Smile",
        content: (
            <div className="flex flex-col items-center">
                <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden shadow-2xl border-4 border-white mb-2">
                    <Image src="/2.jpeg" alt="Memory" fill className="object-cover" />
                </div>
            </div>
        )
    },
    {
        id: 15,
        title: "Pure Elegance",
        content: (
            <div className="flex flex-col items-center">
                <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden shadow-2xl border-4 border-white mb-2">
                    <Image src="/3.jpeg" alt="Memory" fill className="object-cover" />
                </div>
            </div>
        )
    },
    {
        id: 16,
        title: "Simply Stunning",
        content: (
            <div className="flex flex-col items-center">
                <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden shadow-2xl border-4 border-white mb-2">
                    <Image src="/4.jpeg" alt="Memory" fill className="object-cover" />
                </div>
            </div>
        )
    },
    {
        id: 17,
        title: "Shining Light",
        content: (
            <div className="flex flex-col items-center">
                <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden shadow-2xl border-4 border-white mb-2">
                    <Image src="/5.jpeg" alt="Memory" fill className="object-cover" />
                </div>
            </div>
        )
    },
    {
        id: 18,
        title: "Forever Queen",
        content: (
            <div className="flex flex-col items-center">
                <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden shadow-2xl border-4 border-white mb-2">
                    <Image src="/6.jpeg" alt="Memory" fill className="object-cover" />
                </div>
            </div>
        )
    }
];

const Envelope = ({ onClick, title, id, delay }: { onClick: () => void; title: string, id: number, delay: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay * 0.05 }}
            className="relative group cursor-pointer"
            onClick={onClick}
        >
            <motion.div
                whileHover={{ y: -10 }}
                className="relative transition-all duration-300"
            >
                <div className="bg-orange-100 w-full aspect-[4/3] rounded-sm shadow-xl relative preserve-3d border border-orange-200">

                    {/* Flap Section - 3D Opening */}
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-orange-200 z-40 transition-transform duration-700 origin-top group-hover:[transform:rotateX(160deg)] shadow-md"
                        style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}>
                    </div>

                    {/* Inner Paper (visible when flap opens) */}
                    <div className="absolute top-2 left-3 right-3 bottom-2 bg-white shadow-sm flex items-center justify-center p-2 z-10 transition-transform group-hover:-translate-y-6 duration-700 delay-100 border border-gray-100 uppercase">
                        <div className="w-full h-full border border-gray-50 flex items-center justify-center flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Heart className="w-4 h-4 text-red-300 mb-1 animate-pulse" />
                            <span className="text-[8px] font-bold text-gray-400">Read Letter</span>
                        </div>
                    </div>

                    {/* Front Flaps (visual depth) */}
                    <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden">
                        <div className="absolute bottom-0 left-0 w-full h-full bg-orange-50/60 shadow-[inset_0_-10px_20px_rgba(0,0,0,0.05)]"
                            style={{ clipPath: "polygon(0 100%, 100% 100%, 50% 45%)" }}></div>
                        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-orange-100/60 shadow-[inset_10px_0_20px_rgba(0,0,0,0.05)]"
                            style={{ clipPath: "polygon(0 0, 0 100%, 50% 50%)" }}></div>
                        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-orange-100/60 shadow-[inset_-10px_0_20px_rgba(0,0,0,0.05)]"
                            style={{ clipPath: "polygon(100% 0, 100% 100%, 50% 50%)" }}></div>
                    </div>

                    <div className="flex flex-col items-center justify-center h-full relative z-40">
                        <div className="w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-sm border border-orange-200 mb-1">
                            <Heart className="w-5 h-5 text-red-500 fill-red-500" />
                        </div>
                        <span className="text-[10px] font-bold text-orange-900 uppercase tracking-widest bg-white/80 px-2 py-0.5 rounded-full border border-orange-200 shadow-sm">Note {id}</span>
                    </div>
                </div>

                {/* Shadow */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[85%] h-2 bg-black/10 blur-xl rounded-full z-0 group-hover:scale-x-110 transition-transform"></div>
            </motion.div>

            <div className="mt-4 text-center">
                <h3 className="text-white text-[10px] font-bold opacity-40 group-hover:opacity-100 transition-all uppercase tracking-widest leading-tight px-1">
                    {title}
                </h3>
            </div>
        </motion.div>
    );
};

export default function EnvelopeLetters() {
    const [selectedLetter, setSelectedLetter] = useState<Letter | null>(null);
    const [downloading, setDownloading] = useState(false);
    const [visibleCount, setVisibleCount] = useState(3);
    const letterRef = React.useRef<HTMLDivElement>(null);

    const handleLoadMore = () => {
        setVisibleCount(prev => Math.min(prev + 3, lettersData.length));
    };

    const downloadPDF = async () => {
        if (!letterRef.current || !selectedLetter) return;

        setDownloading(true);
        try {
            const element = letterRef.current;
            const canvas = await html2canvas(element, {
                scale: 2,
                backgroundColor: "#fdfcf0",
                logging: false,
                useCORS: true
            });

            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF({
                orientation: "portrait",
                unit: "px",
                format: [canvas.width / 2, canvas.height / 2]
            });

            pdf.addImage(imgData, "PNG", 0, 0, canvas.width / 2, canvas.height / 2);
            pdf.save(`Letter_${selectedLetter.id}_${selectedLetter.title.replace(/\s+/g, '_')}.pdf`);
        } catch (error) {
            console.error("PDF generation failed:", error);
        } finally {
            setDownloading(false);
        }
    };

    return (
        <section className="bg-zinc-950 py-24 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-500 border border-red-500/20 mb-6"
                    >
                        <Mail className="w-4 h-4" />
                        <span className="text-xs font-bold uppercase tracking-widest">Special Collection</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
                        18 Birthday <span className="text-red-500">Envelopes</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Letters, memories, and everything in between. Open each one to explore our journey over the years.
                    </p>
                </div>

                {/* Vertical Stack Layout */}
                <div className="flex flex-col items-center space-y-16 max-w-md mx-auto relative">
                    <AnimatePresence mode="popLayout">
                        {lettersData.slice(0, visibleCount).map((letter) => (
                            <motion.div
                                key={letter.id}
                                layout
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5 }}
                                className="w-full"
                            >
                                <Envelope
                                    id={letter.id}
                                    title={letter.title}
                                    onClick={() => setSelectedLetter(letter)}
                                    delay={0}
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {/* Load More Button */}
                    {visibleCount < lettersData.length && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="pt-8"
                        >
                            <button
                                onClick={handleLoadMore}
                                className="group relative px-8 py-4 bg-red-600 hover:bg-red-500 text-white rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(239,68,68,0.3)] flex items-center gap-3 overflow-hidden"
                            >
                                <span className="relative z-10">Read More Letters</span>
                                <Heart className="w-5 h-5 group-hover:scale-125 transition-transform relative z-10 fill-white" />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                            </button>
                            <p className="text-gray-500 text-center mt-4 text-sm font-medium">
                                Showing {visibleCount} of {lettersData.length} letters
                            </p>
                        </motion.div>
                    )}
                </div>
            </div>

            {/* Letter View Modal */}
            <AnimatePresence>
                {selectedLetter && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
                        onClick={() => setSelectedLetter(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, y: 100, rotate: -2 }}
                            animate={{ scale: 1, y: 0, rotate: 0 }}
                            exit={{ scale: 0.8, y: 100, rotate: 2 }}
                            transition={{ type: "spring", damping: 20, stiffness: 100 }}
                            className="bg-[#fdfcf0] w-full max-w-xl max-h-[85vh] shadow-[0_30px_60px_-12px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col rounded-sm border-l-4 border-red-500/20"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Paper Header */}
                            <div className="p-6 pb-2 flex justify-between items-start border-b border-gray-200/50 bg-[#fdfcf0]">
                                <div>
                                    <h3 className="text-2xl font-serif font-bold text-gray-900">
                                        {selectedLetter.title}
                                    </h3>
                                    <span className="text-xs font-serif italic text-red-600">Letter #{selectedLetter.id}</span>
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={downloadPDF}
                                        disabled={downloading}
                                        title="Download as PDF"
                                        className="p-2 bg-white hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-full border border-gray-200 transition-all flex items-center gap-2 group"
                                    >
                                        <Download className={`w-5 h-5 ${downloading ? 'animate-bounce' : ''}`} />
                                        <span className="text-[10px] font-bold uppercase hidden sm:block">PDF</span>
                                    </button>
                                    <button
                                        onClick={() => setSelectedLetter(null)}
                                        className="p-2 bg-gray-100 hover:bg-red-100 rounded-full transition-colors text-gray-400 hover:text-red-500"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                            {/* Paper Content */}
                            <div className="p-8 md:p-12 overflow-y-auto custom-scrollbar-paper" ref={letterRef}>
                                <div className="prose prose-red max-w-none">
                                    <div className="mb-8 border-b border-dashed border-red-100 pb-4">
                                        <div className="flex justify-between items-center text-red-300">
                                            <Heart className="w-8 h-8 fill-current" />
                                            <span className="font-serif italic font-bold">For my Tam Tam</span>
                                            <Heart className="w-8 h-8 fill-current" />
                                        </div>
                                    </div>
                                    {selectedLetter.content}
                                </div>
                            </div>

                            {/* Paper Footer */}
                            <div className="p-6 bg-gray-50/50 flex justify-center border-t border-gray-100">
                                <div className="w-12 h-12 rounded-full border-2 border-dashed border-red-200 flex items-center justify-center">
                                    <Heart className="w-6 h-6 text-red-300" />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx global>{`
                .custom-scrollbar-paper::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar-paper::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar-paper::-webkit-scrollbar-thumb {
                    background: #e2e8f0;
                    border-radius: 10px;
                }
            `}</style>
        </section>
    );
}
