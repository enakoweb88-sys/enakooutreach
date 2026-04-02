import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { School, Award, Users, Heart, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
    {
        image: '/assets/images/carousel-1.png',
        tag: 'Education & Opportunity',
        title: 'Empowering Futures Across Cameroon',
        subtitle: 'Transforming Communities',
        description: 'Enako Outreach delivers scholarships, school rehabilitation, and teacher support to rural and urban communities across Cameroon.',
        icon: <School className="w-6 h-6" />,
        cta1: { label: 'Apply for Help', to: '/contact' },
        cta2: { label: 'Learn More', to: '/programs/scholarships' },
    },
    {
        image: '/assets/images/carousel-2.png',
        tag: 'Teacher Excellence',
        title: 'Rewarding Educators Who Change Lives',
        subtitle: 'Teacher Rewards Programme',
        description: 'We recognise and reward outstanding teachers with grants, training, and professional development opportunities throughout Cameroon.',
        icon: <Award className="w-6 h-6" />,
        cta1: { label: 'Nominate a Teacher', to: '/programs/teacher-rewards' },
        cta2: { label: 'Our Programs', to: '/programs' },
    },
    {
        image: '/assets/images/carousel-3.png',
        tag: 'Community Action',
        title: 'Building Stronger Communities Together',
        subtitle: 'Humanitarian Response',
        description: 'From clean water access to emergency relief, we uplift entire communities through coordinated, sustainable humanitarian programmes.',
        icon: <Users className="w-6 h-6" />,
        cta1: { label: 'Donate Now', to: '/donate' },
        cta2: { label: 'Report a Need', to: '/contact' },
    },
];

const PremiumHeroCarousel = () => {
    const [current, setCurrent] = useState(0);
    const [isAutoplay] = useState(true);

    const next = useCallback(() => setCurrent((prev) => (prev + 1) % slides.length), []);
    const prev = useCallback(() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length), []);

    useEffect(() => {
        if (!isAutoplay) return;
        const timer = setInterval(next, 8000);
        return () => clearInterval(timer);
    }, [isAutoplay, next]);

    const slide = slides[current];

    return (
        <section className="relative w-full h-screen min-h-[700px] max-h-[950px] overflow-hidden bg-slate-900">
            {/* Background image */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={`bg-${current}`}
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 0.55, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 2.5, ease: [0.4, 0, 0.2, 1] }}
                    className="absolute inset-0 z-0"
                >
                    <div className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${slide.image})` }} />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                </motion.div>
            </AnimatePresence>

            {/* Dot grid overlay */}
            <div className="absolute inset-0 z-[1] pointer-events-none opacity-8"
                style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '48px 48px' }} />

            {/* Content */}
            <div className="relative z-20 h-full flex items-center">
                <div className="max-w-7xl mx-auto px-6 md:px-12 w-full pt-32">
                    <div className="max-w-3xl">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`content-${current}`}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                                className="space-y-6"
                            >
                                {/* Tag */}
                                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 backdrop-blur-md text-green-300 text-xs font-bold uppercase tracking-[0.3em]">
                                    <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                                    {slide.tag}
                                </div>

                                {/* Subtitle */}
                                <span className="block text-green-400 text-sm font-bold uppercase tracking-widest">
                                    {slide.subtitle}
                                </span>

                                {/* Title — bold, no  */}
                                <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight">
                                    {slide.title}
                                </h1>

                                {/* Description */}
                                <p className="text-slate-300 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
                                    {slide.description}
                                </p>

                                {/* CTAs */}
                                <div className="flex flex-wrap gap-4 pt-2">
                                    <Link to={slide.cta1.to}
                                        className="flex items-center gap-2.5 bg-green-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-green-700 transition-all shadow-2xl shadow-green-600/30 hover:scale-105 active:scale-95">
                                        <Heart className="w-4 h-4" />
                                        {slide.cta1.label}
                                    </Link>
                                    <Link to={slide.cta2.to}
                                        className="flex items-center gap-2.5 bg-white/10 border border-white/25 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/20 transition-all backdrop-blur-sm">
                                        {slide.cta2.label}
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Navigation arrows */}
            <button onClick={prev}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/25 transition-colors backdrop-blur-sm"
                aria-label="Previous slide">
                <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={next}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/25 transition-colors backdrop-blur-sm"
                aria-label="Next slide">
                <ChevronRight className="w-5 h-5" />
            </button>

            {/* Dot indicators */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
                {slides.map((_, i) => (
                    <button key={i} onClick={() => setCurrent(i)}
                        className={`transition-all duration-500 rounded-full ${i === current ? 'w-10 h-3 bg-green-400' : 'w-3 h-3 bg-white/40 hover:bg-white/60'}`}
                        aria-label={`Slide ${i + 1}`} />
                ))}
            </div>

            {/* Slide counter */}
            <div className="absolute bottom-10 right-12 z-30 text-white/60 text-sm font-bold">
                {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
            </div>
        </section>
    );
};

export default PremiumHeroCarousel;
