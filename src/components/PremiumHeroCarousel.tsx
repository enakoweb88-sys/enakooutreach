import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Play, School, Award, Users } from 'lucide-react';

const slides = [
    {
        image: '/assets/images/carousel-1.png',
        tag: 'Education Hub',
        title: 'Empowering Futures. Transforming Communities.',
        description: 'Enako Outreach provides essential learning materials and infrastructure to schools in remote areas across Africa.',
        icon: <School className="w-6 h-6" />,
        color: 'primary'
    },
    {
        image: '/assets/images/carousel-2.png',
        tag: 'Teacher Excellence',
        title: 'Rewarding Educators. Inspiring Success.',
        description: 'We incentivize excellence through professional development and performance-based grants for dedicated teachers.',
        icon: <Award className="w-6 h-6" />,
        color: 'green'
    },
    {
        image: '/assets/images/carousel-3.png',
        tag: 'Community Uplift',
        title: 'Sustainable Growth. Collective Action.',
        description: 'From solar power to clean water, we uplift entire villages through strategic humanitarian support.',
        icon: <Users className="w-6 h-6" />,
        color: 'blue'
    }
];

const PremiumHeroCarousel = () => {
    const [current, setCurrent] = useState(0);
    const [isAutoplay] = useState(true);

    const next = useCallback(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
    }, []);

    const prev = useCallback(() => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    }, []);

    useEffect(() => {
        if (!isAutoplay) return;
        const timer = setInterval(next, 8000);
        return () => clearInterval(timer);
    }, [isAutoplay, next]);

    return (
        <section className="relative w-full h-[90vh] xl:h-[850px] overflow-hidden bg-navy">
            {/* Background Slides */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 0.6, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 3, ease: [0.4, 0, 0.2, 1] }}
                    className="absolute inset-0 z-0"
                >
                    <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${slides[current].image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/40 to-transparent" />
                </motion.div>
            </AnimatePresence>

            {/* Grid Decoration */}
            <div className="absolute inset-0 z-1 pointer-events-none opacity-10"
                style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            {/* Content Container */}
            <div className="container relative z-20 mx-auto h-full flex items-center px-6 md:px-12">
                <div className="max-w-3xl">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                            className="space-y-8"
                        >
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-black uppercase tracking-[0.2em]">
                                <span className={`flex h-2 w-2 rounded-full bg-primary animate-pulse`} />
                                {slides[current].tag}
                            </div>

                            <h1 className="text-white text-5xl md:text-8xl font-black leading-[1.05] tracking-tight">
                                {slides[current].title.split('. ').map((part, i) => (
                                    <span key={i} className="block last:text-primary italic">
                                        {part}{i === 0 ? '.' : ''}
                                    </span>
                                ))}
                            </h1>

                            <p className="text-slate-300 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
                                {slides[current].description}
                            </p>

                            <div className="flex flex-wrap gap-6 pt-4">
                                <Link to="/donate" className="group relative flex items-center justify-center overflow-hidden rounded-xl bg-primary px-10 h-16 text-white font-black transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-primary/40">
                                    <span className="relative z-10 text-lg">Donate Now</span>
                                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                                </Link>
                                <Link to="/impact" className="flex items-center justify-center rounded-xl bg-white/5 backdrop-blur-md border border-white/20 px-10 h-16 text-white font-black hover:bg-white/10 transition-all text-lg">
                                    Our Impact
                                </Link>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Navigation Controls */}
            <div className="absolute bottom-12 left-6 md:left-12 z-30 flex items-center gap-4">
                <button onClick={prev} className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all">
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <div className="flex gap-2">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={`h-1.5 transition-all duration-500 rounded-full ${current === i ? 'w-12 bg-primary' : 'w-4 bg-white/20 hover:bg-white/40'}`}
                        />
                    ))}
                </div>
                <button onClick={next} className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all">
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>

            {/* Video Play Button (Pulsating) */}
            <div className="absolute bottom-20 right-6 md:right-12 z-30 hidden lg:flex flex-col items-center gap-4">
                <div className="relative group cursor-pointer">
                    <div className="absolute inset-0 bg-primary/30 rounded-full animate-ping scale-150" />
                    <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse scale-125" />
                    <div className="relative w-20 h-20 rounded-full bg-white flex items-center justify-center text-primary shadow-2xl group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 fill-current translate-x-0.5" />
                    </div>
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60">Watch Film</span>
            </div>

            {/* Slide Index */}
            <div className="absolute top-1/2 -right-6 -translate-y-1/2 rotate-90 hidden xl:block">
                <span className="text-white/10 text-9xl font-black">{current + 1}</span>
            </div>
        </section>
    );
};

export default PremiumHeroCarousel;
