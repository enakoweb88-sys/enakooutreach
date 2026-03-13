import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { School, Award, Users } from 'lucide-react';

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

                            <h1 className="text-white text-4xl md:text-6xl font-black leading-[1.1] tracking-tight">
                                {slides[current].title.split('. ').map((part, i) => (
                                    <span key={i} className="block last:text-primary italic">
                                        {part}{i === 0 ? '.' : ''}
                                    </span>
                                ))}
                            </h1>

                            <p className="text-slate-300 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
                                {slides[current].description}
                            </p>

                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

        </section>
    );
};

export default PremiumHeroCarousel;
