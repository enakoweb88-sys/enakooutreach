import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import FadeIn from './FadeIn';

const stories = [
    {
        name: 'Sarah Akot',
        role: 'Young Entrepreneur, Douala',
        text: 'The business training programme helped me start my own community garden, providing fresh produce for my village and financial independence for my family. Enako Outreach changed everything.',
        image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&auto=format&fit=crop&q=80',
        fallback: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDj7xaxrAqkCGSimD-YN1QYbpmdouNi4ZI0SgLMrNd5lnYg76qex7A8K98Kv2j4QCKc9AucXl6Lbal4YZDU3RJGNk8UAz5_BIJ4o9gigHpePjDA7T_97lpV50TQP7o_xoXFxfBcuG3avHFyb_7U7yvGwDJ3xUUrji5V2C6pwlzRv82-ZUpULExh35WFRE9gSJKi7H9OSVPi4z4Solk_qdySXOk_lE5aP2lQ0IwsPh3LaA5AmNFuPB-VO5DV2zSIn3mbGKP82IrzQnI',
    },
    {
        name: 'David Obi',
        role: 'Computer Science Scholar',
        text: 'Thanks to the technology grant, I completed my degree and launched a local tech hub that now trains fifty youth each month. This foundation believed in me before I believed in myself.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80',
        fallback: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKWMGcVwFYUe-lACRbwLg0aey91CJPqM5sShYGA6Brmd7AF8A3O3pqIqyqsw6PpZL4bMXokYm7yttOMQvGY7329YvjfhuKxkzc5V2TKdpKMg4dNUqJ6NbjVIcbp2Aq3OTaC8R9qshcngnhqImNqTMkIfRCo5AEEsxzi6vE8xfcTba9Ngm9D46GlrEvP5yhE8_eb3MR6oaAambK6lQ2oofxonzNahHWUbNWxz9CvfXwxZ06k4okzg8ExCUuv4PrzqD1wjYCrgLK2Zc',
    },
    {
        name: 'Abena Osei',
        role: 'Scholarship Recipient, Yaoundé',
        text: 'Being selected as top student in my district opened doors I only dreamed of. The Enako Outreach scholarship changed my entire family\'s trajectory — it is the reason I am in university today.',
        image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&auto=format&fit=crop&q=80',
        fallback: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBf36m3k6OIJWgQJnMGVHWXJXz5cQVL1FU4mVwbkZ5l0IJarktCFr78ZR2kFmSnxpLVENEXKCAzIinLHE3H4oJFe6MmOPVzf9Sik8nUO7XFujIqsGExm87DQ6IYXM45-r69fvInAFBKOgXq11jSQyWEiNlqZIPMDGjG3dHfzJG7HiwNHQsD_FdNQRIKQ3jVvAbfG4Nxq-bxOK6GRatjfJbshyF7L44Q1JjqjCiQE5QAIHXRXjhUjQAOa9cE2-vn2LOqAYlDCvPOkE',
    },
];

const BeneficiaryStories = () => {
    const [current, setCurrent] = useState(0);

    const prev = () => setCurrent((c) => (c === 0 ? stories.length - 1 : c - 1));
    const next = () => setCurrent((c) => (c === stories.length - 1 ? 0 : c + 1));

    const story = stories[current];

    return (
        <section className="py-24 px-6 md:px-16 bg-transparent overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <FadeIn direction="up">
                    <div className="text-center mb-16">
                        <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] block mb-4">Human Stories</span>
                        <h2 className="text-navy text-4xl md:text-5xl font-black tracking-tight leading-tight">
                            Voices of <span className="text-primary ">Transformation.</span>
                        </h2>
                    </div>
                </FadeIn>

                {/* Story card — split layout like the partner reference */}
                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -40 }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                        >
                            {/* Left — Rounded photo */}
                            <div className="relative">
                                {/* Rounded rectangle photo with cut corner like reference */}
                                <div className="w-full max-w-md mx-auto lg:mx-0 rounded-[3rem_3rem_8rem_3rem] overflow-hidden aspect-[4/5] shadow-2xl shadow-navy/15">
                                    <img
                                        src={story.image}
                                        alt={story.name}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = story.fallback;
                                        }}
                                    />
                                </div>
                                {/* Small accent dot */}
                                <div className="absolute bottom-6 left-6 w-8 h-8 rounded-full bg-primary shadow-lg shadow-primary/40" />
                            </div>

                            {/* Right — Text content */}
                            <div className="lg:pl-8">
                                <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] block mb-6">
                                    Community Impact Story
                                </span>

                                <blockquote className="text-navy text-3xl md:text-4xl font-black leading-tight tracking-tight  mb-8" style={{ fontFamily: 'Georgia, serif' }}>
                                    "{story.text}"
                                </blockquote>

                                <div className="mb-8">
                                    <p className="text-navy font-black text-lg">{story.name}</p>
                                    <p className="text-slate-400 text-sm font-medium">{story.role}</p>
                                </div>

                                <Link
                                    to="/stories"
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-black text-sm uppercase tracking-widest rounded-2xl hover:bg-primary/90 hover:scale-105 transition-all shadow-xl shadow-primary/30"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Pagination dots */}
                    <div className="flex items-center justify-center gap-3 mt-12">
                        <button onClick={prev} className="w-10 h-10 rounded-full border-2 border-navy flex items-center justify-center hover:bg-navy hover:text-white transition-all">
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                        {stories.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                className={`transition-all duration-300 rounded-full ${i === current ? 'w-8 h-3 bg-primary' : 'w-3 h-3 bg-slate-200'}`}
                            />
                        ))}
                        <button onClick={next} className="w-10 h-10 rounded-full border-2 border-navy flex items-center justify-center hover:bg-navy hover:text-white transition-all">
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BeneficiaryStories;
